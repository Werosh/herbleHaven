import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div id="contact" className="py-20 ">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.h1
          className="mb-8 text-4xl font-extrabold text-center sm:text-5xl text-softBeige"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          Contact Us
        </motion.h1>

        {/* Contact Details */}
        <motion.div
          className="mb-12 text-center backdrop-blur-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <p className="mb-4 text-lg font-bold text-softBeige">We'd love to hear from you!</p>
          <p className="mb-4 text-lg text-softBeige">
            You can reach us at:
            <br />
            <a href="mailto:info@herbalhaven.com" className="text-3xl font-bold text-leafGreen hover:text-darkForestGreen">
              info@herbalhaven.com
            </a>
          </p>
          <p className="mb-4 text-lg text-softBeige">
            Phone: <a href="tel:+0123456789" className="font-extrabold text-leafGreen hover:text-softBeige">+01 234 567 89</a>
          </p>
          <p className="text-lg text-softBeige">
            Address: Coldhams Farm, Rickling, Saffron Walden, CB11 3YL
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="p-8 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <form className="flex flex-row gap-6">
            {/* Name */}
            <div className="w-1/4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-darkForestGreen"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="w-1/4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-darkForestGreen"
                placeholder="Enter your email address"
              />
            </div>

            {/* Message */}
            <div className="w-1/4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 mt-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-darkForestGreen"
                rows="6"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center w-1/4 mt-6">
              <button
                type="submit"
                className="px-8 py-2 font-semibold transition duration-300 rounded-lg bg-darkForestGreen text-softBeige hover:bg-rusticOrange"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center mt-12 space-x-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <a href="https://facebook.com" target='_blank' className="text-darkForestGreen hover:text-rusticOrange ">
            <i className="text-3xl fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target='_blank' className="text-darkForestGreen hover:text-rusticOrange">
            <i className="text-3xl fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target='_blank' className="text-darkForestGreen hover:text-rusticOrange">
            <i className="text-3xl fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target='_blank' className="text-darkForestGreen hover:text-rusticOrange">
            <i className="text-3xl fab fa-linkedin-in"></i>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
