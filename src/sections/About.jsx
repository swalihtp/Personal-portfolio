import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const About = () => {
    const cards = [
        { icon: <Code size={32} />, title: "Frontend", desc: "Crafting responsive UIs with React & Tailwind" },
        { icon: <Database size={32} />, title: "Backend", desc: "Building robust APIs with Django & DRF" },
        { icon: <Globe size={32} />, title: "Deployment", desc: "Managing infrastructure on AWS & Render" },
        { icon: <Cpu size={32} />, title: "Problem Solver", desc: "Translating complex requirements into code" },
    ];

    return (
        <Section id="about" className="bg-secondary/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

                    <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                        <p>
                            I am a self-taught Full-Stack Developer driven by curiosity and a desire to build things that work seamlessly. I don't just write code; I prefer to solve problems efficiently.
                        </p>
                        <p>
                            My journey involves deep-diving into backend architectures with <span className="text-accent">Django</span> and crafting intuitive user interfaces with <span className="text-accent">React</span>. I thrive in environments where I can learn fast and contribute to real-world solutions.
                        </p>
                        <p className="border-l-4 border-accent pl-4 italic text-text-primary">
                            Currently open to Remote & On-site opportunities.
                        </p>
                    </div>
                </motion.div>

                {/* Visual/Grid */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    {cards.map((card, index) => (
                        <div key={index} className="bg-secondary/40 p-6 rounded-lg border border-slate-700 hover:border-accent/40 transition-colors">
                            <div className="text-accent mb-4">{card.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-sm text-text-secondary">{card.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
