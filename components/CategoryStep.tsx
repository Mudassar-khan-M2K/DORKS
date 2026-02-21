'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import categories from '../lib/queryBuilder';

export default function CategoryStep() {
  const params = useSearchParams();
  const keyword = params.get('keyword') || '';
  const router = useRouter();

  const selectCategory = (category: string) => {
    router.push(`/journey/subcategories?keyword=${encodeURIComponent(keyword)}&category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="page-container flex flex-col items-center p-4 space-y-6">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1 }}
      >
        Select a Category
      </motion.h2>
      {categories.map((cat, i) => (
        <motion.div
          key={cat.name}
          className="cursor-pointer p-4 bg-white rounded-2xl shadow-md w-80 text-center hover:scale-105 transition-transform"
          onClick={() => selectCategory(cat.name)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <h3 className="font-semibold text-lg">{cat.name}</h3>
          <p className="text-sm mt-1 text-gray-500">{cat.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
