import React from 'react';
import { Mail } from 'lucide-react';
import { SiLeetcode, SiGithub, SiLinkedin, SiInstagram, SiThreads } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-secondary py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6">Muhammed Swalih</h2>

                <div className="flex space-x-6 mb-8">
                    <a href="https://github.com/swalihtp" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                        <SiGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/muhammed-swalih-tp" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                        <SiLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/swalih.tp_?utm_source=qr" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                        <SiInstagram size={24} />
                    </a>
                    <a href="https://www.threads.com/@swalih.tp_" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                        <SiThreads size={24} />
                    </a>
                    <a href="https://leetcode.com/swalihtp" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                        <SiLeetcode size={24} />
                    </a>
                    <a href="mailto:swaliiihtp@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
                        <Mail size={24} />
                    </a>
                </div>

                <p className="text-text-secondary text-sm">
                    © {new Date().getFullYear()} Muhammed Swalih. Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
