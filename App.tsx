import React, { useState, useEffect } from 'react';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import ContextSection from './src/components/ContextSection';
import OrgChart from './src/components/OrgChart';
import Pillars from './src/components/Pillars';
import ProcessFlow from './src/components/ProcessFlow';
import Footer from './src/components/Footer';
import ReflectionModal from './src/components/ReflectionModal';

export default function App() {
  const [isReflectionOpen, setIsReflectionOpen] = useState(false);

  useEffect(() => {
    if (isReflectionOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isReflectionOpen]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] selection:bg-[#d4af37] selection:text-white overflow-x-hidden">
      <Navbar onOpenReflection={() => setIsReflectionOpen(true)} />
      <Hero />
      <ContextSection />
      <OrgChart />
      <Pillars />
      <ProcessFlow />
      <Footer />

      <ReflectionModal
        isOpen={isReflectionOpen}
        onClose={() => setIsReflectionOpen(false)}
      />
    </div>
  );
}
