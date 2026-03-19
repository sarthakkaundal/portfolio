import React from 'react';
import Navbar from '../components/organisms/Navbar';
import HeroSection from '../components/organisms/HeroSection';
import InfiniteMarquee from '../components/molecules/InfiniteMarquee';
import AboutMe from '../components/organisms/AboutMe';
import SkillsSection from '../components/organisms/SkillsSection';
import ProjectsSection from '../components/organisms/ProjectsSection';
import CertificatesSection from '../components/organisms/CertificatesSection';
import OpenSourceSection from '../components/organisms/OpenSourceSection';
import ContactSection from '../components/organisms/ContactSection';
import Footer from '../components/organisms/Footer';
import SEO from '../components/atoms/SEO';

const Home = () => {
  return (
    <div className="relative w-full">
      <SEO />
      <Navbar />
      <main className="flex flex-col gap-10">
        <HeroSection />
        <InfiniteMarquee text="INNOVATION • SCALABILITY • PERFORMANCE • DESIGN" />
        <AboutMe />
        <SkillsSection />
        <OpenSourceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
