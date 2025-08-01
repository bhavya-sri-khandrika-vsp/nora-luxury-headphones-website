
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=premium%20luxury%20headphones%20floating%20in%20dramatic%20cinematic%20lighting%20with%20golden%20reflections%20and%20elegant%20shadows%2C%20minimalist%20studio%20setup%20with%20soft%20gradient%20background%2C%20high-end%20product%20photography%20style%20with%20depth%20of%20field%20and%20warm%20ambient%20lighting&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
          alt="Nora Headphones"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl lg:text-8xl font-['Georgia'] text-white leading-tight mb-6"
            >
              A Sound
              <br />
              <span className="text-amber-400">Above All</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl"
            >
              Where design meets acoustic perfection. Discover the art of listening.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap gap-6"
            >
              <motion.button
                className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg cursor-pointer whitespace-nowrap"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#f0f0f0',
                  boxShadow: '0 15px 35px rgba(255,255,255,0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
              </motion.button>
              
              <motion.button
                className="border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg backdrop-blur-sm cursor-pointer whitespace-nowrap"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(255,255,255,0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Our Story
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
