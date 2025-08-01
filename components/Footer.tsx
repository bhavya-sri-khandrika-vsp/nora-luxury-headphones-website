
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="px-8 lg:px-16 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <div className="font-['Pacifico'] text-3xl text-white cursor-pointer">
                NORA
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Nora is not just a headphone. It's your sanctuary of pure, uncompromising sound.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <nav className="space-y-3">
                {['About Nora', 'Our Story', 'Careers', 'Press'].map((item) => (
                  <motion.div key={item}>
                    <Link 
                      href="#" 
                      className="text-white/60 hover:text-white transition-colors block cursor-pointer"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Support</h4>
              <nav className="space-y-3">
                {['Shop', 'Support', 'Warranty', 'Returns'].map((item) => (
                  <motion.div key={item}>
                    <Link 
                      href="#" 
                      className="text-white/60 hover:text-white transition-colors block cursor-pointer"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay in Tune</h4>
            <p className="text-white/60 mb-6">
              Get the latest updates on new releases and exclusive events.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-amber-400 focus:outline-none transition-colors text-sm"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
                  }}
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-amber-400 text-black py-3 rounded-xl font-medium cursor-pointer whitespace-nowrap flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: '#fbbf24'
                }}
                whileTap={{ scale: 0.98 }}
                disabled={subscribed}
              >
                {subscribed ? (
                  <>
                    <motion.i 
                      className="ri-check-line text-xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line text-xl"></i>
                    Stay in Tune
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-white/10 space-y-6 lg:space-y-0">
          <div className="flex space-x-6">
            {[
              { icon: 'ri-instagram-line', name: 'Instagram' },
              { icon: 'ri-twitter-x-line', name: 'X' },
              { icon: 'ri-youtube-line', name: 'YouTube' },
              { icon: 'ri-spotify-line', name: 'Spotify' }
            ].map((social) => (
              <motion.a
                key={social.name}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(255, 215, 0, 0.2)',
                  boxShadow: '0 6px 15px rgba(255, 215, 0, 0.3)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${social.icon} text-white`}></i>
              </motion.a>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-6 text-white/40 text-sm">
            <span>© 2024 Nora Audio. All rights reserved.</span>
            <Link href="#" className="hover:text-white transition-colors cursor-pointer">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors cursor-pointer">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
