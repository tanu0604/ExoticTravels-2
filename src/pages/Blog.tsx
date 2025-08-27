import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/destinations";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Blog: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.section
        className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-16 pt-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4 font-serif tracking-tight">
              Travel Blog
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200 font-light">
              Discover travel tips, destination guides, and insider secrets from
              our travel experts
            </p>
          </motion.div>
        </div>
      </motion.section>
      {/* Blog Posts */}
      <motion.section
        className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border-b border-blue-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-yellow-600 hover:text-yellow-800 font-medium text-sm flex items-center space-x-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* Newsletter Signup */}
      <motion.section
        className="py-16 bg-gradient-to-br from-[#fffbe6] via-[#fef9c3] to-[#fef3c7]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Stay Updated with Travel Tips
          </motion.h2>
          <motion.p
            className="text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Subscribe to our newsletter for the latest travel guides, tips, and
            exclusive offers
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-colors border-2 border-yellow-300">
              Subscribe
            </button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Blog;
