import React, { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../AuthContext/UserContext';

const AdminPostJob = () => {
    const { user } = useContext(UserContext);
    const location = useLocation();
    const [sponsored, setSponsored] = useState("false");

    const skillsOptions = [
        "Sales",
        "Education & Training",
        "Operations Management",
        "Legal Services",
        "Medical Services",
        "Accounting & Finance",
        "IT & Software Development",
        "Engineering",
        "Office Management",
        "Transportation & Logistics",
        "Security & Protection",
        "Administrative & Office Support"
    ];

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const sponsoredParam = queryParams.get('sponsored');
        if (sponsoredParam === "true") {
            setSponsored("true");
        }
    }, [location]);

    const [jobDetails, setJobDetails] = useState({
        jobTitle: '',
        company: '',
        salary: '',
        experience: '',
        dutyTime: '',
        location: '',
        deadline: '',
        vacancy: '',
        skill: '',
        jobResponsibilities: [],
        education: {
            minimumQualification: '',
            preferredQualification: '',
        },
        jobRequirements: {
            qualifications: '',
            additionalRequirements: [],
        },
        compensationBenefits: {
            salary: '',
            employmentStatus: '',
            location: '',
        },
        email: user.email,
        sponsored: sponsored,
    });

    const [agencyEmail, setAgencyEmail] = useState(user.email);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setJobDetails((prevDetails) => ({
                ...prevDetails,
                [parent]: {
                    ...prevDetails[parent],
                    [child]: value,
                },
            }));
        } else {
            setJobDetails((prevDetails) => ({
                ...prevDetails,
                [name]: value,
            }));
        }
    };

    const handleSkillsChange = (e) => {
        const selectedSkill = e.target.value;
        setJobDetails(prevDetails => ({
            ...prevDetails,
            skill: selectedSkill,  // Store only the selected skill in the state
        }));
    };

    const handleMultiLineInput = (e) => {
        const { name, value } = e.target;
        const lines = value.split('\n').map((line) => line.trim());

        if (name === 'jobResponsibilities') {
            setJobDetails((prevDetails) => ({
                ...prevDetails,
                [name]: lines,
            }));
        } else if (name === 'additionalRequirements') {
            setJobDetails((prevDetails) => ({
                ...prevDetails,
                jobRequirements: {
                    ...prevDetails.jobRequirements,
                    additionalRequirements: lines,
                },
            }));
        }
    };

    const handleJobPost = async (e) => {
        e.preventDefault();
        const jobData = { 
            ...jobDetails, 
            agencyEmail, 
            sponsored,
            skill: jobDetails.skill
        };

        try {
            const response = await fetch('http://localhost:5000/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jobData),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: data.message,
                    text: data.notificationMessage,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setJobDetails({
                    jobTitle: '',
                    company: '',
                    salary: '',
                    experience: '',
                    dutyTime: '',
                    location: '',
                    deadline: '',
                    vacancy: '',
                    skill: '',
                    jobResponsibilities: [],
                    education: {
                        minimumQualification: '',
                        preferredQualification: '',
                    },
                    jobRequirements: {
                        qualifications: '',
                        additionalRequirements: [],
                    },
                    compensationBenefits: {
                        salary: '',
                        employmentStatus: '',
                        location: '',
                    },
                    email: user.email,
                    sponsored: "false",
                });
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Error',
                    text: data.message || 'Failed to post the job',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error('Error posting job:', error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error',
                text: 'Network error. Please try again.',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div className="max-w-6xl my-12 mx-auto p-6 bg-white shadow-xl rounded-lg">
            <h2 className="text-4xl font-semibold text-center mb-6">Post a New Job</h2>
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

                <div className="flex flex-col col-span-2">
    <label htmlFor="skill" className="text-sm font-semibold mb-2">Required Skills</label>
    <select
        name="skill"
        id="skill"
        value={jobDetails.skill}
        onChange={handleSkillsChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-auto"
        required
    >
        {skillsOptions.map((skill, index) => (
            <option key={index} value={skill}>{skill}</option>
        ))}
    </select>
    <small className="text-gray-500">Select a single skill</small>
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

                {/* Agency Email */}
                <div className="flex flex-col">
                    <label htmlFor="agencyEmail" className="text-sm font-semibold mb-2">Agency Email</label>
                    <input
                        type="email"
                        name="agencyEmail"
                        id="agencyEmail"
                        value={agencyEmail}
                        onChange={(e) => setAgencyEmail(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                        readOnly
                        required
                    />
                </div>

                {/* Minimum Qualification */}
                <div className="flex flex-col">
                    <label htmlFor="minimumQualification" className="text-sm font-semibold mb-2">Minimum Qualification</label>
                    <input
                        type="text"
                        name="education.minimumQualification"
                        id="minimumQualification"
                        placeholder="Enter Educational Minimum Qualification"
                        value={jobDetails.education.minimumQualification}
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
                        name="education.preferredQualification"
                        id="preferredQualification"
                        placeholder="Enter Educational Preferred Qualification"
                        value={jobDetails.education.preferredQualification}
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
                        name="jobRequirements.qualifications"
                        id="qualifications"
                        placeholder="Enter Qualification"
                        value={jobDetails.jobRequirements.qualifications}
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
                        placeholder="Enter Job Responsibilities (one per line)"
                        value={jobDetails.jobResponsibilities.join('\n')}
                        onChange={handleMultiLineInput}
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
                        placeholder="Enter Additional Requirements (one per line)"
                        value={jobDetails.jobRequirements.additionalRequirements.join('\n')}
                        onChange={handleMultiLineInput}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        required
                        rows="6"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-blue-500 text-white text-[20px] font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300 col-span-2">
                    Post Job
                </button>
            </form>
        </div>
    );
};

export default AdminPostJob;