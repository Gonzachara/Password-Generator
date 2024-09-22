    import React from 'react';

    export const Slider = ({ value, onValueChange, max, min, step }) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="relative w-full h-6">
        <input
            type="range"
            value={value}
            onChange={(e) => onValueChange(parseInt(e.target.value))}
            min={min}
            max={max}
            step={step}
            className="absolute w-full h-2 appearance-none bg-gray-300 rounded-full outline-none cursor-pointer"
            style={{
            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
            }}
        />

        </div>
    );
    };