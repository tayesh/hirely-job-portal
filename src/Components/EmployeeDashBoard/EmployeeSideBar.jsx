import { IoCameraOutline } from "react-icons/io5";
import EmployeeSideBarLink from "./EmployeeSideBarLink";
import { useContext } from "react";
import { UserContext } from "../AuthContext/UserContext";
import { useNavigate } from "react-router-dom";

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
            path: "/employeedashboard/appliedjobs"
        },
        {
            title: "Saved Jobs",
            icon: "https://i.ibb.co.com/tMG2BSs2/saved.png",
            path: "/employeedashboard/savedjobs"
        },
        {
            title: "Saved Profiles",
            icon: "https://i.ibb.co.com/S1SXBjw/company.png",
            path: "/employeedashboard/savedprofiles"
        },
        {
            title: "Talent Management",
            icon: "https://i.ibb.co.com/VWr2f75y/talent.png",
            path: "/employeedashboard/talentmanagement"
        },
        {
            title: "Messages",
            icon: "https://i.ibb.co.com/xK31SZQN/message.png",
            path: "/employeedashboard/messages"
        },
        {
            title: "Company Profile",
            icon: "https://i.ibb.co.com/S1SXBjw/company.png",
            path: "/employeedashboard/companyprofile"
        },
        {
            title: "Agency Verification",
            icon: "https://i.ibb.co.com/ZnmmSXw/agency.png",
            path: "/employeedashboard/agencyverification"
        },
        {
            title: "Pricing Packages",
            icon: "https://i.ibb.co.com/3YjM8w1K/pricing.png",
            path: "/employeedashboard/pricingpackages"
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

    const {logout}=useContext(UserContext);
        const nav = useNavigate()
    
        const handleLogOut = () => {
            logout(() => {
                nav("/"); // Navigate to the home page after logout
            });
        };
    return (
        <div className='col-span-2 pt-20'>
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