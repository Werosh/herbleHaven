import React from "react";
import { motion } from "framer-motion";

// Dummy blog articles
const blogArticles = [
  {
    id: 1,
    title: "The Benefits of Herbal Tea",
    date: "October 1, 2024",
    content:
      "Herbal teas are not just refreshing, but they also offer numerous health benefits. Whether you’re looking for stress relief or a natural remedy for sleep, herbal teas can be a great option...",
  },
  {
    id: 2,
    title: "Growing Your Own Herb Garden",
    date: "October 10, 2024",
    content:
      "Starting your own herb garden at home can be a rewarding experience. Not only will you have fresh herbs for cooking, but it’s also an excellent way to get closer to nature and support sustainable living...",
  },
  {
    id: 3,
    title: "Essential Herbs for Every Kitchen",
    date: "October 15, 2024",
    content:
      "Certain herbs are a must-have in every kitchen. From basil and parsley to rosemary and thyme, these herbs can elevate the flavor of your dishes and provide a wide range of culinary possibilities...",
  },
];

const Blog = () => {
  return (
    <div id="blog" className="w-full py-20">
      <div className="px-6 mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-extrabold text-center sm:text-6xl text-softBeige">
          Blog Articles
        </h1>

        {/* Blog Articles */}
        <div className="space-y-12">
          {blogArticles.map((article) => (
            <motion.div
              key={article.id}
              className="overflow-hidden bg-white rounded-lg shadow-lg bg-opacity-55"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              {/* Blog Article */}
              <div className="p-6">
                <h2 className="mb-4 text-3xl font-semibold text-darkForestGreen">
                  {article.title}
                </h2>
                <p className="mb-4 text-lg text-gray-600">{article.date}</p>
                <p className="text-lg text-gray-800">{article.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
