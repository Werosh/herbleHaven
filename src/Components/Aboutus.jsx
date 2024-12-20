import React from 'react';
import { motion } from 'framer-motion';

const Aboutus = () => {
  return (
    <div id="about" className="w-full py-20 text-softBeige backdrop-blur-lg">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Animated Title */}
        <motion.h1
          className="mb-6 text-4xl font-extrabold text-center sm:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          About Herbal Haven
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="mb-8 text-lg leading-relaxed text-center sm:text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          Herbal Haven is a family-run herb nursery established over 20 years ago, specializing in culinary, medicinal, and aromatic herbs. 
          They offer a diverse selection of herbs, including popular varieties like oregano, rosemary, thyme, parsley, and sage, 
          as well as seasonal highlights such as mint, savory, and saffron. Their herbs are grown naturally, harmonizing with the seasons 
          and the local environment to produce strong, healthy plants suitable for home or garden cultivation.
        </motion.p>

        {/* Animated Location and Contact */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-lg sm:text-xl">
            The company operates from Coldhams Farm, Rickling, Saffron Walden, CB11 3YL.
          </p>
          <p className="mb-4 text-lg sm:text-xl">
            For inquiries, contact us at: <a href="#" className="text-darkForestGreen hover:text-rusticOrange">0123456789</a> or via email at: 
            <a href="#" className="text-darkForestGreen hover:text-rusticOrange"> herbs@example.com</a>
          </p>
        </motion.div>

        {/* Animated Additional Information */}
        <motion.p
          className="mb-8 text-lg leading-relaxed text-center sm:text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          In addition to our online shop, we provide expert advice to help customers maintain and get the best out of their plants. 
          We also offer gift vouchers, making it easy to share the joy of herb gardening with others.
        </motion.p>

        {/* Animated Website Link */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <p className="text-xl">
            For more information, visit our official website: 
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-darkForestGreen hover:text-rusticOrange"> www.herbalhaven.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;
