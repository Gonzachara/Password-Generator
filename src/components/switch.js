    import React from 'react';

    export const Switch = ({ checked, onCheckedChange }) => {
    return (
        <label className="flex items-center cursor-pointer">
        <div className="relative">
            <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={(e) => onCheckedChange(e.target.checked)}
            />
            <div className={`block w-10 h-6 rounded-full transition-colors duration-300 ${checked ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
            <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ${checked ? 'transform translate-x-4' : ''}`}></div>
        </div>
        </label>
    );
    };