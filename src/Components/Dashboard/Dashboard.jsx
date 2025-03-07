import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-12'>
            <SideBar></SideBar>
            <div className='col-span-10 pb-10'>
                <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Dashboard;