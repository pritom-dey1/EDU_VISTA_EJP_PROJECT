"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and all major online payments." },
  { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel anytime directly from your account dashboard." },
  { question: "Do you offer refunds?", answer: "We provide a 14-day refund policy for all plans." },
  { question: "Are courses suitable for beginners?", answer: "Absolutely! We have courses for all skill levels, from beginner to advanced." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h3 className="text-sm uppercase tracking-widest text-purple-300">FAQ</h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Frequently Asked Questions</h2>
        <p className="text-gray-400 mt-4">Answers to common questions about our courses, plans, and access.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-semibold focus:outline-none"
            >
              {faq.question}
              <span
                className={`transform transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}
              >
                +
              </span>
            </button>

            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="px-6 pb-4 text-gray-300 text-sm overflow-hidden"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
