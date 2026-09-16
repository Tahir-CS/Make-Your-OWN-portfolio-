import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Navigation />
      <main className="editorial-home">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <AboutMe />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
