import React from 'react'

const page = () => {
  return (
    <div
    className='font pl-40 h-[80vh] p-8' 
      style={{
        background: "linear-gradient(to left, #898989, #656565, #242424)", 
      }}
    >
    
  <h1 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h1>
  
  <p className="text-lg text-justify pr-10 text-white mb-4">
    We value your feedback and are here to assist you with any inquiries you may have regarding the laws and regulations available on our website.
    Whether you have questions about specific legal information, need help navigating the site, or have suggestions for improvement, we are eager to hear from you!
  </p>

  <div className=" pt-8 pb-4 rounded-lg ">
    <h2 className="text-2xl font-semibold text-white mb-4">How to Reach Us</h2>

    <ul className="space-y-2 text-lg text-white">
      <li>
        <strong>Email:</strong> <a href="mailto:support@provincialjustice.com" className="text-blue-600 hover:underline">support@provincialjustice.com</a>
      </li>
      <li>
        <strong>Phone:</strong> +91-123-456-7890
      </li>
      <li>
        <strong>Address:</strong>  
        <address>
          Provincial Justice Pvt. Ltd.<br />
          123 Legal Avenue,<br />
          New Delhi, India
        </address>
      </li>
    </ul>


    
  </div>


      
    </div>
  )
}

export default page
