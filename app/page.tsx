'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  const startJourney = () => {
    router.push('/journey/keyword');
  };

  return (
    <div className="page-container flex flex-col justify-center items-center">
      <motion.h1
        className="drip mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        WELCOME
      </motion.h1>

      <motion.button
        onClick={startJourney}
        className="px-8 py-4 bg-red-600 text-white rounded-xl shadow-lg hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Start the Journey
      </motion.button>
    </div>
  );
}
