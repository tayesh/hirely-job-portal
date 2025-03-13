import React, { useEffect, useState } from 'react';
import FindJobCard from '../../Find Job/FindJobCard';

const SavedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
            fetch('https://hirely-job-portal-server.vercel.app/jobs')
                .then(res => res.json())
                .then(data => {
                    setJobs(data);
                });
        }, []);
    return (
        <div>
            <div className='grid grid-cols-2 gap-4 mt-4'>
                    {jobs.map((item) => (
                        <FindJobCard key={item.id} saved={true} object={item} />
                    ))}
                </div>
            
        </div>
    );
};

export default SavedJobs;