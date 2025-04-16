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

      <main className="bg-gradient-to-r g-gradient-to-br from-[#f7f7f7] to-[#eaeaea] min-h-screen flex flex-col items-center p-6">
        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl text-black font-extrabold text-center flex items-center gap-3 pb-8"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center max-w-7xl gap-10"
        >
          {/* Left Column - Text */}
          <div className="md:w-1/2 text-black">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-xl text-justify mb-8 leading-relaxed"
            >
              Welcome to <strong>Provincial Justice</strong>, your comprehensive guide to understanding the diverse
              legal frameworks that govern our nation. We are committed to empowering individuals, professionals, and
              communities with accurate, accessible, and well-organized information about the laws that shape society.
              <br />
              <br />
              At <strong>Provincial Justice</strong>, we believe that justice begins with awareness. Our platform is
              designed to make legal information easy to navigate, understand, and apply, catering to everyone—from law
              students and legal practitioners to ordinary citizens seeking clarity about their rights and responsibilities.
            </motion.p>

            {/* Vision Section */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-4xl text-black font-semibold flex items-center gap-2 mb-4"
            >
              <BookOpen size={32} className="text-yellow-300 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              Our Vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-black text-base md:text-xl text-justify leading-relaxed"
            >
              We envision a society where legal knowledge is not a privilege but a fundamental right. By equipping
              people with the tools to understand and navigate the legal landscape, we aim to promote a culture of
              justice and accountability.
            </motion.p>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative w-full max-w-sm sm:max-w-md md:max-w-lg"
            >
              <Image
                src="/sideimage.png"
                alt="Legal awareness illustration"
                layout="responsive"
                width={500}
                height={400}
                className="object-cover rounded-xl shadow-xl"
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
