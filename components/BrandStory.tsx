
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BrandStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-32 bg-zinc-900">
      <div className="px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl lg:text-6xl font-['Georgia'] text-white mb-8 leading-tight">
              Crafted with
              <br />
              <span className="text-amber-400">Obsession</span>
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Born from the vision of acoustic perfectionism, Nora represents the pinnacle of audio craftsmanship. Every curve, every material, every sonic detail has been meticulously engineered to create not just headphones, but a gateway to pure auditory bliss.
              </p>
              <p>
                Our journey began in a small workshop where passion met precision. Using only the finest materials - hand-selected leather, aerospace-grade aluminum, and proprietary diamond-coated drivers - we've created instruments that don't just reproduce sound, they elevate it to art.
              </p>
              <p>
                Each pair of Nora headphones undergoes 47 individual quality checks and is acoustically tuned by master sound engineers. This isn't mass production; this is acoustic couture.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img 
                  src="https://readdy.ai/api/search-image?query=luxury%20headphone%20craftsmanship%20workshop%20with%20artisan%20hands%20working%20on%20premium%20materials%2C%20leather%20and%20metal%20details%2C%20warm%20studio%20lighting%20with%20tools%20and%20precision%20equipment%2C%20high-end%20manufacturing%20process&width=400&height=400&seq=craft-001&orientation=squarish"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="aspect-square rounded-lg overflow-hidden mt-8"
              >
                <img 
                  src="https://readdy.ai/api/search-image?query=premium%20materials%20for%20luxury%20headphones%20including%20gold%20accents%2C%20fine%20leather%20textures%2C%20and%20precision%20metal%20components%2C%20elegant%20macro%20photography%20with%20dramatic%20lighting%20and%20rich%20textures&width=400&height=400&seq=craft-002&orientation=squarish"
                  alt="Premium Materials"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="aspect-square rounded-lg overflow-hidden -mt-8"
              >
                <img 
                  src="https://readdy.ai/api/search-image?query=detailed%20close-up%20of%20luxury%20headphone%20driver%20components%20and%20acoustic%20engineering%2C%20precision%20audio%20technology%20with%20golden%20accents%2C%20sophisticated%20technical%20craftsmanship%20in%20elegant%20lighting&width=400&height=400&seq=craft-003&orientation=squarish"
                  alt="Engineering"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img 
                  src="https://readdy.ai/api/search-image?query=final%20luxury%20headphone%20product%20showcase%20with%20premium%20packaging%20and%20elegant%20presentation%2C%20sophisticated%20product%20photography%20with%20warm%20ambient%20lighting%20and%20luxury%20aesthetics&width=400&height=400&seq=craft-004&orientation=squarish"
                  alt="Final Product"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
