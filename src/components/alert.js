    import React from 'react';
    import { X } from 'lucide-react';

    export const Alert = ({ children, className, variant = 'info', onClose }) => {
    const variants = {
        info: 'bg-blue-50 border-blue-500 text-blue-700',
        success: 'bg-green-50 border-green-500 text-green-700',
        warning: 'bg-yellow-50 border-yellow-500 text-yellow-700',
        error: 'bg-red-50 border-red-500 text-red-700',
    };

    return (
        <div className={`relative rounded-lg border-l-4 p-4 ${variants[variant]} ${className}`} role="alert">
        <div className="flex items-center">
            <div className="flex-grow">{children}</div>
            {onClose && (
            <button
                onClick={onClose}
                className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-current p-1.5 hover:bg-current/10 rounded-lg focus:ring-2 focus:ring-current"
            >
                <span className="sr-only">Cerrar</span>
                <X className="h-5 w-5" />
            </button>
            )}
        </div>
        </div>
    );
    };

    export const AlertTitle = ({ children }) => {
    return <h3 className="text-lg font-medium mb-2">{children}</h3>;
    };

    export const AlertDescription = ({ children }) => {
    return <div className="text-sm">{children}</div>;
    };