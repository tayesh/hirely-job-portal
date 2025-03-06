import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

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