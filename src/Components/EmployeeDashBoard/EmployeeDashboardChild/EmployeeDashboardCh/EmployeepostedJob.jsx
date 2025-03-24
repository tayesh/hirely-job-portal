import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../AuthContext/UserContext';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const EmployeepostedJob = () => {
    const { user } = useContext(UserContext);
    const [postedJobs, setPostedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [selectedJob, setSelectedJob] = useState(null); // State to store the selected job for editing
    const [jobDetails, setJobDetails] = useState({
        jobTitle: '',
        company: '',
        salary: '',
        experience: '',
        dutyTime: '',
        location: '',
        deadline: '',
        vacancy: '',
        minimumQualification: '',
        preferredQualification: '',
        qualifications: '',
        compensationBenefits: {
            salary: '',
            location: '',
        },
        jobResponsibilities: '',
        additionalRequirements: '',
    });
    const fetchPostedJobs = async () => {
        try {
            const response = await fetch(`https://hirely-job-portal-server.vercel.app/job/${user.email}`);
            if (!response.ok) {
                throw new Error('Failed to fetch jobs');
            }
            const data = await response.json();
            setPostedJobs(data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        

        fetchPostedJobs();
    }, [user.email]);

    // Function to open the modal and set the selected job
    const handleEditClick = (job) => {
        setSelectedJob(job);
        setJobDetails(job); // Pre-fill the form with the selected job's data
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
        setJobDetails({
            jobTitle: '',
            company: '',
            salary: '',
            experience: '',
            dutyTime: '',
            location: '',
            deadline: '',
            vacancy: '',
            minimumQualification: '',
            preferredQualification: '',
            qualifications: '',
            compensationBenefits: {
                salary: '',
                location: '',
            },
            jobResponsibilities: '',
            additionalRequirements: '',
        });
    };

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
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

    // Function to handle form submission
    const handleJobPost = async (e) => {
        e.preventDefault();
        try {
            // Create a copy of jobDetails and exclude the _id field
            const { _id, ...updatedJobDetails } = jobDetails;
    
            // Send the updated job details to the backend
            const response = await fetch(`https://hirely-job-portal-server.vercel.app/job/${selectedJob._id}`, {
                method: 'PUT', // Use PUT or PATCH depending on your backend API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedJobDetails), // Send the updatedJobDetails without _id
            });
    
            if (!response.ok) {
                throw new Error('Failed to update job');
            }
    
            const data = await response.json();
            console.log('Job updated successfully:', data);
    
            // Optionally, update the UI or show a success message
            Swal.fire({
                icon: 'success',
                title: 'Job Updated!',
                text: 'The job has been updated successfully.',
            });
    
            // Close the modal and refresh the job list
            handleCloseModal();
            fetchPostedJobs(); // Assuming fetchPostedJobs is a function to refresh the job list
        } catch (error) {
            console.error('Error updating job:', error);
    
            // Show an error message
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to update the job. Please try again.',
            });
        }
    };
    const handleDeleteJob = async (jobId) => {
        try {
            // Confirm deletion with the user
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this job!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
            });

            if (result.isConfirmed) {
                // Send DELETE request to the backend
                const response = await fetch(`https://hirely-job-portal-server.vercel.app/job/${jobId}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Failed to delete job');
                }

                // Show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'The job has been deleted.',
                });

                // Refresh the job list
                await fetchPostedJobs();
            }
        } catch (error) {
            console.error('Error deleting job:', error);

            // Show error message
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to delete the job. Please try again.',
            });
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-6xl mx-6 p-6 bg-white shadow-xl rounded-lg my-12">
            <h2 className="text-4xl font-semibold text-center mb-6">Posted Jobs</h2>
            {postedJobs.length === 0 ? (
                <p className="text-center text-gray-600">No jobs posted yet.</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-sky-200 text-center">
                            <th className="py-3 px-4 border-b text-left">Sl No.</th>
                            <th className="py-3 px-4 border-b text-left">Job Title</th>
                            <th className="py-3 px-4 border-b text-left">Company</th>
                            <th className="py-3 px-4 border-b text-left">Salary</th>
                            <th className="py-3 px-4 border-b text-left">Location</th>
                            <th className="py-3 px-4 border-b text-left">Deadline</th>
                            <th className="py-3 px-4 border-b text-left">Vacancy</th>
                            <th className="py-3 px-4 border-b text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postedJobs.map((job, index) => (
                            <tr key={job._id} className="hover:bg-gray-50 text-start">
                                <td className="py-3 px-4 border-b">{index + 1}</td>
                                <td className="py-3 px-4 border-b">{job.jobTitle}</td>
                                <td className="py-3 px-4 border-b">{job.company}</td>
                                <td className="py-3 px-4 border-b">{job.salary}</td>
                                <td className="py-3 px-4 border-b">{job.location}</td>
                                <td className="py-3 px-4 border-b">{new Date(job.deadline).toLocaleDateString()}</td>
                                <td className="py-3 px-4 border-b">{job.vacancy}</td>
                                <td className="py-3 px-4 flex gap-3">
                                    <button
                                        className="text-2xl border-2 shadow-md"
                                        onClick={() => handleEditClick(job)} // Open modal on click
                                    >
                                        <CiEdit />
                                    </button>
                                    <button onClick={() => handleDeleteJob(job._id)} className="text-2xl border-2 shadow-md">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Modal for Editing Job */}
            {isModalOpen && (
                <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white max-h-[80vh] overflow-y-auto p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Edit Job</h3>
                        <form onSubmit={handleJobPost} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Job Title */}
                            <div className="flex flex-col">
                                <label htmlFor="jobTitle" className="text-sm font-semibold mb-2">Job Title</label>
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
                                <label htmlFor="company" className="text-sm font-semibold mb-2">Company</label>
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
                                <label htmlFor="salary" className="text-sm font-semibold mb-2">Salary</label>
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

                            {/* Experience */}
                            <div className="flex flex-col">
                                <label htmlFor="experience" className="text-sm font-semibold mb-2">Experience</label>
                                <input
                                    type="text"
                                    name="experience"
                                    id="experience"
                                    placeholder="Enter The Experience Company Needs"
                                    value={jobDetails.experience}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Duty Time */}
                            <div className="flex flex-col">
                                <label htmlFor="dutyTime" className="text-sm font-semibold mb-2">Duty Time</label>
                                <input
                                    type="text"
                                    name="dutyTime"
                                    id="dutyTime"
                                    placeholder="Enter Duty Time"
                                    value={jobDetails.dutyTime}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Location */}
                            <div className="flex flex-col">
                                <label htmlFor="location" className="text-sm font-semibold mb-2">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    placeholder="Enter Location"
                                    value={jobDetails.location}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Deadline */}
                            <div className="flex flex-col">
                                <label htmlFor="deadline" className="text-sm font-semibold mb-2">Deadline</label>
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

                            {/* Vacancy */}
                            <div className="flex flex-col">
                                <label htmlFor="vacancy" className="text-sm font-semibold mb-2">Vacancy</label>
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

                            {/* Minimum Qualification */}
                            <div className="flex flex-col">
                                <label htmlFor="minimumQualification" className="text-sm font-semibold mb-2">Minimum Qualification</label>
                                <input
                                    type="text"
                                    name="minimumQualification"
                                    id="minimumQualification"
                                    placeholder="Enter Educational Minimum Qualification"
                                    value={jobDetails.minimumQualification}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Preferred Qualification */}
                            <div className="flex flex-col">
                                <label htmlFor="preferredQualification" className="text-sm font-semibold mb-2">Preferred Qualification</label>
                                <input
                                    type="text"
                                    name="preferredQualification"
                                    id="preferredQualification"
                                    placeholder="Enter Educational Preferred Qualification"
                                    value={jobDetails.preferredQualification}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Qualifications */}
                            <div className="flex flex-col">
                                <label htmlFor="qualifications" className="text-sm font-semibold mb-2">Qualifications</label>
                                <input
                                    type="text"
                                    name="qualifications"
                                    id="qualifications"
                                    placeholder="Enter Qualification"
                                    value={jobDetails.qualifications}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Compensation Benefits Salary */}
                            <div className="flex flex-col">
                                <label htmlFor="compensationBenefits.salary" className="text-sm font-semibold mb-2">Compensation Benefits Salary</label>
                                <input
                                    type="text"
                                    name="compensationBenefits.salary"
                                    id="compensationBenefits.salary"
                                    placeholder="Enter Compensation Benefits Salary"
                                    value={jobDetails.compensationBenefits.salary}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Compensation Benefits Location */}
                            <div className="flex flex-col">
                                <label htmlFor="compensationBenefits.location" className="text-sm font-semibold mb-2">Compensation Benefits Location</label>
                                <input
                                    type="text"
                                    name="compensationBenefits.location"
                                    id="compensationBenefits.location"
                                    placeholder="Enter Compensation Benefits Location"
                                    value={jobDetails.compensationBenefits.location}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Job Responsibilities */}
                            <div className="flex flex-col col-span-2">
                                <label htmlFor="jobResponsibilities" className="text-sm font-semibold mb-2">Job Responsibilities</label>
                                <textarea
                                    name="jobResponsibilities"
                                    id="jobResponsibilities"
                                    placeholder="Enter Job Responsibilities"
                                    value={jobDetails.jobResponsibilities}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    required
                                    rows="6"
                                />
                            </div>

                            {/* Additional Requirements */}
                            <div className="flex flex-col col-span-2 mb-4">
                                <label htmlFor="additionalRequirements" className="text-sm font-semibold mb-2">Additional Requirements</label>
                                <textarea
                                    name="additionalRequirements"
                                    id="additionalRequirements"
                                    placeholder="Enter Additional Requirements"
                                    value={jobDetails.additionalRequirements}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    required
                                    rows="6"
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
                                onClick={() => handleCloseModal()}
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

export default EmployeepostedJob;