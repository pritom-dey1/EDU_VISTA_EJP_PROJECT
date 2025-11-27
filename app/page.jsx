import Courses from "@/Components/Home/Courses";
import { FAQ } from "@/Components/Home/FAQ";
import Features from "@/Components/Home/Features";
import Hero from "@/Components/Home/Hero";
import { Pricing } from "@/Components/Home/Pricing";
import Testimonials from "@/Components/Home/Testimonials";

export default function Home() {
  return (
    <div>
    <Hero />
    <Features />
    <Courses></Courses>
    <Pricing />
    <FAQ />
    <Testimonials />
   </div>
  );
}
