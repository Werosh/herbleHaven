import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="flex items-center justify-center h-screen">
      {/* Container with blurred background */}
      <motion.div
        className="relative flex flex-col items-center justify-center text-6xl font-extrabold sm:text-9xl text-creamyWhite"
        initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and offscreen
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        transition={{ duration: 1, type: "spring", stiffness: 100 }} // Spring animation
      >
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-lg rounded-xl"></div>

        {/* Logo Text with Stroke Effect */}
        <span className="relative z-10 text-6xl sm:text-9xl text-creamyWhite text-stroke-2 text-stroke-gray-800">
          HerBal HaVen
        </span>

        {/* Slogan Section */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move up
          animate={{ opacity: 1, y: 0 }} // Fade in and slide up
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }} // Animation for slogan
        >
          <p className="text-xl italic font-semibold sm:text-3xl text-creamyWhite">
            "Nurturing Nature, One Herb at a Time"
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
