import { useEffect, useState } from "react";
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";

const AdminAllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("https://hirely-job-portal-server.vercel.app/jobs");
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this job?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`https://hirely-job-portal-server.vercel.app/jobs/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete job");
            }
            setJobs(jobs.filter(job => job._id !== id));
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

    if (loading) {
        return <p className="text-center text-[18px] text-gray-500">Loading Jobs...</p>;
    }
    if (error) {
        return <p className="text-center text-[18px] text-red-500">Error: {error}</p>;
    }

    return (
        <div className="bg-white p-[30px] space-y-6 my-12">
            <h1 className="text-4xl font-semibold text-center mb-6 roboto text-[#393a3a]">All Jobs</h1>
            <div className="grid grid-cols-2 gap-6 mx-16">
                {jobs.map(({ _id, jobTitle, company, salary, vacancy, deadline }) => (
                    <div key={_id} className="border p-5 rounded-lg shadow-lg space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[22px] text-[#0275D8] font-semibold">{jobTitle}</h2>
                        </div>
                        <p className="text-gray-600">Company: {company}</p>

                        <div className="flex gap-4 items-center text-[18px]">
                            <img src="https://i.ibb.co/SwgcjV5X/vacancy-1.png" alt="" />
                            <p>Vacancy: {vacancy} people</p>
                        </div>

                        <div className="flex gap-4 items-center text-[18px]">
                            <img src="https://i.ibb.co/nsZdY5mQ/salary-Icon.png" alt="" />
                            <p>Salary: {salary}/Month</p>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex justify-center gap-2 items-center bg-[#EEFAF7] py-2 px-3 text-[#15A449] rounded-full">
                                <FaBriefcase />
                                <p>Full Time</p>
                            </div>
                            <div className="flex justify-center gap-2 items-center bg-[#F2E9FF] py-2 px-3 text-[#8743DF] rounded-full">
                                <RiGraduationCapFill />
                                <p>Bachelor</p>
                            </div>
                            <div className="flex justify-center gap-2 items-center bg-[#FFF5E2] py-2 px-3 text-[#ED7200] rounded-full">
                                <FaLocationDot />
                                <p>Dhaka</p>
                            </div>
                        </div>

                        <hr />

                        <div className="flex gap-4 items-center text-[18px]">
                            <CiClock2 className="text-[30px] text-[#0275D8]" />
                            <p>Deadline: {deadline}</p>
                        </div>

                        <div className="flex justify-between mt-3">
                            <Link to={`/edit-job/${_id}`}>
                                <button className="text-[18px] flex items-center gap-2 px-6 bg-[#1976D2] text-white py-2 rounded"><FiEdit />Edit</button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="text-[18px] flex items-center gap-2 bg-red-500 text-white py-2 px-6 rounded"
                            >
                                
                                <MdOutlineDeleteOutline /> Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminAllJobs;
