
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Nora headphones don't just play music, they transport you into the recording studio itself.",
    author: "Marcus Chen",
    role: "Grammy-winning Producer"
  },
  {
    quote: "The spatial accuracy is phenomenal. I can pinpoint every instrument in the soundstage with surgical precision.",
    author: "Sarah Williams",
    role: "Professional Audio Engineer"
  },
  {
    quote: "After 30 years of mixing, these are the first headphones that reveal details I never knew existed.",
    author: "David Rodriguez",
    role: "Mastering Engineer"
  }
];

export default function SoundExperience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section ref={ref} id="sound" className="py-32 bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-['Georgia'] text-white mb-6">
            Hear the <span className="text-amber-400">Impossible</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A soundstage that transcends expectation. Hear textures, feel space.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">
                3D Audio Demo
              </h3>
              
              {/* Audio Visualizer */}
              <div className="relative h-64 mb-6 bg-black/30 rounded-xl flex items-center justify-center overflow-hidden">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    background: [
                      'radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(0,0,0,0) 70%)',
                      'radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(0,0,0,0) 70%)',
                      'radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(0,0,0,0) 70%)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-32 h-32 border-2 border-amber-400/40 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center">
                      <i className="ri-headphone-line text-2xl text-amber-400"></i>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <motion.button
                className="w-full bg-amber-400 text-black py-4 rounded-xl font-semibold text-lg cursor-pointer whitespace-nowrap flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02, backgroundColor: '#fbbf24' }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="ri-play-circle-line text-2xl"></i>
                Experience Binaural Audio
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img 
              src="https://readdy.ai/api/search-image?query=abstract%20sound%20wave%20visualization%20with%20golden%20particles%20and%20elegant%20flowing%20lines%2C%203D%20audio%20concept%20art%20with%20sophisticated%20lighting%20effects%2C%20dynamic%20sound%20frequency%20representation%20in%20luxury%20aesthetics&width=800&height=600&seq=sound-viz-001&orientation=landscape"
              alt="Sound Visualization"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="bg-zinc-900/50 rounded-2xl p-12 backdrop-blur-sm border border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-['Georgia'] text-white mb-4">
              What the Pros Say
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-2xl text-white/90 mb-8 font-light leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="text-amber-400 font-semibold text-lg">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-white/60">
                {testimonials[currentTestimonial].role}
              </div>
            </motion.div>

            <div className="flex justify-center mt-12 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentTestimonial ? 'bg-amber-400' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
