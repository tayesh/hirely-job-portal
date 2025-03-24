import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../AuthContext/UserContext';
import Swal from 'sweetalert2';
const DashboardCh = () => {
    const { user } = useContext(UserContext);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);
    const [followedCompanies, setFollowedCompanies] = useState([]);
    const [taken, setTaken] = useState([]);
    const [loading, setLoading] = useState({
        applied: false,
        saved: false,
        followed: false,
        taken: false
    });
       
    useEffect(() => {
        if (user?.email) {
            // Fetch applied jobs
            setLoading(prev => ({ ...prev, applied: true }));
            fetch(`http://localhost:5000/applied-jobs?email=${user.email}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch applied jobs');
                    }
                    return res.json();
                })
                .then(data => {
                    setAppliedJobs(data.data || []);
                })
                .catch(error => {
                    console.error("Error fetching applied jobs:", error);
                    Swal.fire("Error", "Failed to load applied jobs", "error");
                })
                .finally(() => setLoading(prev => ({ ...prev, applied: false })));

            // Fetch taken courses
            setLoading(prev => ({ ...prev, taken: true }));
            fetch(`http://localhost:5000/taken?userEmail=${user.email}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch taken courses');
                    }
                    return res.json();
                })
                .then(data => setTaken(data))
                .catch(err => {
                    console.error("Error fetching taken courses:", err);
                    Swal.fire("Error", "Failed to load taken courses", "error");
                })
                .finally(() => setLoading(prev => ({ ...prev, taken: false })));

            // Fetch saved jobs
            setLoading(prev => ({ ...prev, saved: true }));
            fetch(`http://localhost:5000/saved?email=${user.email}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch saved jobs');
                    }
                    return res.json();
                })
                .then(data => setSavedJobs(data))
                .catch(err => {
                    console.error("Error fetching saved jobs:", err);
                    Swal.fire("Error", "Failed to load saved jobs", "error");
                })
                .finally(() => setLoading(prev => ({ ...prev, saved: false })));

            // Fetch followed companies
            setLoading(prev => ({ ...prev, followed: true }));
            fetch(`http://localhost:5000/companyfollowedbyuser/${user.email}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch followed companies');
                    }
                    return res.json();
                })
                .then(data => {
                    setFollowedCompanies(data);
                })
                .catch(err => {
                    console.error("Error fetching followed companies:", err);
                    Swal.fire("Error", "Failed to load followed companies", "error");
                })
                .finally(() => setLoading(prev => ({ ...prev, followed: false })));
        }
    }, [user?.email]);

    return (
        <div>
            <h2 className="text-5xl font-semibold my-20 text-center">
                Welcome {user?.name}!
            </h2>
            <div className="grid grid-cols-2 gap-16 items-center mx-36 py-10 h-[50vh]">
                {/* Applied Jobs Card */}
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co/h0WYFVJ/image.png" alt="Applied Jobs" />
                    <div className="mt-0">
                        <h2 className="text-xl font-semibold mt-0">Applied Jobs</h2>
                        {loading.applied ? (
                            <p className="text-lg text-center">Loading...</p>
                        ) : (
                            <p className="text-lg text-center">{appliedJobs.length}</p>
                        )}
                    </div>
                </div>

                {/* Saved Jobs Card */}
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co/zVqCnJDN/image.png" alt="Saved Jobs" />
                    <div className="mt-0">
                        <h2 className="text-xl font-semibold mt-0">Saved Jobs</h2>
                        {loading.saved ? (
                            <p className="text-lg text-center">Loading...</p>
                        ) : (
                            <p className="text-lg text-center">{savedJobs.length}</p>
                        )}
                    </div>
                </div>

                {/* Followed Companies Card */}
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co/Yv8hvNT/image.png" alt="Followed Companies" />
                    <div className="mt-0">
                        <h2 className="text-xl font-semibold mt-0">Followed Companies</h2>
                        {loading.followed ? (
                            <p className="text-lg text-center">Loading...</p>
                        ) : (
                            <p className="text-lg text-center">{followedCompanies.length}</p>
                        )}
                    </div>
                </div>

                {/* Taken Courses Card */}
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img
                        className="mt-1 h-14"
                        src="https://i.ibb.co/N6HdDNp5/learning-logo-template-isolated-brand-identity-icon-abstract-vector-graphic-7109-3121.jpg"
                        alt="Taken Courses"
                    />
                    <div className="mt-0">
                        <h2 className="text-xl font-semibold mt-0">Taken Courses</h2>
                        {loading.taken ? (
                            <p className="text-lg text-center">Loading...</p>
                        ) : (
                            <p className="text-lg text-center">{taken.length}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCh;