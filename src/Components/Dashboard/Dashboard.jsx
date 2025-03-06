import React from 'react';
import SideBar from './SideBar';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-12'>
            <SideBar></SideBar>
            <div className='col-span-10'>

            </div>
            
        </div>
    );
};

export default Dashboard;