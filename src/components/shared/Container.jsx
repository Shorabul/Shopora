import React from 'react';

const Container = ({ children, className = "" }) => {
    return (
        <div className={`container mx-auto xl:px-20 md:px-10 sm:px-4 px-2 ${className}`}>
            {children}
        </div>
    );
};
export default Container;