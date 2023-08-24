import React from 'react';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <DashboardSidebar/>
            {children}
        </div>
    );
};

export default DashboardLayout;