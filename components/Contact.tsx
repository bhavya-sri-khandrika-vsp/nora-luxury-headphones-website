
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} id="contact" className="py-32 bg-zinc-900">
      <div className="px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-['Georgia'] text-white mb-6">
            Connect with <span className="text-amber-400">Nora</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We're here to guide you through a new era of sound.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} id="nora-contact" className="space-y-6">
              <div>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-amber-400 focus:outline-none transition-colors text-sm"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
                  }}
                  required
                />
              </div>
              
              <div>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-amber-400 focus:outline-none transition-colors text-sm"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
                  }}
                  required
                />
              </div>
              
              <div>
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-amber-400 focus:outline-none transition-colors resize-none text-sm"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
                  }}
                  required
                />
                <div className="text-right text-white/40 text-sm mt-2">
                  {formData.message.length}/500 characters
                </div>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-amber-400 text-black py-4 rounded-xl font-semibold text-lg cursor-pointer whitespace-nowrap flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: '#fbbf24',
                  boxShadow: '0 15px 35px rgba(255, 215, 0, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <motion.i 
                      className="ri-check-line text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    />
                    Message Sent
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line text-xl"></i>
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-black/30 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-map-pin-line text-amber-400 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-white/70">
                      NORA Headquarters<br />
                      1847 Berkeley Street<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-phone-line text-amber-400 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-white/70">+1 (415) 555-NORA</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-mail-line text-amber-400 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-white/70">hello@nora.audio</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-black/30 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0157649962415!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635959542011!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Social Links */}
            <div className="bg-black/30 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Follow Nora
              </h3>
              
              <div className="flex space-x-4">
                {[
                  { icon: 'ri-instagram-line', name: 'Instagram' },
                  { icon: 'ri-twitter-x-line', name: 'X (Twitter)' },
                  { icon: 'ri-youtube-line', name: 'YouTube' },
                  { icon: 'ri-spotify-line', name: 'Spotify' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(255, 215, 0, 0.2)',
                      boxShadow: '0 8px 20px rgba(255, 215, 0, 0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`${social.icon} text-white text-xl`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
