    import React from 'react';

    export const Button = ({ children, onClick, className, variant = 'primary', size = 'medium' }) => {
    const baseStyle = 'font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
        outline: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500',
        icon: 'bg-transparent text-current hover:scale-110 focus:ring-current',
    };

    const sizes = {
        small: 'p-1',
        medium: 'p-2',
        large: 'p-3',
    };

    return (
        <button
        onClick={onClick}
        className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
        >
        {children}
        </button>
    );
    };