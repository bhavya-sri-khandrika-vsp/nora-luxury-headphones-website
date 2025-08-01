
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'NORA ONE',
    subtitle: 'Timeless over-ear precision',
    price: '$2,999',
    image: 'https://readdy.ai/api/search-image?query=premium%20luxury%20over-ear%20headphones%20in%20elegant%20black%20and%20gold%20design%2C%20sophisticated%20studio%20lighting%20with%20dramatic%20shadows%2C%20high-end%20product%20photography%20with%20minimalist%20background%20and%20professional%20aesthetics&width=600&height=600&seq=nora-one-001&orientation=squarish'
  },
  {
    id: 2,
    name: 'NORA AIR',
    subtitle: 'Featherlight wireless elegance',
    price: '$1,999',
    image: 'https://readdy.ai/api/search-image?query=sleek%20wireless%20luxury%20headphones%20with%20modern%20minimalist%20design%2C%20premium%20white%20and%20gold%20accents%2C%20floating%20in%20elegant%20studio%20lighting%20with%20soft%20shadows%20and%20sophisticated%20product%20photography&width=600&height=600&seq=nora-air-002&orientation=squarish'
  },
  {
    id: 3,
    name: 'NORA STUDIO',
    subtitle: 'Studio-grade immersion',
    price: '$3,499',
    image: 'https://readdy.ai/api/search-image?query=professional%20studio%20headphones%20with%20premium%20build%20quality%2C%20sophisticated%20black%20design%20with%20gold%20details%2C%20dramatic%20lighting%20and%20high-end%20product%20photography%20with%20technical%20precision%20aesthetics&width=600&height=600&seq=nora-studio-003&orientation=squarish'
  }
];

export default function Collection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section ref={ref} id="collection" className="py-32 bg-black">
      <div className="px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-['Georgia'] text-white mb-6">
            The Collection
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our flagship models, crafted for the connoisseurs of sound.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative overflow-hidden rounded-2xl bg-zinc-900 p-8"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: hoveredProduct === product.id 
                    ? '0 25px 50px rgba(255, 215, 0, 0.3)' 
                    : '0 10px 25px rgba(0, 0, 0, 0.5)'
                }}
              >
                <div className="aspect-square mb-8 overflow-hidden rounded-xl">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white/60 mb-4">
                    {product.subtitle}
                  </p>
                  <p className="text-3xl font-['Georgia'] text-amber-400 mb-6">
                    {product.price}
                  </p>
                  
                  <motion.button
                    className="bg-white text-black px-8 py-3 rounded-full font-medium cursor-pointer whitespace-nowrap w-full"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: '#f0f0f0'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredProduct === product.id ? 0.1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.3), rgba(255, 255, 255, 0.1))'
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
