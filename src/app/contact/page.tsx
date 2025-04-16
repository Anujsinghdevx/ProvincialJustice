'use client'

import React from 'react'
import Head from 'next/head'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactPage = () => {
  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>Contact Us | Provincial Justice</title>
        <meta
          name="description"
          content="Reach out to Provincial Justice for inquiries, support, or feedback about Indian laws and regulations."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-[#f7f7f7] to-[#eaeaea] flex flex-col items-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">📞 Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-10 leading-relaxed">
          Got a question or feedback? Wer`&apos;`e here to help you with everything related to Indian laws, legal
          information, and navigating our platform.
        </p>

        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reach Us At</h2>

          <div className="space-y-4 text-gray-700 text-lg">
            <div className="flex items-center gap-4">
              <Mail size={26} className="text-blue-600" />
              <a
                href="mailto:support@provincialjustice.com"
                className="hover:text-blue-700 transition"
              >
                support@provincialjustice.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone size={26} className="text-green-600" />
              <span>+91-123-456-7890</span>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={26} className="text-red-600 mt-1" />
              <address className="not-italic">
                Provincial Justice Pvt. Ltd.<br />
                123 Legal Avenue,<br />
                New Delhi, India
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
