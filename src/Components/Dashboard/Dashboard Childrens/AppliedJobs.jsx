import React, { useState } from 'react';

const AppliedJobs = () => {
    // State to track the active tag
    const [activeTag, setActiveTag] = useState('All');

    // List of tags
    const tags = [
        { id: 'All', label: 'All' },
        { id: 'APPLIED', label: 'APPLIED - [0]' },
        { id: 'Tracking', label: 'Tracking Application - [0]' },
        { id: 'Shortlist', label: 'Shortlist - [0]' },
        { id: 'Interview', label: 'Interview - [0]' },
        { id: 'Selected', label: 'Selected - [0]' },
        { id: 'Rejected', label: 'Rejected - [0]' },
    ];

    return (
        <div className='px-24'>
            <div className='min-h-[930px] border-2 rounded-xl shadow-md mt-10 p-5'>
                <div className='flex'>
                    <h2 className='text-2xl font-semibold w-[210px] flex-shrink-0'>Applied jobs</h2>
                    <div className='flex flex-wrap gap-x-5 gap-y-3 text-lg'>
                        {tags.map((tag) => (
                            <p
                                key={tag.id}
                                className={`px-10 py-1 rounded cursor-pointer ${
                                    activeTag === tag.id
                                        ? 'bg-[#1976D2] text-white' // Active style
                                        : 'bg-[#E5F5FF]' // Inactive style
                                }`}
                                onClick={() => setActiveTag(tag.id)} // Update active tag on click
                            >
                                {tag.label}
                            </p>
                        ))}
                    </div>
                </div>
                <hr className='mt-10' />
                <h2 className='text-[#A743DF] text-xl font-semibold my-10'>You have applied 0 jobs</h2>
                <div className='flex flex-col items-center py-10'>
                    <img src="https://i.ibb.co.com/tpXWnd15/image.png" alt="" />
                    <p className='text-xl font-semibold my-10'>No Results Found</p>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;