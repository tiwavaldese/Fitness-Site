import React from 'react'

const Footer = () => {
  return (
    <div>
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

export default Footer
