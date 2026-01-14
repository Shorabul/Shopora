import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <p>Dashboard Nav</p>
            {children}
        </div>
    );
};

export default DashboardLayout;