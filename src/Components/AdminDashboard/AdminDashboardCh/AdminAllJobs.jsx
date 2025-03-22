import { useEffect, useState } from "react";
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const AdminAllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [jobDetails, setJobDetails] = useState({
        jobTitle: "",
        company: "",
        salary: "",
        experience: "",
        dutyTime: "",
        location: "",
        deadline: "",
        vacancy: "",
        minimumQualification: "",
        preferredQualification: "",
        qualifications: "",
        compensationBenefits: {
            salary: "",
            location: "",
        },
        jobResponsibilities: "",
        additionalRequirements: "",
    });

    // Fetch jobs from the backend
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:5000/jobs");
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

    // Handle job deletion
    const handleDelete = async (id) => {
        const confirmDelete = await Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this job!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        });

        if (confirmDelete.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5000/job/${id}`, {
                    method: "DELETE",
                });
                if (!response.ok) {
                    throw new Error("Failed to delete job");
                }
                setJobs(jobs.filter((job) => job._id !== id));
                Swal.fire("Deleted!", "The job has been deleted.", "success");
            } catch (error) {
                console.error("Error deleting job:", error);
                Swal.fire("Error", "Failed to delete the job. Please try again.", "error");
            }
        }
    };

    // Handle edit button click
    const handleEditClick = (job) => {
        setSelectedJob(job);
        setJobDetails(job); // Pre-fill the form with the selected job's data
        setIsModalOpen(true);
    };

    // Close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
        setJobDetails({
            jobTitle: "",
            company: "",
            salary: "",
            experience: "",
            dutyTime: "",
            location: "",
            deadline: "",
            vacancy: "",
            minimumQualification: "",
            preferredQualification: "",
            qualifications: "",
            compensationBenefits: {
                salary: "",
                location: "",
            },
            jobResponsibilities: "",
            additionalRequirements: "",
        });
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setJobDetails((prev) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value,
                },
            }));
        } else {
            setJobDetails((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // Handle job update
    const handleJobUpdate = async (e) => {
        e.preventDefault();
        try {
            const { _id, ...updatedJobDetails } = jobDetails;
            const response = await fetch(`http://localhost:5000/job/${selectedJob._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedJobDetails),
            });

            if (!response.ok) {
                throw new Error("Failed to update job");
            }

            const data = await response.json();
            Swal.fire({
                icon: "success",
                title: "Job Updated!",
                text: "The job has been updated successfully.",
            });

            handleCloseModal();
            setJobs(jobs.map((job) => (job._id === selectedJob._id ? data : job)));
        } catch (error) {
            console.error("Error updating job:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to update the job. Please try again.",
            });
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
                {jobs.map(({ _id, jobTitle, company, salary, vacancy, deadline,employmentStatus,location }) => (
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
                                <p>{employmentStatus}</p>
                            </div>
                            <div className="flex justify-center gap-2 items-center bg-[#F2E9FF] py-2 px-3 text-[#8743DF] rounded-full">
                                <RiGraduationCapFill />
                                <p>Bachelor</p>
                            </div>
                            <div className="flex justify-center gap-2 items-center bg-[#FFF5E2] py-2 px-3 text-[#ED7200] rounded-full">
                                <FaLocationDot />
                                <p>{location}</p>
                            </div>
                        </div>

                        <hr />

                        <div className="flex gap-4 items-center text-[18px]">
                            <CiClock2 className="text-[30px] text-[#0275D8]" />
                            <p>Deadline: {deadline}</p>
                        </div>

                        <div className="flex justify-between mt-3">
                            <button
                                onClick={() => handleEditClick({ _id, jobTitle, company, salary, vacancy, deadline })}
                                className="text-[18px] flex items-center gap-2 px-6 bg-[#1976D2] text-white py-2 rounded"
                            >
                                <FiEdit /> Edit
                            </button>
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

            {/* Modal for Editing Job */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white max-h-[80vh] overflow-y-auto p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Edit Job</h3>
                        <form onSubmit={handleJobUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Job Title */}
                            <div className="flex flex-col">
                                <label htmlFor="jobTitle" className="text-sm font-semibold mb-2">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    id="jobTitle"
                                    placeholder="Enter Job Title Here"
                                    value={jobDetails.jobTitle}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Company */}
                            <div className="flex flex-col">
                                <label htmlFor="company" className="text-sm font-semibold mb-2">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder="Enter Company Name Here"
                                    value={jobDetails.company}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Salary */}
                            <div className="flex flex-col">
                                <label htmlFor="salary" className="text-sm font-semibold mb-2">
                                    Salary
                                </label>
                                <input
                                    type="text"
                                    name="salary"
                                    id="salary"
                                    placeholder="Enter Salary"
                                    value={jobDetails.salary}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Vacancy */}
                            <div className="flex flex-col">
                                <label htmlFor="vacancy" className="text-sm font-semibold mb-2">
                                    Vacancy
                                </label>
                                <input
                                    type="number"
                                    name="vacancy"
                                    id="vacancy"
                                    placeholder="Enter Vacancy for this job"
                                    value={jobDetails.vacancy}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Deadline */}
                            <div className="flex flex-col">
                                <label htmlFor="deadline" className="text-sm font-semibold mb-2">
                                    Deadline
                                </label>
                                <input
                                    type="date"
                                    name="deadline"
                                    id="deadline"
                                    placeholder="Enter Deadline"
                                    value={jobDetails.deadline}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white text-[20px] font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300 col-span-2"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="w-full bg-gray-500 text-white text-[20px] font-medium py-2 rounded-md hover:bg-gray-700 transition duration-300 col-span-2"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminAllJobs;