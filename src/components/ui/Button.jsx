import React from 'react';

const Button = ({ children, variant = 'primary', className = '', href, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 transform active:scale-95";

    const variants = {
        primary: "bg-accent text-primary hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]",
        secondary: "bg-secondary text-text-primary border border-slate-700 hover:border-accent/50 hover:bg-slate-800",
        outline: "border border-accent text-accent hover:bg-accent/10",
    };

    if (href) {
        return (
            <a
                href={href}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
