    import React from 'react';

    export const Progress = ({ value }) => {
    const getColorClass = (value) => {
        if (value <= 20) return 'bg-red-500';
        if (value <= 40) return 'bg-orange-500';
        if (value <= 60) return 'bg-yellow-500';
        if (value <= 80) return 'bg-blue-500';
        return 'bg-green-500';
    };

    return (
        <div className="w-full bg-gray-200 rounded h-2 overflow-hidden">
        <div
            className={`${getColorClass(value)} h-full transition-all duration-300`}
            style={{ width: `${value}%` }}
        ></div>
        </div>
    );
    };