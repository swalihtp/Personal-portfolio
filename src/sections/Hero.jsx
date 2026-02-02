import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <Section id="hero" className="flex flex-col justify-center min-h-screen pt-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <span className="text-accent font-medium tracking-wide text-lg mb-4 block">
                    Full-Stack Developer
                </span>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Building Scalable <br className="hidden md:block" />
                    <span className="text-text-secondary">Web Systems with Precision.</span>
                </h1>

                <p className="text-text-secondary text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                    I’m <strong className="text-text-primary">Muhammed Swalih</strong>, a developer who bridges the gap between complex backend logic and modern, responsive frontends. Specializing in <span className="text-accent">Django</span> & <span className="text-accent">React</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="projects" smooth={true} offset={-100} duration={800}>
                        <Button variant="primary" className="group">
                            View My Work
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>

                    <Link to="contact" smooth={true} offset={-100} duration={800}>
                        <Button variant="secondary">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </Section>
    );
};

export default Hero;
