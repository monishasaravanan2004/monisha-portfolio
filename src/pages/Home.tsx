import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Journey from '../components/sections/Journey';
import Skills from '../components/sections/Skills';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import CaseStudy from '../components/sections/CaseStudy';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import Achievements from '../components/sections/Achievements';
import WhyHireMe from '../components/sections/WhyHireMe';
import Resume from '../components/sections/Resume';
import Terminal from '../components/sections/Terminal';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import Testimonials from '../components/sections/Testimonials';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <FeaturedProjects />
      <CaseStudy />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <WhyHireMe />
      <Resume />
      <Terminal />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
