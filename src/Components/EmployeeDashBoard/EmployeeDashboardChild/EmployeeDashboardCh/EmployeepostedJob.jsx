import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../AuthContext/UserContext';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const EmployeepostedJob = () => {
    const { user } = useContext(UserContext);
    const [postedJobs, setPostedJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPostedJobs = async () => {
            try {
                const response = await fetch('https://hirely-job-portal-server.vercel.app/jobs');
                if (!response.ok) {
                    throw new Error('Failed to fetch jobs');
                }
                const data = await response.json();

                const filteredJobs = data.filter(job => job.agencyEmail === user.email);
                setPostedJobs(filteredJobs);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPostedJobs();
    }, [user.email]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-6xl mx-6 p-6 bg-white shadow-xl rounded-lg my-12 ">
            <h2 className="text-4xl font-semibold text-center mb-6">Posted Jobs</h2>
            {postedJobs.length === 0 ? (
                <p className="text-center text-gray-600">No jobs posted yet.</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-sky-200 text-center">
                            <th className="py-3 px-4 border-b text-left">Sl No.</th>
                            <th className="py-3 px-4 border-b text-left">Job Title</th>
                            <th className="py-3 px-4 border-b text-left">Company</th>
                            <th className="py-3 px-4 border-b text-left">Salary</th>
                            <th className="py-3 px-4 border-b text-left">Location</th>
                            <th className="py-3 px-4 border-b text-left">Deadline</th>
                            <th className="py-3 px-4 border-b text-left">Vacancy</th>
                            <th className="py-3 px-4 border-b text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postedJobs.map((job, index) => (
                            <tr key={job._id} className="hover:bg-gray-50 text-start">
                                <td className="py-3 px-4 border-b">{index + 1}</td>
                                <td className="py-3 px-4 border-b">{job.jobTitle}</td>
                                <td className="py-3 px-4 border-b">{job.company}</td>
                                <td className="py-3 px-4 border-b">{job.salary}</td>
                                <td className="py-3 px-4 border-b">{job.location}</td>
                                <td className="py-3 px-4 border-b">{new Date(job.deadline).toLocaleDateString()}</td>
                                <td className="py-3 px-4 border-b">{job.vacancy}</td>
                                <td className='py-3 px-4  flex gap-3'>
                                    <button className='text-2xl border-2 shadow-md'><CiEdit /></button>
                                    <button className='text-2xl border-2 shadow-md'><MdDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default EmployeepostedJob;
