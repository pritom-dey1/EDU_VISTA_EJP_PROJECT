"use client";


import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";


// ---- PRICING / PLANS ----
const plans = [
{
id: 1,
name: "Basic",
price: "$29/mo",
features: ["Access to all beginner courses", "Community support", "Limited resources"],
popular: false,
},
{
id: 2,
name: "Pro",
price: "$59/mo",
features: ["All Basic features", "Advanced courses", "1-on-1 mentorship"],
popular: true,
},
{
id: 3,
name: "Enterprise",
price: "$99/mo",
features: ["All Pro features", "Team access", "Priority support"],
popular: false,
},
];


export function Pricing() {
return (
<section className="w-full bg-black py-24 px-6">
<div className="max-w-7xl mx-auto text-center mb-16">
<motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-sm uppercase tracking-widest text-purple-300">Pricing</motion.h3>
<motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-extrabold text-white mt-3">Choose the plan that fits you</motion.h2>
<motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-gray-400 max-w-2xl mx-auto mt-4">Simple, transparent pricing with no hidden fees. Upgrade anytime.</motion.p>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{plans.map((plan) => (
<motion.div
key={plan.id}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className={`relative rounded-2xl p-8 shadow-xl hover:scale-[1.03] transition-transform cursor-pointer bg-white/5 border border-white/10 ${plan.popular ? 'border-purple-500/50 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-pink-500/20' : ''}`}
>
{plan.popular && <div className="absolute top-0 right-0 -mt-4 mr-4 px-3 py-1 text-xs bg-purple-500 text-white font-semibold rounded-full">Popular</div>}
<h3 className="text-white font-bold text-xl mb-4">{plan.name}</h3>
<p className="text-white text-3xl font-extrabold mb-6">{plan.price}</p>
<ul className="text-gray-300 space-y-3 mb-6">
{plan.features.map((feat, idx) => (
<li key={idx} className="flex items-center gap-2"><FaCheck className="text-purple-500" /> {feat}</li>
))}
</ul>
<button className="w-full py-3 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-xl text-white font-semibold shadow-lg hover:opacity-90 transition duration-300">Select Plan</button>
</motion.div>
))}
</div>
</section>
);
}