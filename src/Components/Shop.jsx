import React, { useState } from "react";
import { motion } from "framer-motion";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Oregano",
    price: "$5.99",
    image: "/assets/products/oregano.jpg",
  },
  {
    id: 2,
    name: "Rosemary",
    price: "$6.99",
    image: "/assets/products/rosemary.jpg",
  },
  {
    id: 3,
    name: "Thyme",
    price: "$4.99",
    image: "/assets/products/thyme.jpg",
  },
  {
    id: 4,
    name: "Mint",
    price: "$3.99",
    image: "/assets/products/mint.jpg",
  },
  {
    id: 5,
    name: "Sage",
    price: "$7.99",
    image: "/assets/products/sage.jpg",
  },
  {
    id: 6,
    name: "Cinnamon",
    price: "$5.99",
    image: "/assets/products/cinnamon.jpg",
  },
  {
    id: 7,
    name: "Ashwagandha",
    price: "$12.99",
    image: "/assets/products/ashwagandha.jpg",
  },
  {
    id: 8,
    name: "Turmeric",
    price: "$12.99",
    image: "/assets/products/turmeric.jpg",
  },

  
];

const Shop = () => {
  // State to handle clicked item
  const [clicked, setClicked] = useState(null);

  const handleClick = (id) => {
    // Toggle the clicked item state
    setClicked(clicked === id ? null : id);
  };

  return (
    <div id="shop" className="w-full py-20 ">
      <div className="px-6 mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-extrabold text-center sm:text-6xl text-softBeige">
          Herb Products
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="overflow-hidden bg-white rounded-lg shadow-lg bg-opacity-55"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.95 }} // Slightly scale down when clicked
              onClick={() => handleClick(product.id)} // Handle click effect
              animate={{ scale: clicked === product.id ? 1.05 : 1 }} // Slightly enlarge when clicked
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-56"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-darkForestGreen">
                  {product.name}
                </h2>
                <p className="text-xl font-semibold text-earthyBrown">{product.price}</p>
                <button className="w-full py-2 mt-4 transition duration-300 rounded-sm bg-darkForestGreen text-softBeige hover:bg-rusticOrange">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
