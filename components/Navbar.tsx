
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div 
              className="font-['Pacifico'] text-2xl text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              NORA
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Story', 'Collection', 'Technology', 'Sound', 'Gallery', 'Journal', 'Contact'].map((item) => (
              <motion.div
                key={item}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <Link href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors font-light cursor-pointer whitespace-nowrap">
                  {item}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-white/60"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
          
          <motion.button
            className="bg-white text-black px-6 py-3 rounded-full font-medium cursor-pointer whitespace-nowrap"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#f0f0f0',
              boxShadow: '0 10px 30px rgba(255,255,255,0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Experience Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
