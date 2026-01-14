import AuthNavbar from '@/components/shared/AuthNavbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='min-h-screen min-w-screen flex flex-col'>
            <AuthNavbar />
            <div className='flex-1'>
                {children}
            </div>
        </div>
    );
};

export default layout;