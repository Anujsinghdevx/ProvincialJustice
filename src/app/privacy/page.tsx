'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Info, Lock } from 'lucide-react';
import Head from 'next/head';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Provincial Justice</title>
        <meta
          name="description"
          content="Review the privacy policy of Provincial Justice to understand how we protect and manage your personal data."
        />
      </Head>

      <main className="bg-gradient-to-br from-gray-50 to-white min-h-screen px-6 py-16">
        <section className="max-w-4xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">🛡️ Privacy Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At <strong>Provincial Justice</strong>, we are committed to maintaining the privacy and security of your
              personal information. This policy explains how we collect, use, and protect your data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-6"
          >
            {/* Section 1 - Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-blue-600">
                <Lock className="w-6 h-6" />
                <h2 className="text-xl font-semibold text-gray-900">Your Data & Privacy</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                We do not sell, trade, or rent your personal information to others. Any data collected is used solely
                for providing a better user experience and improving our platform. Cookies may be used to remember
                preferences.
              </p>
            </div>

            {/* Section 2 - Disclaimer */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-yellow-600">
                <Info className="w-6 h-6" />
                <h2 className="text-xl font-semibold text-gray-900">Disclaimer</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                This website does not claim to provide fully accurate or authoritative legal information. The content
                is part of a demo project aiming to present legal data in an understandable way and should not be used
                as a substitute for legal advice.
              </p>
              <p className="text-gray-700 text-base md:text-lg">
                We may enhance the platform over time to support deeper legal insights and resources.
              </p>
            </div>

            {/* Section 3 - Security */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-green-600">
                <ShieldCheck className="w-6 h-6" />
                <h2 className="text-xl font-semibold text-gray-900">Security Measures</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                We implement appropriate technical and organizational measures to protect your personal data from
                unauthorized access, disclosure, or loss. However, no internet transmission is 100% secure, and we
                encourage users to exercise caution.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;

