import { IoCameraOutline } from "react-icons/io5";
import EmployeeSideBarLink from "./EmployeeSideBarLink";
import { useContext } from "react";
import { UserContext } from "../AuthContext/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EmployeeSideBar = () => {
    const SideBarLinks = [
        {
            title: "Dashboard",
            icon: "https://i.ibb.co.com/rRSCz2df/dashboard.png",
            path: "/employeedashboard",
            w: "50px"
        },
        {
            title: "New Job Post",
            icon: "https://i.ibb.co.com/nNKd1r0F/add-symbol.png",
            path: "/employeedashboard/newjobpost"
        },
        {
            title: "Posted Job",
            icon: "https://i.ibb.co.com/Q7fwGJtg/posted.png",
            path: "/employeedashboard/postedjob"
        },
        {
            title: "Applied Jobs",
            icon: "https://i.ibb.co.com/99mMhNxv/a3c415ecce352a368e708cb12d4f62d4.png",
            path: "/employeedashboard/allapplied"
        },
        {
            title: "Messages",
            icon: "https://i.ibb.co.com/xK31SZQN/message.png",
            path: "/employeedashboard/messages"
        },
        {
            title: "Billing Details",
            icon: "https://i.ibb.co.com/239rw3Nw/billing.png",
            path: "/employeedashboard/billingdetails"
        },
        {
            title: "Notifications",
            icon: "https://i.ibb.co.com/VYR1BZ5J/notification.png",
            path: "/employeedashboard/notifications"
        },
        {
            title: "Settings",
            icon: "https://i.ibb.co.com/KxM2rMr3/settings.png",
            path: "/employeedashboard/settings"
        },

    ];

    const { logout } = useContext(UserContext);
    const nav = useNavigate()

    const handleLogOut = () => {
        logout(() => {
            nav("/"); // Navigate to the home page after logout
        });
    };
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
                    SideBarLinks.map(item => <EmployeeSideBarLink object={item}></EmployeeSideBarLink>)
                }
                <div onClick={handleLogOut} className=' flex  items-center gap-4 cursor-pointer' >
                    <img className='w-[35px]' src="https://i.ibb.co.com/YTQsHq71/image.png" alt="" />
                    <p className='text-xl'>Logout</p>
                </div>
            </div>

        </div>
    );
};

export default EmployeeSideBar;