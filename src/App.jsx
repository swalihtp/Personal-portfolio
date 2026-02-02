import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text-primary font-sans selection:bg-accent selection:text-primary overflow-x-hidden">
      <Helmet>
        <title>Muhammed Swalih | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Muhammed Swalih, a Full Stack Developer specializing in Django & React. Building scalable web systems." />
        <meta property="og:title" content="Muhammed Swalih | Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Muhammed Swalih, a Full Stack Developer specializing in Django & React." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      <main className="space-y-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
