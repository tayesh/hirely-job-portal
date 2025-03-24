import React, { useContext } from 'react';
import { IoCameraOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarLink from './SideBarLink'
import { UserContext } from '../AuthContext/UserContext';
import Swal from 'sweetalert2';

const SideBar = () => {

    const SideBarLinks = [
        {
            title: "Dashboard",
            icon: "https://i.ibb.co.com/xqnMHPNc/dashboard-1.png",
            path: "/dashboard",
            w: "50px"
        },
        {
            title: "Profile",
            icon: "https://i.ibb.co.com/vxSV4JFP/image.png",
            path: "/dashboard/profile"
        },
        {
            title: "Create CV",
            icon: "https://i.ibb.co.com/GQWmrQ48/image.png",
            path: "/dashboard/createcv"
        },
        {
            title: "Applied Jobs",
            icon: "https://i.ibb.co.com/99mMhNxv/a3c415ecce352a368e708cb12d4f62d4.png",
            path: "/dashboard/appliedjobs"
        },
        {
            title: "Saved Jobs",
            icon: "https://i.ibb.co.com/rRhLknQb/bc4f7e1bb7957bb133982bf278f80c3f.png",
            path: "/dashboard/savedjobs"
        },
        {
            title: "Followed Companies",
            icon: "https://i.ibb.co.com/3mRS5cNS/00ebb177f6cf4c54344d592ec43d4df7.png",
            path: "/dashboard/company"
        },
        {
            title: "Taken Courses",
            icon: "https://i.ibb.co.com/N6HdDNp5/learning-logo-template-isolated-brand-identity-icon-abstract-vector-graphic-7109-3121.jpg",
            path: "/dashboard/takencourses"
        },
        {
            title: "Message",
            icon: "https://i.ibb.co.com/mFS4ycJY/e5fe06b2b901ba416af1480602df7613.png",
            path: "/dashboard/message"
        },
        {
            title: "Get Job Alert",
            icon: "https://i.ibb.co.com/TxH5x7MJ/0fd2903a437626895f1a16d355618453.png",
            path: "/dashboard/getjobalert"
        },
        {
            title: "Settings",
            icon: "https://i.ibb.co.com/PG8kJ1WJ/image.png",
            path: "/dashboard/settings"
        },
    ]

    const { logout } = useContext(UserContext);
    const nav = useNavigate()

    const handleLogOut = () => {
        logout();
        nav("/");



    }

    const { user, fetchUserById } = useContext(UserContext);

    const handleImageUpload = () => {

        console.log(user.image);
        // Create a hidden file input element
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';

        // Trigger the file input when the user clicks the camera icon
        input.click();

        // Handle the file selection
        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                const formData = new FormData();
                formData.append('image', file);

                // Upload the image to ImgBB
                try {
                    const response = await fetch('https://api.imgbb.com/1/upload?key=1bd43b51970f772c727eeb303938d6b9', {
                        method: 'POST',
                        body: formData,
                    });

                    const data = await response.json();
                    if (data.success) {
                        const imageUrl = data.data.url;

                        // Send the image URL to your backend
                        await sendImageToBackend(imageUrl);
                    } else {
                        console.error('Image upload failed:', data.error.message);
                    }
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            }
        };
    };

    const sendImageToBackend = async (imageUrl) => {
        try {
            const response = await fetch('http://localhost:5000/upload-profile-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imageUrl, email: user.email }),
            });

            if (response.ok) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Image Uploaded Successfully`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                fetchUserById(user._id);
                console.log('Image URL sent to backend successfully');
            } else {
                console.error('Failed to send image URL to backend');
            }
        } catch (error) {
            console.error('Error sending image URL to backend:', error);
        }
    };


    return (
        <div className='col-span-2 pt-20'>
            <div className='flex flex-col items-center mb-20'>
                <div className='relative'>
                    <div className='flex justify-center items-center border-[4px] rounded-full'>
                        <img className='w-[150px] h-[150px] rounded-full object-cover' src={user.image ? user.image : "https://i.ibb.co.com/S4J9jhj1/image.png"} alt="" />
                    </div>
                    <div onClick={handleImageUpload} className='w-[30px] h-[30px] cursor-pointer bg-blue-50 text-blue-700 flex justify-center items-center rounded-full shadow-sm shadow-black absolute top-5 right-0'>
                        <IoCameraOutline className='text-xl' />
                    </div>
                </div>
                <h2 className='text-xl font-bold'>{user.name}</h2>
                <p className='text-[#72737C]  w-full text-center'>ID:{user._id}</p>
            </div>
            <div className='pl-12 space-y-5 my-5' >
                {
                    SideBarLinks.map(item => <SideBarLink object={item}></SideBarLink>)
                }
                <div onClick={handleLogOut} className=' flex  items-center gap-4 cursor-pointer' >
                    <img className='w-[35px]' src="https://i.ibb.co.com/YTQsHq71/image.png" alt="" />
                    <p className='text-xl'>Logout</p>
                </div>
            </div>

        </div>
    );
};

export default SideBar;