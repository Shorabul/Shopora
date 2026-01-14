import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <p>Main Nav</p>
            {children}
            <p>Mian Footer</p>
        </div>
    );
};

export default DashboardLayout;