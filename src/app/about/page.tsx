import React from 'react'
import '@/app/globals.css';

const page = () => {
  return (
    <div
      className='font pl-40 h-[80vh] p-8' 
      style={{
        background: "linear-gradient(to left, #808080, #36454F)", 
      }}
    >
      <h1 className='text-6xl pb-7 text-white'>About Us</h1>
      <div className='flex'>
        <div className='w-[50%]'>
          <h1 className='text-justify text-white pt-5 pb-7 mr-10 '>
            Welcome to Provincial Justice, your comprehensive guide to understanding the diverse legal frameworks that govern our nation. We are committed to empowering individuals, professionals, and communities with accurate, accessible, and well-organized information about the laws that shape society. 
            At Provincial Justice, we believe that justice begins with awareness. Our platform is designed to make legal information easy to navigate, understand, and apply, catering to everyone—from law students and legal practitioners to ordinary citizens seeking clarity about their rights and responsibilities.
          </h1>

          <h2 className='text-4xl pt-5 pb-7 text-white'>Our Vision</h2>
          <h3 className='text-justify pt-5 pb-7 mr-10 text-gray-300'>
            We envision a society where legal knowledge is not a privilege but a fundamental right. By equipping people with the tools to understand and navigate the legal landscape, we aim to promote a culture of justice and accountability.
          </h3>
        </div>
        
        <div className='w-[50%] pl-16'>
          <h1>
            <img
              src="sideimage.png"
              className='w-[70%] h-[60vh] object-contain'
              alt="Side image"
            />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default page
