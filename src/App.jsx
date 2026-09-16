import React from 'react';
import Navigation from './components/Navigation';
import { Hero, Projects, AboutMe, Experience, Skills, Certifications, Contact, Footer } from './sections';
import './App.css';

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Projects />
      <AboutMe />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
