import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Mail, FileText } from 'lucide-react';
import { SiLeetcode, SiGithub, SiLinkedin, SiInstagram, SiThreads } from "react-icons/si";
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <Section id="contact" className="text-center py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto bg-gradient-to-br from-secondary/50 to-slate-900/50 p-10 rounded-2xl border border-slate-800 backdrop-blur-sm"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing.</h2>
                <p className="text-text-secondary text-lg mb-8">
                    I'm actively seeking full-stack developer roles. If you're looking for someone who ships high-quality code and solves real problems, let's talk.
                </p>

                <a href="mailto:swaliiihtp@gmail.com">
                    <Button variant="primary" className="text-lg px-8 py-4 mb-10 w-full sm:w-auto">
                        Say Hello <Mail size={20} className="ml-2" />
                    </Button>
                </a>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 border-t border-slate-800">
                    <a href="https://linkedin.com/in/muhammed-swalih-tp" target="_blank" rel="noreferrer" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                        <SiLinkedin size={20} className="mr-2" /> LinkedIn
                    </a>
                    <a href="https://github.com/swalihtp" target="_blank" rel="noreferrer" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                        <SiGithub size={20} className="mr-2" /> GitHub
                    </a>
                    <a href="https://www.instagram.com/swalih.tp_?utm_source=qr" target="_blank" rel="noreferrer" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                        <SiInstagram size={20} className="mr-2" /> Instagram
                    </a>
                    <a href="https://www.threads.com/@swalih.tp_" target="_blank" rel="noreferrer" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                        <SiThreads size={20} className="mr-2" /> Threads
                    </a>
                    <a href="https://leetcode.com/swalihtp" target="_blank" rel="noreferrer" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                        <SiLeetcode size={20} className="mr-2" /> LeetCode
                    </a>
                    <a href="#" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                        <FileText size={20} className="mr-2" /> Resume
                    </a>
                </div>
            </motion.div>
        </Section>
    );
};

export default Contact;
