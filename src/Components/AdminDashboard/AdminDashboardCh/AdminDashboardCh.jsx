import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminDashboardCh = () => {
    const [jobs, setJobs] = useState([]);
    const [users, setUsers] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch jobs data
        fetch("https://hirely-job-portal-server.vercel.app/jobs")
            .then(response => response.json())
            .then(data => {
                setJobs(data);
            })
            .catch(error => console.error("Error fetching jobs:", error));

        // Fetch users data
        fetch("https://hirely-job-portal-server.vercel.app/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => console.error("Error fetching users:", error));

        // Fetch applied jobs data
        fetch("https://hirely-job-portal-server.vercel.app/applied")
            .then(response => response.json())
            .then(data => {
                setAppliedJobs(data);
            })
            .catch(error => console.error("Error fetching applied jobs:", error));

        // Fetch companies data
        fetch("https://hirely-job-portal-server.vercel.app/companies")
            .then(response => response.json())
            .then(data => {
                setCompanies(data);
            })
            .catch(error => console.error("Error fetching companies:", error))
            .finally(() => setLoading(false));
    }, []);

    // Total number of candidates (length of users array)
    const totalCandidates = users.length;

    // Number of applied jobs (length of appliedJobs array)
    const appliedJobsCount = appliedJobs.length;

    // Count the number of agencies (userRoll === "AGENCY")
    const agencyCount = users.filter(user => user.userRoll === "AGENCY").length;

    // Count the number of published jobs
    const publishedJobsCount = jobs.length;

    // Total number of companies (length of companies array)
    const totalCompanies = companies.length;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center">
            <div className="my-16">
                <div className="flex justify-between mb-12">
                    <h2 className="poppins font-semibold text-[32px] text-[#000000]">Welcome to your Dashboard!</h2>
                    <Link to="/admindashboard/newjob">
                        <p className="bg-[#0079C1] epilogue flex items-center py-2 px-4 gap-2 text-[20px] text-white rounded-md">
                            <img className="h-6 w-6" src="https://i.ibb.co.com/1tSLgMMr/add.png" alt="" />
                            New Job Post
                        </p>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-12 mx-16 py-4 h-[40vh] mb-[100px]">
                    <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                        <img className="mt-1 h-10" src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" />
                        <div className="mt-0">
                            <h2 className="text-[20px] poppins mt-0">Total Candidates</h2>
                            <p className="text-[20px] poppins font-semibold text-[#0079C1]">{totalCandidates}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                        <img className="mt-1" src="https://i.ibb.co.com/Yv8hvNT/image.png" alt="" />
                        <div className="mt-0">
                            <h2 className="text-[20px] poppins mt-0">Published Jobs</h2>
                            <p className="text-[20px] poppins font-semibold text-[#0079C1]">{publishedJobsCount}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                        <img className="mt-1 h-10" src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" />
                        <div className="mt-0">
                            <h2 className="text-[20px] poppins mt-0">Applied Jobs</h2>
                            <p className="text-[20px] poppins font-semibold text-[#0079C1]">{appliedJobsCount}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                        <img className="mt-1 h-10" src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" />
                        <div className="mt-0">
                            <h2 className="text-[20px] poppins mt-0">Total Agency</h2>
                            <p className="text-[20px] poppins font-semibold text-[#0079C1]">{agencyCount}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                        <img className="mt-1 h-10" src="https://i.ibb.co.com/Yv8hvNT/image.png" alt="" />
                        <div className="mt-0">
                            <h2 className="text-[20px] poppins mt-0">Total Companies</h2>
                            <p className="text-[20px] poppins font-semibold text-[#0079C1]">{totalCompanies}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardCh;