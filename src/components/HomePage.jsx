import React from 'react'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
      {/* Header */}
  

      {/* Hero Section */}
      <section className="hero bg-cover bg-center text-white p-10 md:p-20" style={{ backgroundImage: 'url(/path/to/your-hero-image.jpg)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get Fit, Stay Strong</h1>
          <p className="text-lg md:text-xl mb-6">Join our community and start your fitness journey today!</p>
          <button className="bg-red-600 px-6 py-3 text-lg font-semibold rounded-md hover:bg-red-700">Start Your Free Trial</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">We offer personalized workout plans, expert coaching, and nutrition advice to help you achieve your fitness goals.</p>
      </section>

      {/* Featured Programs */}
      <section id="programs" className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Weight Loss</h3>
            <p className="mb-4">Transform your body with our effective fat-burning workouts.</p>
            <button className="bg-red-600 px-6 py-3 text-lg font-semibold rounded-md hover:bg-red-700">Learn More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Muscle Gain</h3>
            <p className="mb-4">Build strength with our tailored muscle-building programs.</p>
            <button className="bg-red-600 px-6 py-3 text-lg font-semibold rounded-md hover:bg-red-700">Learn More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Yoga & Flexibility</h3>
            <p className="mb-4">Improve your flexibility and reduce stress with our yoga sessions.</p>
            <button className="bg-red-600 px-6 py-3 text-lg font-semibold rounded-md hover:bg-red-700">Learn More</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-8">Success Stories</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-x-6 sm:space-y-0">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <img src="/path/to/client-photo1.jpg" alt="Client 1" className="rounded-full w-24 h-24 mx-auto mb-4"/>
            <p className="text-lg italic mb-4">"This program helped me lose 20lbs in 3 months. I'm in the best shape of my life!"</p>
            <p className="font-semibold">John Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <img src="/path/to/client-photo2.jpg" alt="Client 2" className="rounded-full w-24 h-24 mx-auto mb-4"/>
            <p className="text-lg italic mb-4">"I gained muscle and strength beyond what I ever thought possible. Highly recommend!"</p>
            <p className="font-semibold">Jane Smith</p>
          </div>
        </div>
      </section>

      {/* Footer */}

     <Footer/>
     <footer className="py-8 bg-gray-800 text-white text-center">
        <p>&copy; 2024 FitnessSite. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
          <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
          <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
