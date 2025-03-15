import { useEffect, useState } from "react";

const EmployeeApliedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        fetch("http://localhost:5000/applied")
            .then((res) => res.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error("Error fetching jobs:", error));
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5000/applied/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!response.ok) {
                throw new Error("Failed to update status");
            }

            const updatedJob = await response.json();

            setJobs((prevJobs) =>
                prevJobs.map((job) =>
                    job.applyId === id ? { ...job, status: updatedJob.status } : job
                )
            );

        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return (
        <div className="min-h-screen p-6">
            <h2 className="text-2xl font-semibold mb-4">Applied Jobs</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-[#DCEFFF] text-black">
                            <th className="border border-gray-300 px-4 py-2">SL No.</th>
                            <th className="border border-gray-300 px-4 py-2">Job Title</th>
                            <th className="border border-gray-300 px-4 py-2">Candidate Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Company</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                            <th className="border border-gray-300 px-4 py-2">Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={job.applyId} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{job.jobTitle}</td>
                                <td className="border border-gray-300 px-4 py-2">{job.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{job.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{job.company}</td>
                                <td className="border border-gray-300 px-4 py-2">{job.status}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <select
                                        className="px-2 py-1 border rounded"
                                        value={job.status}
                                        onChange={(e) => handleStatusChange(job.applyId, e.target.value)}
                                    >
                                        <option value="Applied">Applied</option>
                                        <option value="Shortlist">Shortlist</option>
                                        <option value="Interview">Interview</option>
                                        <option value="Selected">Selected</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        className="px-4 py-1 bg-blue-500 text-white rounded"
                                        onClick={() => window.location.href = `/candidate-profile/${job.applyId}`}
                                    >
                                        View Profile
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeApliedJobs;
