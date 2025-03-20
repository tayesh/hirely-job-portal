import React, { useContext, useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../AuthContext/UserContext';
import Swal from 'sweetalert2';
import useApply from '../hooks/useApply';

const FindJobCard = ({ object }) => {
    const { jobTitle, vacancy, company, deadline, salary, _id } = object;
    const { user } = useContext(UserContext);
    const { refetch } = useApply();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const checkSavedStatus = async () => {
            if (user && user.email) {
                try {
                    const response = await fetch(`https://hirely-job-portal-server.vercel.app/saved?email=${user.email}&applyId=${_id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch saved status');
                    }
                    const data = await response.json();
                    setIsSaved(data); 
                } catch (error) {
                    console.error("Error checking saved status:", error);
                }
            }
        };
        checkSavedStatus();
    }, [user, _id]);

    const handleSaveToggle = async () => {
        if (!user || !user.email) {
            Swal.fire({
                title: "Want to Save?",
                text: "You have to Log in to Save the job!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
            return;
        }

        if (isSaved) {
            try {
                const response = await fetch(`https://hirely-job-portal-server.vercel.app/saved/${_id}?email=${user.email}`, {
                    method: "DELETE",
                });
                if (!response.ok) {
                    throw new Error('Failed to remove');
                }
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${jobTitle} Removed from Saved`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                setIsSaved(false);
                refetch();
            } catch (error) {
                console.error("Error removing the saved job:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong while removing.",
                });
            }
        } else {
            const savedItem = {
                applyId: _id,
                email: user.email,
                name: user.name,
                jobTitle,
                company,
                salary,
                deadline,
                status: 'Saved'
            };

            try {
                const response = await fetch("https://hirely-job-portal-server.vercel.app/saved", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(savedItem),
                });

                if (!response.ok) {
                    throw new Error('Failed to save');
                }
                const data = await response.json();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${jobTitle} Saved`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                setIsSaved(true);
                refetch();
            } catch (error) {
                console.error("Error saving for the job:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong while saving.",
                });
            }
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Handle applying for the job
    const handleAddtoApplied = async (product) => {
        if (user && user.email) {
            const appliedItem = {
                applyId: _id,
                email: user.email,
                name: user.name,
                jobTitle,
                company,
                salary,
                deadline,
                status: 'Applied'
            };

            try {
                const response = await fetch("https://hirely-job-portal-server.vercel.app/applied", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(appliedItem),
                });

                if (!response.ok) {
                    throw new Error('Failed to apply');
                }
                const data = await response.json();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${jobTitle} Applied`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                refetch();
            } catch (error) {
                console.error("Error applying for the job:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong while applying.",
                });
            }
        } else {
            Swal.fire({
                title: "Want to Apply?",
                text: "You have to Log in to Apply the job!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className='bg-white p-[30px] space-y-6'>
            <div className='flex justify-between'>
                <h2 className='text-[22px] text-[#0275D8]'>{jobTitle}</h2>
                <div className='flex gap-2'>
                    <button onClick={handleSaveToggle} className='border-[#0275D8] border-2 rounded w-[50px] h-[30px] flex justify-center items-center'>
                        <FaRegHeart className={`text-[24px] ${isSaved ? 'text-red-500' : 'text-[#0275D8]'}`} />
                    </button>
                </div>
            </div>
            <div className='flex gap-4 items-center text-[18px]'>
                <img src="https://i.ibb.co.com/SwgcjV5X/vacancy-1.png" alt="" />
                <p>Vacancy: {vacancy} people</p>
            </div>
            <div className='flex gap-4 items-center text-[18px]'>
                <img src="https://i.ibb.co.com/nsZdY5mQ/salary-Icon.png" alt="" />
                <p>Salary: {salary}/Month</p>
            </div>
            <div className='flex gap-4'>
                <div className='flex justify-center gap-2 items-center bg-[#EEFAF7] py-2 px-3 text-[#15A449] rounded-full'>
                    <FaBriefcase />
                    <p>Full Time</p>
                </div>
                <div className='flex justify-center gap-2 items-center bg-[#F2E9FF] py-2 px-3 text-[#8743DF] rounded-full'>
                    <RiGraduationCapFill />
                    <p>Bachelor</p>
                </div>
                <div className='flex justify-center gap-2 items-center bg-[#FFF5E2] py-2 px-3 text-[#ED7200] rounded-full'>
                    <FaLocationDot />
                    <p>Dhaka</p>
                </div>
            </div>
            <hr />
            <div className='flex gap-4 items-center text-[18px]'>
                <CiClock2 className='text-[30px] text-[#0275D8]' />
                <p>Deadline: {deadline}</p>
            </div>
            <div className='flex justify-between'>
                <Link onClick={scrollToTop} to={`/jobdetails/${_id}`}>
                    <button className='text-[18px] border-2 border-[#1976D280] text-[#1976D2] py-2 px-3 rounded'>View Details</button>
                </Link>
                <button onClick={() => handleAddtoApplied(object)} className='text-[18px] text-[#ffffff] bg-[#00A264] py-2 px-3 rounded shadow-[0px_3px_2px_rgba(0,0,0,0.5)]'>Apply Now</button>
            </div>
        </div>
    );
};

export default FindJobCard;