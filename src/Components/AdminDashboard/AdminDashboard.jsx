import React from 'react';
import AdminSideBar from './AdminSideBar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className='grid grid-cols-12'>
            <AdminSideBar></AdminSideBar>
            <div className='col-span-10 pb-10'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default AdminDashboard;