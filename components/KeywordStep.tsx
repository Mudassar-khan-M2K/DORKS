'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function KeywordStep() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const nextStep = () => {
    if (!keyword) return;
    router.push(`/journey/categories?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <div className="page-container flex flex-col justify-center items-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Enter the word you want to search for
      </motion.h2>
      <motion.input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Type here..."
        className="px-6 py-3 rounded-xl border border-gray-300 mb-6 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.button
        onClick={nextStep}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next Step
      </motion.button>
    </div>
  );
}
