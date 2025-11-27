import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const USERS_FILE = path.join(process.cwd(), "users.json");

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Read users from JSON file
          if (!fs.existsSync(USERS_FILE)) return null;
          const raw = fs.readFileSync(USERS_FILE, "utf-8");
          const users = raw ? JSON.parse(raw) : [];

          const user = users.find(u => u.email === credentials.email);
          if (!user) return null;

          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) return null;

          // Return user object without password
          return { id: user.id, email: user.email };
        } catch (err) {
          console.error("Authorize error:", err);
          return null;
        }
      },
    }),
  ],

callbacks: {
  async jwt({ token, user, account }) {
    // First login (Credentials or Google)
    if (user) {
      token.user = {
        id: user.id || token.user?.id,
        email: user.email || token.user?.email
      };
    }

    // Google provider extra safeguard
    if (account?.provider === "google") {
      token.user.email = token.user.email || user?.email || token.email;
    }

    return token;
  },
  async session({ session, token }) {
    session.user = token.user; // always include id & email
    return session;
  },
},
  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
