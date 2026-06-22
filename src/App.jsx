import React from 'react';
import Navigation from './components/Navigation';
import { Hero, AboutMe, Experience, Certifications, Skills, Projects, Contact, Footer } from './sections';
import './App.css';

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
