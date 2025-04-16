'use client'

import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import '@/app/globals.css'
import { Gavel, BookOpen } from 'lucide-react'

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

      <div
        className="font min-h-screen p-8 flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(to left, #808080, #36454F)',
        }}
      >
        <h1 className="text-5xl md:text-6xl text-white font-extrabold text-center flex items-center gap-3 pb-8">
          <Gavel size={40} className="text-yellow-300" />
          About Us
        </h1>

        <div className="flex flex-col md:flex-row items-center max-w-7xl gap-10">
          <div className="md:w-1/2">
            <p className="text-white text-lg md:text-xl text-justify mb-8 leading-relaxed">
              Welcome to <strong>Provincial Justice</strong>, your comprehensive guide to
              understanding the diverse legal frameworks that govern our nation.
              We are committed to empowering individuals, professionals, and communities
              with accurate, accessible, and well-organized information about the laws that
              shape society.
              <br />
              <br />
              At <strong>Provincial Justice</strong>, we believe that justice begins with
              awareness. Our platform is designed to make legal information easy to navigate,
              understand, and apply, catering to everyone—from law students and legal
              practitioners to ordinary citizens seeking clarity about their rights and
              responsibilities.
            </p>

            <h2 className="text-4xl text-white font-semibold flex items-center gap-2 mb-4">
              <BookOpen size={32} className="text-yellow-300" />
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg text-justify leading-relaxed">
              We envision a society where legal knowledge is not a privilege but a fundamental
              right. By equipping people with the tools to understand and navigate the legal
              landscape, we aim to promote a culture of justice and accountability.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/sideimage.png"
              width={500}
              height={400}
              className="object-contain rounded-2xl shadow-lg"
              alt="Legal awareness illustration"
              priority
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
