
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: '💎',
    title: 'Diamond-coated drivers',
    description: 'Precision-engineered with diamond coating for unparalleled clarity and frequency response.'
  },
  {
    icon: '🎧',
    title: 'Adaptive noise cancellation',
    description: 'AI-powered noise cancellation that adapts to your environment in real-time.'
  },
  {
    icon: '✋',
    title: 'Smart touch controls',
    description: 'Intuitive gesture controls with haptic feedback for seamless interaction.'
  },
  {
    icon: '🔋',
    title: '48-hour battery life',
    description: 'Extended listening sessions with rapid charging and power-efficient design.'
  },
  {
    icon: '📡',
    title: 'Wireless high-fidelity chip',
    description: 'Lossless audio transmission with ultra-low latency and crystal-clear connection.'
  }
];

export default function Technology() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="technology" className="py-32 bg-zinc-900">
      <div className="px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-['Georgia'] text-white mb-6">
            Acoustic <span className="text-amber-400">Alchemy</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            More than sound. It's an engineered emotion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <img 
              src="https://readdy.ai/api/search-image?query=exploded%20view%20technical%20diagram%20of%20luxury%20headphone%20components%20showing%20drivers%2C%20acoustic%20chambers%2C%20premium%20materials%2C%20and%20engineering%20details%2C%20sophisticated%20technical%20illustration%20with%20elegant%20lighting%20and%20precision%20aesthetics&width=800&height=600&seq=tech-exploded-001&orientation=landscape"
              alt="Technology Breakdown"
              className="w-full rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-colors"
              >
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interactive waveform visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="bg-black/50 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-['Georgia'] text-white mb-6">
            Experience the Frequency Response
          </h3>
          <div className="flex justify-center items-end space-x-1 h-32 mb-8">
            {Array.from({ length: 64 }, (_, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-t from-amber-400 to-amber-200 rounded-t-sm"
                style={{ width: '4px' }}
                animate={{
                  height: [
                    Math.random() * 80 + 20,
                    Math.random() * 120 + 20,
                    Math.random() * 80 + 20
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.05
                }}
              />
            ))}
          </div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our proprietary frequency tuning delivers an unprecedented soundstage with perfect balance across all ranges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
