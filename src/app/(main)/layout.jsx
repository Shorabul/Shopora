import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='min-h-screen min-w-screen flex flex-col'>
            <Navbar />
            <div className='flex-1'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;