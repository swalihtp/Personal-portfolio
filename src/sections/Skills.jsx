import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaGitAlt, FaAws, FaDocker } from 'react-icons/fa';
import { SiDjango, SiRedux, SiTailwindcss, SiPostgresql, SiSqlite, SiNginx, SiGunicorn } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React.js", icon: <FaReact className="text-blue-400" /> },
                { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Django", icon: <SiDjango className="text-green-600" /> },
                { name: "Django REST", icon: <SiDjango className="text-green-500" /> },
                { name: "Python", icon: <FaPython className="text-yellow-400" /> },
            ]
        },
        {
            title: "Database",
            skills: [
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
                { name: "SQLite", icon: <SiSqlite className="text-blue-200" /> },
            ]
        },
        {
            title: "DevOps & Tools",
            skills: [
                { name: "AWS EC2", icon: <FaAws className="text-orange-400" /> },
                { name: "Nginx", icon: <SiNginx className="text-green-500" /> },
                { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
                { name: "Render", icon: <FaDocker className="text-blue-600" /> }, // Using Docker icon as proxy or generic
            ]
        }
    ];

    return (
        <Section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    A robust stack focused on scalability, performance, and clean architecture.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-secondary/30 p-6 rounded-lg border border-slate-800"
                    >
                        <h3 className="text-xl font-bold mb-6 text-center text-accent">{category.title}</h3>
                        <div className="space-y-4">
                            {category.skills.map((skill, sIdx) => (
                                <div key={sIdx} className="flex items-center space-x-3 text-text-secondary group hover:text-text-primary transition-colors">
                                    <span className="text-2xl group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </span>
                                    <span className="font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
