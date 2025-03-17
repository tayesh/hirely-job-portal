import React, { useState, useEffect } from 'react';
import useApply from '../../hooks/useApply';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

const AppliedJobs = () => {
    const [activeTag, setActiveTag] = useState('All');
    const { cart, refetch } = useApply();
    const [filteredJobs, setFilteredJobs] = useState(cart);
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
                fetch(`https://hirely-job-portal-server.vercel.app/applied/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your applied job has been removed.",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "Failed!",
                                text: "Failed to remove the job.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while removing the job.",
                            icon: "error"
                        });
                        console.error(error);
                    });
            }
        });
    };

    const tags = [
        { id: 'All', label: 'All' },
        { id: 'APPLIED', label: `APPLIED - [${filteredJobs.length}]` },
        { id: 'Tracking', label: 'Tracking Application - [0]' },
        { id: 'Shortlist', label: 'Shortlist - [0]' },
        { id: 'Interview', label: 'Interview - [0]' },
        { id: 'Selected', label: 'Selected - [0]' },
        { id: 'Rejected', label: 'Rejected - [0]' },
    ];

    const filterJobs = (tag) => {
        if (tag === 'All') {
            setFilteredJobs(cart);
        } else {
            const filtered = cart.filter(job => job.status === tag);
            setFilteredJobs(filtered);
        }
    };

    useEffect(() => {
        filterJobs(activeTag);
    }, [cart, activeTag]);

    useEffect(() => {
        tags.forEach((tag) => {
            const tagCount = tag.id === 'All'
                ? cart.length
                : cart.filter((job) => job.status === tag.id).length;
            tag.label = `${tag.id} - [${tagCount}]`;
        });
    }, [cart]);

    return (
        <div className='px-8'>
            <div className='min-h-[930px] border-2 rounded-xl shadow-md mt-10 p-5'>
                <div className='flex'>
                    <h2 className='text-2xl font-semibold w-[210px] flex-shrink-0'>Applied jobs</h2>
                    <div className='flex flex-wrap gap-x-5 gap-y-3 text-lg'>
                        {tags.map((tag) => (
                            <p
                                key={tag.id}
                                className={`px-10 py-1 rounded cursor-pointer ${activeTag === tag.id
                                    ? 'bg-[#1976D2] text-white'
                                    : 'bg-[#E5F5FF]'
                                    }`}
                                onClick={() => setActiveTag(tag.id)}
                            >
                                {tag.label}
                            </p>
                        ))}
                    </div>
                </div>
                <hr className='mt-10' />
                <h2 className='text-[#A743DF] text-xl font-semibold my-10'>
                    You have applied {filteredJobs.length} jobs
                </h2>
                {filteredJobs.length === 0 ? (
                    <div className='flex flex-col items-center py-10'>
                        <img src="https://i.ibb.co.com/tpXWnd15/image.png" alt="No results" />
                        <p className='text-xl font-semibold my-10'>No Results Found</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto rounded-sm ">
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
                                    <tr key={job.id}>
                                        <td className="roboto border-r border p-1 text-center">{index + 1}</td>
                                        <td className="roboto border-r border p-2">{job.jobTitle}</td>
                                        <td className="roboto border-r border p-2">{job.company}</td>
                                        <td className="roboto border-r border p-2">{job.salary}</td>
                                        <td className="roboto border p-2">{job.status}</td>
                                        <td className="roboto border-b py-7 flex justify-center items-center text-xl text-red-600 mt-1" onClick={() => handleDelete(job._id)}><MdOutlineDeleteOutline /></td>
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
