
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    src: 'https://readdy.ai/api/search-image?query=luxury%20headphones%20in%20elegant%20modern%20loft%20apartment%20with%20sophisticated%20interior%20design%2C%20warm%20ambient%20lighting%20and%20premium%20lifestyle%20setting%2C%20high-end%20product%20placement%20in%20refined%20living%20space&width=800&height=600&seq=gallery-001&orientation=landscape',
    alt: 'Modern Loft Setting'
  },
  {
    id: 2,
    src: 'https://readdy.ai/api/search-image?query=premium%20headphones%20inside%20luxury%20sports%20car%20with%20leather%20interior%2C%20sophisticated%20automotive%20photography%20with%20golden%20hour%20lighting%20and%20elegant%20product%20placement%20in%20high-end%20vehicle&width=600&height=800&seq=gallery-002&orientation=portrait',
    alt: 'Luxury Car Interior'
  },
  {
    id: 3,
    src: 'https://readdy.ai/api/search-image?query=professional%20music%20studio%20setup%20with%20luxury%20headphones%2C%20sophisticated%20recording%20equipment%20and%20warm%20ambient%20lighting%2C%20high-end%20audio%20production%20environment%20with%20elegant%20aesthetics&width=800&height=600&seq=gallery-003&orientation=landscape',
    alt: 'Studio Environment'
  },
  {
    id: 4,
    src: 'https://readdy.ai/api/search-image?query=elegant%20lifestyle%20photography%20of%20person%20wearing%20luxury%20headphones%20in%20sophisticated%20urban%20setting%2C%20cinematic%20lighting%20with%20modern%20architecture%20background%20and%20premium%20fashion%20aesthetics&width=600&height=800&seq=gallery-004&orientation=portrait',
    alt: 'Urban Lifestyle'
  },
  {
    id: 5,
    src: 'https://readdy.ai/api/search-image?query=luxury%20headphones%20on%20premium%20marble%20desk%20with%20elegant%20workspace%20setup%2C%20sophisticated%20office%20environment%20with%20warm%20lighting%20and%20high-end%20design%20elements&width=800&height=600&seq=gallery-005&orientation=landscape',
    alt: 'Premium Workspace'
  },
  {
    id: 6,
    src: 'https://readdy.ai/api/search-image?query=artistic%20macro%20photography%20of%20luxury%20headphone%20details%20showing%20premium%20materials%2C%20gold%20accents%20and%20craftsmanship%2C%20dramatic%20lighting%20with%20sophisticated%20product%20photography%20aesthetics&width=600&height=600&seq=gallery-006&orientation=squarish',
    alt: 'Detail Shot'
  }
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section ref={ref} id="gallery" className="py-32 bg-zinc-900">
      <div className="px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-['Georgia'] text-white mb-6">
            Luxury in <span className="text-amber-400">Focus</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            See Nora in the world's most refined spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 1 || index === 3 ? 'row-span-2' : 'aspect-[4/3]'
              }`}
              onClick={() => setSelectedImage(image.id)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <i className="ri-zoom-in-line text-2xl text-white"></i>
                </motion.div>
              </div>
              
              {/* Parallax effect on scroll */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), transparent)'
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages.find(img => img.id === selectedImage)?.src}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                className="w-full h-full object-contain rounded-2xl"
              />
              
              <motion.button
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.7)' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <i className="ri-close-line text-2xl text-white"></i>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
