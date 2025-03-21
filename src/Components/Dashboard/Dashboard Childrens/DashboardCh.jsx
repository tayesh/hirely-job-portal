import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../AuthContext/UserContext';

const DashboardCh = () => {
    const { user } = useContext(UserContext);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);
    const [followedCompanies, setFollowedCompanies] = useState([]);

    useEffect(() => {
        if (user?.email) {
            // Fetch applied jobs
            fetch(`http://localhost:5000/applied?email=${user.email}`)
                .then(res => res.json())
                .then(data => setAppliedJobs(data))
                .catch(err => console.error("Error fetching applied jobs:", err));

            // Fetch saved jobs
            fetch(`http://localhost:5000/saved?email=${user.email}`)
                .then(res => res.json())
                .then(data => setSavedJobs(data))
                .catch(err => console.error("Error fetching saved jobs:", err));

            // Fetch all companies and filter followed ones
            fetch(`http://localhost:5000/companies`)
                .then(res => res.json())
                .then(data => {
                    const userFollowedCompanies = data.filter(company =>
                        company.followers.includes(user.email)
                    );
                    setFollowedCompanies(userFollowedCompanies);
                })
                .catch(err => console.error("Error fetching followed companies:", err));
        }
    }, [user?.email]);

    return (
        <div>
            <h2 className='text-5xl font-semibold my-20 text-center'>Welcome {user.name}!</h2>
            <div className="grid grid-cols-2 gap-16 items-center mx-36 py-10 h-[50vh]">
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co/h0WYFVJ/image.png" alt="Applied Jobs" />
                    <div className="mt-0">
                        <h2 className="text-xl font-semibold mt-0">Applied Jobs</h2>
                        <p className="text-lg text-center">{appliedJobs.length}</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co/zVqCnJDN/image.png" alt="Saved Jobs" />
                    <div className="mt-0">
                        <h2 className="text-xl font-semibold mt-0">Saved Jobs</h2>
                        <p className="text-lg text-center">{savedJobs.length}</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co/Yv8hvNT/image.png" alt="Followed Companies" />
                    <div className="mt-0">
                        <h2 className="text-xl font-semibold mt-0">Followed Companies</h2>
                        <p className="text-lg text-center">{followedCompanies.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCh;
