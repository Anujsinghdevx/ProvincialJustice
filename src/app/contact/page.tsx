'use client';

import React from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'support@provincial.com',
    href: 'mailto:support@provincial.com',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-123-456-7890',
    href: 'tel:+911234567890',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: (
      <>
        Provincial Justice Pvt. Ltd.<br />
        123 Legal Avenue,<br />
        New Delhi, India
      </>
    ),
    href: null,
    color: 'bg-red-100 text-red-600',
  },
];

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Provincial Justice</title>
        <meta
          name="description"
          content="Reach out to Provincial Justice for inquiries, support, or feedback about Indian laws and regulations."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-[#f7f7f7] to-[#eaeaea] flex flex-col items-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          📞 Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-10 leading-relaxed"
        >
          Got a question or feedback? We&apos;re here to help you with everything related to Indian laws, legal
          information, and navigating our platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Reach Us At</h2>

          <div className="space-y-6">
            {contactItems.map(({ icon: Icon, label, value, href, color }, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div
                  className={`p-3 rounded-xl ${color} transition transform group-hover:scale-105`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-gray-700 text-sm md:text-lg">
                  <div className="font-semibold">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      className="hover:underline text-blue-600 hover:text-blue-800 transition"
                    >
                      {value}
                    </a>
                  ) : (
                    <address className="not-italic leading-relaxed">{value}</address>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default ContactPage;
