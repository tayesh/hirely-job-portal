import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { UserContext } from '../AuthContext/UserContext';

const AdminPostJob = () => {
    const { user } = useContext(UserContext);
    const [jobDetails, setJobDetails] = useState({
        jobTitle: '',
        company: '',
        salary: '',
        experience: '',
        dutyTime: '',
        location: '',
        deadline: '',
        vacancy: '',
        jobResponsibilities: '',
        minimumQualification: '',
        preferredQualification: '',
        qualifications: '',
        additionalRequirements: '',
        compensationBenefits: {
            salary: '',
            employmentStatus: '',
            location: ''
        },
        email: user.email
    });

    const [adminEmail, setAdminEmail] = useState(user.email);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setJobDetails(prevDetails => ({
                ...prevDetails,
                [parent]: {
                    ...prevDetails[parent],
                    [child]: value
                }
            }));
        } else {
            setJobDetails(prevDetails => ({
                ...prevDetails,
                [name]: value
            }));
        }
    };

    const handleEmailChange = (e) => {
        setAdminEmail(e.target.value);
    };

    const handleJobPost = async (e) => {
        e.preventDefault();
        const jobData = { ...jobDetails, adminEmail };

        const response = await fetch('https://hirely-job-portal-server.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        });

        if (response.ok) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your job has been posted",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            alert('Failed to post the job');
        }
    };

    return (
        <div className="max-w-6xl my-12 mx-12 p-6 bg-white shadow-xl rounded-lg">
            <h2 className="text-4xl font-semibold text-center mb-6">Post a New Job</h2>
            <form onSubmit={handleJobPost} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label htmlFor="jobTitle" className="text-sm font-semibold mb-2">Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        placeholder='Enter Job Title Here'
                        value={jobDetails.jobTitle}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="company" className="text-sm font-semibold mb-2">Company</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder='Enter Company Name Here'
                        value={jobDetails.company}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="salary" className="text-sm font-semibold mb-2">Salary</label>
                    <input
                        type="text"
                        name="salary"
                        id="salary"
                        placeholder='Enter Salary'
                        value={jobDetails.salary}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="experience" className="text-sm font-semibold mb-2">Experience</label>
                    <input
                        type="text"
                        name="experience"
                        id="experience"
                        placeholder='Enter The Experience Company Needs'
                        value={jobDetails.experience}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="dutyTime" className="text-sm font-semibold mb-2">Duty Time</label>
                    <input
                        type="text"
                        name="dutyTime"
                        id="dutyTime"
                        placeholder='Enter Duty Time'
                        value={jobDetails.dutyTime}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="location" className="text-sm font-semibold mb-2">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder='Enter Location'
                        value={jobDetails.location}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="deadline" className="text-sm font-semibold mb-2">Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        placeholder='Enter Deadline'
                        id="deadline"
                        value={jobDetails.deadline}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="vacancy" className="text-sm font-semibold mb-2">Vacancy</label>
                    <input
                        type="number"
                        name="vacancy"
                        id="vacancy"
                        placeholder='Enter Vacancy for this job'
                        value={jobDetails.vacancy}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="agencyEmail" className="text-sm font-semibold mb-2">Agency Email</label>
                    <input
                        type="email"
                        name="agencyEmail"
                        id="agencyEmail"
                        value={adminEmail}
                        onChange={handleEmailChange}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                        readOnly
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="minimumQualification" className="text-sm font-semibold mb-2">Minimum Qualification</label>
                    <input
                        type="text"
                        name="minimumQualification"
                        id="minimumQualification"
                        placeholder='Enter Educational Minimum Qualification'
                        value={jobDetails.minimumQualification}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="preferredQualification" className="text-sm font-semibold mb-2">Preferred Qualification</label>
                    <input
                        type="text"
                        name="preferredQualification"
                        id="preferredQualification"
                        placeholder='Enter Educational Preferred Qualification'
                        value={jobDetails.preferredQualification}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="qualifications" className="text-sm font-semibold mb-2">Qualifications</label>
                    <input
                        type="text"
                        name="qualifications"
                        id="qualifications"
                        placeholder='Enter Qualification'
                        value={jobDetails.qualifications}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

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

                <button type="submit" className="w-full bg-blue-500 text-white text-[20px] font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300 col-span-2">
                    Post Job
                </button>
            </form>
        </div>
    );
};

export default AdminPostJob;