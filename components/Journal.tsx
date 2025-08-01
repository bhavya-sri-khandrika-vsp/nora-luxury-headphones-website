
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const articles = [
  {
    id: 1,
    title: 'Why Gold Matters in Audio',
    excerpt: 'Discover how our gold-plated components enhance signal clarity and reduce interference for the purest sound reproduction.',
    image: 'https://readdy.ai/api/search-image?query=macro%20photography%20of%20gold%20audio%20components%20and%20premium%20materials%20for%20luxury%20headphones%2C%20sophisticated%20technical%20details%20with%20elegant%20lighting%20and%20refined%20craftsmanship%20aesthetics&width=400&height=300&seq=journal-001&orientation=landscape',
    readTime: '5 min read',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Designing for the Senses',
    excerpt: 'An intimate look at our design philosophy - how every curve, texture, and weight distribution is crafted to create the perfect sensory experience.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20design%20process%20sketches%20and%20premium%20headphone%20prototypes%2C%20sophisticated%20industrial%20design%20workflow%20with%20artistic%20lighting%20and%20creative%20development%20aesthetics&width=400&height=300&seq=journal-002&orientation=landscape',
    readTime: '8 min read',
    category: 'Design'
  },
  {
    id: 3,
    title: 'The Future of Personal Audio',
    excerpt: 'Exploring emerging technologies in spatial audio, AI-driven sound optimization, and the next frontier of personalized listening experiences.',
    image: 'https://readdy.ai/api/search-image?query=futuristic%20audio%20technology%20concept%20with%20sophisticated%20visualization%20of%20sound%20waves%20and%20advanced%20headphone%20technology%2C%20modern%20tech%20aesthetics%20with%20elegant%20lighting&width=400&height=300&seq=journal-003&orientation=landscape',
    readTime: '6 min read',
    category: 'Innovation'
  }
];

export default function Journal() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="journal" className="py-32 bg-black">
      <div className="px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-['Georgia'] text-white mb-6">
            The Nora <span className="text-amber-400">Journal</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Stories, insights, and deep dives into sound and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="bg-zinc-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-colors"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-400/20 text-amber-400 text-sm rounded-full backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-sm">
                      {article.readTime}
                    </span>
                    <motion.div
                      className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium">Read More</span>
                      <i className="ri-arrow-right-line ml-2"></i>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg cursor-pointer whitespace-nowrap"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#f0f0f0',
              boxShadow: '0 15px 35px rgba(255,255,255,0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Read the Journal
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
