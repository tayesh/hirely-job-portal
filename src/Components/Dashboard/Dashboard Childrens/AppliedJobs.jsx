import React, { useState, useEffect, useContext } from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
import { UserContext } from '../../AuthContext/UserContext';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [activeTag, setActiveTag] = useState('All');
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`http://localhost:5000/applied-jobs?email=${user.email}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch applied jobs');
                    }
                    return res.json();
                })
                .then(data => {
                    setAppliedJobs(data.data || []);
                    setFilteredJobs(data.data || []);
                })
                .catch(error => {
                    console.error("Error fetching applied jobs:", error);
                    Swal.fire("Error", "Failed to load applied jobs", "error");
                    setAppliedJobs([]);
                    setFilteredJobs([]);
                })
                .finally(() => setLoading(false));
        }
    }, [user?.email]);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/applied-jobs/${id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Failed to delete');
                        }
                        return res.json();
                    })
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const updatedJobs = appliedJobs.filter(job => job._id !== id);
                            setAppliedJobs(updatedJobs);
                            setFilteredJobs(updatedJobs);
                            Swal.fire("Deleted!", "Your applied job has been removed.", "success");
                        }
                    })
                    .catch(error => {
                        Swal.fire("Error!", "Failed to remove the job.", "error");
                        console.error(error);
                    });
            }
        });
    };

    const tags = [
        { id: 'All', label: 'All' },
        { id: 'APPLIED', label: `APPLIED - [${appliedJobs.filter(job => job.status === 'APPLIED').length}]` },
        { id: 'Tracking', label: `Tracking Application - [${appliedJobs.filter(job => job.status === 'Tracking').length}]` },
        { id: 'Shortlist', label: `Shortlist - [${appliedJobs.filter(job => job.status === 'Shortlist').length}]` },
        { id: 'Interview', label: `Interview - [${appliedJobs.filter(job => job.status === 'Interview').length}]` },
        { id: 'Selected', label: `Selected - [${appliedJobs.filter(job => job.status === 'Selected').length}]` },
        { id: 'Rejected', label: `Rejected - [${appliedJobs.filter(job => job.status === 'Rejected').length}]` },
    ];

    useEffect(() => {
        if (activeTag === 'All') {
            setFilteredJobs(appliedJobs);
        } else {
            setFilteredJobs(appliedJobs.filter(job => job.status === activeTag));
        }
    }, [activeTag, appliedJobs]);

    if (loading) {
        return (
            <div className='px-8'>
                <div className='min-h-[930px] border-2 rounded-xl shadow-md mt-10 p-5 flex items-center justify-center'>
                    <p>Loading applied jobs...</p>
                </div>
            </div>
        );
    }

    return (
        <div className='px-8'>
            <div className='min-h-[930px] border-2 rounded-xl shadow-md mt-10 p-5'>
                <div className='flex'>
                    <h2 className='text-2xl font-semibold w-[210px] flex-shrink-0'>Applied jobs</h2>
                    <div className='flex flex-wrap gap-x-5 gap-y-3 text-lg'>
                        {tags.map(tag => (
                            <p
                                key={tag.id}
                                className={`px-10 py-1 rounded cursor-pointer ${activeTag === tag.id ? 'bg-[#1976D2] text-white' : 'bg-[#E5F5FF]'}`}
                                onClick={() => setActiveTag(tag.id)}
                            >
                                {tag.label}
                            </p>
                        ))}
                    </div>
                </div>
                <hr className='mt-10' />
                <h2 className='text-[#A743DF] text-xl font-semibold my-10'>
                    You have applied for {filteredJobs.length} jobs
                </h2>
                {filteredJobs.length === 0 ? (
                    <div className='flex flex-col items-center py-10'>
                        <img src="https://i.ibb.co.com/tpXWnd15/image.png" alt="No results" />
                        <p className='text-xl font-semibold my-10'>No Results Found</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto rounded-sm">
                        <table className="min-w-full table-auto border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-[#DCEFFF] text-black">
                                    <th className="roboto border-r border p-1">Sl No.</th>
                                    <th className="roboto border-r border">Job Title</th>
                                    <th className="roboto border-r border">Company</th>
                                    <th className="roboto border-r border">Salary</th>
                                    <th className="roboto border p-1">Status</th>
                                    <th className="roboto border p-1">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredJobs.map((job, index) => (
                                    <tr key={job._id}>
                                        <td className="roboto border-r border p-1 text-center">{index + 1}</td>
                                        <td className="roboto border-r border p-2">{job.jobTitle}</td>
                                        <td className="roboto border-r border p-2">{job.company}</td>
                                        <td className="roboto border-r border p-2">{job.salary}</td>
                                        <td className="roboto border p-2">{job.status}</td>
                                        <td className="roboto border-b py-7 flex justify-center items-center text-xl text-red-600 mt-1" onClick={() => handleDelete(job._id)}>
                                            <MdOutlineDeleteOutline />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppliedJobs;