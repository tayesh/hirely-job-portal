import React, { useContext } from 'react';
import { IoCameraOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../AuthContext/UserContext';
import AdminSideBardLinks from './AdminSideBardLinks';

const AdminSideBar = () => {

    const SideBarLinks = [
        {
            title: "Dashboard",
            icon: "https://i.ibb.co.com/xqnMHPNc/dashboard-1.png",
            path: "/admindashboard",
            w: "50px"
        },
        {
            title: "Post a Job",
            icon: "https://i.ibb.co.com/nNKd1r0F/add-symbol.png",
            path: "/admindashboard/newjob"
        },
        {
            title: "Applied Jobs",
            icon: "https://i.ibb.co.com/99mMhNxv/a3c415ecce352a368e708cb12d4f62d4.png",
            path: "/admindashboard/allappliedjobs"
        },
        
        {
            title: "Companies",
            icon: "https://i.ibb.co.com/3mRS5cNS/00ebb177f6cf4c54344d592ec43d4df7.png",
            path: "/admindashboard/allcompany"
        },
        {
            title: "Agencies",
            icon: "https://i.ibb.co.com/vxSV4JFP/image.png",
            path: "/admindashboard/allagencies"
        },
        {
            title: "Candidates",
            icon: "https://i.ibb.co.com/vxSV4JFP/image.png",
            path: "/admindashboard/allusers"
        },
        {
            title: "All Jobs",
            icon: "https://i.ibb.co.com/99mMhNxv/a3c415ecce352a368e708cb12d4f62d4.png",
            path: "/admindashboard/alljobs"
        },
        {
            title: "Message",
            icon: "https://i.ibb.co.com/mFS4ycJY/e5fe06b2b901ba416af1480602df7613.png",
            path: "/admindashboard/message"
        },
        {
            title: "Settings",
            icon: "https://i.ibb.co.com/PG8kJ1WJ/image.png",
            path: "/admindashboard/adsettings"
        },
    ]

    const {logout}=useContext(UserContext);
    const nav = useNavigate()

    const handleLogOut =()=>{
        logout();
        nav("/");



    }


    return (
        <div className='col-span-2 pt-12'>
            <div className='flex flex-col items-center mb-20'>
                <div className=' relative'>
                    <div className='flex justify-center items-center border-[4px] rounded-full'>
                        <img className='w-[150px]' src="https://i.ibb.co.com/S4J9jhj1/image.png" alt="" />

                    </div>

                    <div className='w-[30px] h-[30px] bg-blue-50 text-blue-700 flex justify-center items-center rounded-full shadow-sm shadow-black absolute top-5 right-0'>
                        <IoCameraOutline className='text-xl' />
                    </div>

                </div>
                <h2 className='text-xl font-bold'>Fabian Rokon</h2>
                <p className='text-[#72737C]'>ID : {"123456"}</p>
            </div>
            <div className='pl-12 space-y-5 my-5' >
                {
                    SideBarLinks.map(item => <AdminSideBardLinks  object={item}></AdminSideBardLinks>)
                }
                <div onClick={handleLogOut} className=' flex  items-center gap-4 cursor-pointer' >
                    <img className='w-[35px]' src="https://i.ibb.co.com/YTQsHq71/image.png" alt="" />
                    <p className='text-xl'>Logout</p>
                </div>
            </div>

        </div>
    );
};

export default AdminSideBar;