import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UserContext } from '../../AuthContext/UserContext';
import { FaBriefcase } from 'react-icons/fa';
import { RiGraduationCapFill } from 'react-icons/ri';
import { FaLocationDot } from 'react-icons/fa6';
import { CiClock2 } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const fetchSavedJobs = async (email) => {
    const response = await fetch(`https://hirely-job-portal-server.vercel.app/saved?email=${email}`);
    if (!response.ok) {
        throw new Error('Error fetching saved jobs');
    }
    const data = await response.json();
    if (Array.isArray(data)) {
        return data;
    }
    return [];
};

const SavedJobs = () => {
    const { user } = useContext(UserContext);
    if (!user || !user.email) {
        return <div>Please log in to view your saved jobs.</div>;
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ['saved', user.email],
        queryFn: () => fetchSavedJobs(user.email),
        enabled: !!user?.email,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching saved jobs: {error.message}</div>;
    }

    if (!Array.isArray(data) || data.length === 0) {
        return <div>No saved jobs found.</div>;
    }

    return (
        <div className='my-12'>
            <h1 className='text-4xl font-medium mb-12 ml-12'>Saved Jobs</h1>
            <div className='grid grid-cols-2 gap-6 mx-12'>
                {data.map((job, index) => (
                    <div key={index}>
                        <div className='bg-white p-[30px] space-y-4 border-2 shadow-2xl rounded-xl'>
                            <div className='flex justify-between'>
                                <h2 className='text-[22px] text-[#0275D8]'>{job.jobTitle}</h2>
                            </div>
                            <div className='flex gap-4 items-center text-[18px]'>
                                <img src="https://i.ibb.co.com/nsZdY5mQ/salary-Icon.png" alt="" />
                                <p>Salary: {job.salary}/Month</p>
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
                                <p>Deadline: {job.deadline}</p>
                            </div>
                            <div className='mt-4'>
                            <Link to={`/jobdetails/${job.applyId}`}>
                                <button className='w-full text-[18px] border-2 border-[#1976D280] text-[#1976D2] py-2 px-3 rounded'>View Details</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedJobs;
