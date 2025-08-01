
'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BrandStory from '../components/BrandStory';
import Collection from '../components/Collection';
import Technology from '../components/Technology';
import SoundExperience from '../components/SoundExperience';
import Gallery from '../components/Gallery';
import Journal from '../components/Journal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <BrandStory />
      <Collection />
      <Technology />
      <SoundExperience />
      <Gallery />
      <Journal />
      <Contact />
      <Footer />
    </main>
  );
}
