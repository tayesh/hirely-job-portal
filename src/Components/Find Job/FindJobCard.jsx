import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { Link } from 'react-router-dom';


const FindJobCard = ({ object }) => {
    const { jobTitle, vacancy, deadline, salary , _id} = object
    return (
        <div className=' bg-white p-[30px] space-y-6'>
            <div className='flex justify-between '>
                <h2 className='text-[22px] text-[#0275D8]'>{jobTitle}</h2>
                <div className='flex gap-2'>
                    <div className='border-[#0275D8] border-2 rounded w-[50px] h-[30px] flex justify-center items-center'>
                        <FaRegHeart className='text-[24px]  text-[#0275D8] ' />
                    </div>
                    <div className='border-[#0275D8] border-2 rounded w-[50px] h-[30px] flex justify-center items-center'>
                        <FaRegThumbsUp className='text-[24px]  text-[#0275D8] ' />
                    </div>
                </div>
            </div>
            <div className='flex gap-4 items-center text-[18px]'>

                <img src="https://i.ibb.co.com/SwgcjV5X/vacancy-1.png" alt="" />
                <p >Vacancy: {vacancy} people</p>

            </div>
            <div className='flex gap-4 items-center text-[18px]'>

                <img src="https://i.ibb.co.com/nsZdY5mQ/salary-Icon.png" alt="" />
                <p >Salary: {salary}/Month</p>

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
                <Link to={`/jobdetails/${_id}`}>
                    <button className='text-[18px] border-2 border-[#1976D280] text-[#1976D2] py-2 px-3 rounded'>View Details</button>
                </Link>
                <button className='text-[18px]  text-[#ffffff] bg-[#00A264] py-2 px-3 rounded shadow-[0px_3px_2px_rgba(0,0,0,0.5)]'>Apply Now</button>
            </div>

        </div>
    );
};

export default FindJobCard;