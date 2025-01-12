import React from 'react'

const page = () => {
  return (
    <div className='font h-[80vh]'>
      <section className="max-w-4xl mx-auto p-6">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Support</h1>
  
  <p className="text-lg text-gray-700 mb-6">
    At *Provincial Justice*, we are dedicated to providing you with the best legal resources and user experience. If you need help or have any questions, we're here to support you!
  </p>

  <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions (FAQ)</h2>

    <div className="space-y-6 text-lg text-gray-700">
      <div>
        <h3 className="font-semibold">1. How do I use the search feature?</h3>
        <p>Simply type the law or keyword you are looking for in the search bar at the top of the website. You can also filter the results by jurisdiction or law type.</p>
      </div>
      <div>
        <h3 className="font-semibold">2. How can I get legal assistance?</h3>
        <p>If you need specific legal advice, we recommend consulting with a licensed attorney. You can find legal professionals in your area through our network of partners.</p>
      </div>
      <div>
        <h3 className="font-semibold">3. How do I report an error in the law database?</h3>
        <p>If you find an error or outdated information, please contact us immediately. We review and update the laws regularly to ensure accuracy.</p>
      </div>
    </div>
  </div>

</section>

    </div>
  )
}

export default page
