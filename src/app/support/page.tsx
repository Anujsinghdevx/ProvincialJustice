'use client';

import React, { useState } from 'react';
import { MailSearch, HelpCircle, AlertCircle, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: 1,
    question: 'How do I use the search feature?',
    answer:
      'Simply type the law or keyword in the search bar at the top. You can also filter results by jurisdiction or law type.',
    icon: MailSearch,
  },
  {
    id: 2,
    question: 'How can I get legal assistance?',
    answer:
      'We recommend consulting with a licensed attorney. You can find professionals in your area through our trusted network.',
    icon: UserCheck,
  },
  {
    id: 3,
    question: 'How do I report an error in the law database?',
    answer:
      'If you find outdated or incorrect information, please contact us. We review and update laws regularly to ensure accuracy.',
    icon: AlertCircle,
  },
];

const SupportPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white text-gray-900 font-sans min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Support</h1>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          At <strong>Provincial Justice</strong>, we’re committed to helping you navigate the legal world with ease. Have questions? We’ve got answers!
        </p>

        <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            Frequently Asked Questions (FAQ)
          </h2>

          <div className="space-y-4">
            {faqs.map(({ id, question, answer, icon: Icon }, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={id}
                  layout
                  initial={false}
                  transition={{ layout: { duration: 0.3, ease: 'easeInOut' } }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-100 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 text-lg font-medium">
                      <Icon className="text-indigo-600 w-5 h-5 flex-shrink-0" />
                      {question}
                    </div>
                    <span className="text-indigo-500 font-bold text-xl">{isOpen ? '-' : '+'}</span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, scaleY: 0.95 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 text-gray-700 text-base origin-top"
                      >
                        {answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
