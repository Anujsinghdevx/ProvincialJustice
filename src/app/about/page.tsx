'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>
      {/* SEO Head Tags */}
      <Head>
        <title>About Us | Provincial Justice</title>
        <meta
          name="description"
          content="Learn about Provincial Justice — your accessible guide to Indian laws, legal frameworks, and rights awareness."
        />
        <meta
          name="keywords"
          content="Indian laws, legal rights, Provincial Justice, legal information, justice awareness"
        />
      </Head>

      <main className="bg-gray-50 min-h-screen flex flex-col items-center py-4 px-6">
        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center flex items-center gap-3 mb-6"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-12 leading-relaxed"
        >
          Empowering citizens, students, and professionals with accessible, clear, and reliable legal knowledge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center max-w-7xl gap-12"
        >
          {/* Left Column - Text */}
          <div className="md:w-1/2 text-gray-800">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base md:text-lg leading-relaxed mb-8"
            >
              Welcome to <strong className="text-indigo-600">Provincial Justice</strong>, your comprehensive
              guide to understanding the diverse legal frameworks that govern our nation. We are committed to
              empowering individuals, professionals, and communities with accurate, accessible, and well-organized
              information about the laws that shape society.
              <br />
              <br />
              At <strong className="text-indigo-600">Provincial Justice</strong>, we believe that justice begins
              with awareness. Our platform is designed to make legal information easy to navigate, understand, and
              apply — catering to everyone from law students and legal practitioners to ordinary citizens seeking
              clarity about their rights and responsibilities.
            </motion.p>

            {/* Vision Section */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-gray-900 flex items-center gap-2 mb-4"
            >
              <BookOpen className="w-7 h-7 text-indigo-500" />
              Our Vision
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-base md:text-lg leading-relaxed text-gray-700"
            >
              We envision a society where legal knowledge is not a privilege but a fundamental right. By equipping
              people with the tools to understand and navigate the legal landscape, we aim to promote a culture of
              justice, accountability, and informed citizenship.
            </motion.p>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="relative w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white"
            >
              <Image
                src="/sideimage.png"
                alt="Legal awareness illustration"
                width={500}
                height={400}
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default AboutPage;
