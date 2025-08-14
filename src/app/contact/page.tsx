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
    color: 'bg-indigo-100 text-indigo-600',
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
    color: 'bg-pink-100 text-pink-600',
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

      <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center flex items-center"
        >
          <Phone className="mr-2 mt-2 h-6 w-6 sm:h-8 sm:w-8" /> Contact Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-12 leading-relaxed"
        >
          Got a question or feedback? We’re here to help you with everything related to Indian laws, legal
          information, and navigating our platform.
        </motion.p>

        {/* Contact Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-3xl bg-white rounded-3xl shadow-md p-8 md:p-12 space-y-8 border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-gray-800">Reach Us At</h2>

          <div className="space-y-6">
            {contactItems.map(({ icon: Icon, label, value, href, color }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition group shadow-sm"
              >
                {/* Icon */}
                <div
                  className={`p-3 rounded-xl ${color} flex items-center justify-center transition transform group-hover:scale-105`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text */}
                <div className="flex-1 text-gray-700 text-sm md:text-lg">
                  <div className="font-semibold text-gray-900">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      className="hover:underline text-indigo-600 hover:text-indigo-800 transition break-all"
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
