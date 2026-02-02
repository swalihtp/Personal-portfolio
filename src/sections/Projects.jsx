import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle } from 'lucide-react';
import projectOmniShop from '../assets/project-omnishop.png';
import projectKickoff from '../assets/project-kickoff.png';
import Button from '../components/ui/Button';

// ... imports

const projects = [
    {
        title: "Kick-off E-commerce",
        description: "A comprehensive full-stack e-commerce platform built with modern technologies, featuring a user-friendly interface and robust backend architecture.",
        techStack: ["React", "Django", "AWS EC2", "Vercel", "Tailwind CSS"],
        features: [
            "User-friendly Frontend Interface",
            "Robust Django Backend Architecture",
            "Deployed on Vercel & AWS EC2",
            "Full E-commerce Functionality"
        ],
        links: {
            github_frontend: "https://github.com/swalihtp/Kick-off-E-commerce-application",
            github_backend: "https://github.com/swalihtp/Kick-Off-E-commerce-backend",
            live_frontend: "https://kick-off-e-commerce-application.vercel.app/",
            live_backend: "http://kickoffecommerse.duckdns.org/"
        },
        image: projectKickoff,
        reverse: false
    },
    {
        title: "OmniShop E-commerce",
        description: "A comprehensive full-stack e-commerce platform featuring a custom-built API, secure authentication, and real-time payment processing.",
        techStack: ["React", "Redux", "Tailwind", "Django", "PostgreSQL", "AWS"],
        features: [
            "Built with Django REST Framework & React/Redux",
            "Secure JWT Authentication & Google OAuth",
            "Stripe Payment Integration with Webhooks",
            "Global Cart State Management"
        ],
        links: {
            github: "#", // Placeholder
            live: "#"
        },
        image: projectOmniShop,
        reverse: true
    }
];

const Projects = () => {
    return (
        <Section id="projects" className="bg-secondary/20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
                <p className="text-text-secondary">Highlighting my main full-stack applications.</p>
            </motion.div>

            <div className="flex flex-col gap-24">
                {projects.map((project, index) => (
                    <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${project.reverse ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Project Image */}
                        <motion.div
                            initial={{ opacity: 0, x: project.reverse ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative group overflow-hidden rounded-xl border border-slate-700 shadow-2xl">
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Project Details */}
                        <motion.div
                            initial={{ opacity: 0, x: project.reverse ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h3 className="text-3xl font-bold mb-2">
                                {project.title.split(' ').slice(0, -1).join(' ')} <span className="text-accent">{project.title.split(' ').slice(-1)}</span>
                            </h3>
                            <p className="text-text-secondary text-lg mb-6">
                                {project.description}
                            </p>

                            <div className="mb-6 space-y-2">
                                {project.features.map((item, i) => (
                                    <div key={i} className="flex items-center text-sm md:text-base text-slate-300">
                                        <CheckCircle size={16} className="text-accent mr-2" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.techStack.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-slate-800 text-accent text-xs rounded-full border border-slate-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 flex-wrap">
                                {project.links.github_frontend ? (
                                    <>
                                        <Button href={project.links.github_frontend} variant="outline" className="text-sm">
                                            <Github size={18} className="mr-2" /> Frontend
                                        </Button>
                                        <Button href={project.links.github_backend} variant="outline" className="text-sm">
                                            <Github size={18} className="mr-2" /> Backend
                                        </Button>
                                    </>
                                ) : (
                                    <Button href={project.links.github || "#"} variant="outline" className="text-sm">
                                        <Github size={18} className="mr-2" /> View Code
                                    </Button>
                                )}

                                {project.links.live_frontend ? (
                                    <>
                                        <Button href={project.links.live_frontend} variant="primary" className="text-sm">
                                            <ExternalLink size={18} className="mr-2" /> Live Demo
                                        </Button>
                                        {project.links.live_backend && (
                                            <Button href={project.links.live_backend} variant="outline" className="text-sm">
                                                <ExternalLink size={18} className="mr-2" /> Live API
                                            </Button>
                                        )}
                                    </>
                                ) : (
                                    <Button href={project.links.live || "#"} variant="primary" className="text-sm">
                                        <ExternalLink size={18} className="mr-2" /> Live Demo
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
