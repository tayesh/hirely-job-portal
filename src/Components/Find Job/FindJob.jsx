import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FindJobCard from './FindJobCard';

const FindJob = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const location = useLocation();

    const [formData, setFormData] = useState({
        company: "",
        jobTitle: "",
        district: "",
        employmentStatus: "",
        experience: "",
        salary: "",
        negotiable: false,
        expireSoon: false,
        skill: ""
    });

    const skillsList = [
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
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:5000/jobs");
                const data = await response.json();
                setJobs(data);
                
                const queryParams = new URLSearchParams(location.search);
                const skillParam = queryParams.get('skill');
                
                if (skillParam) {
                    const filtered = data.filter(job => job.skill === decodeURIComponent(skillParam));
                    setFilteredJobs(filtered);
                    setFormData(prev => ({...prev, skill: decodeURIComponent(skillParam)}));
                } else {
                    setFilteredJobs(data);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, [location.search]);

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        const updatedData = {
            ...formData,
            [name]: type === "checkbox" ? checked : value
        };
        setFormData(updatedData);
    };

    const handleSearch = () => {
        const filtered = jobs.filter(job => {
            const matchesCompany = formData.company ? job.company.toLowerCase().includes(formData.company.toLowerCase()) : true;
            const matchesJobTitle = formData.jobTitle ? job.jobTitle.toLowerCase().includes(formData.jobTitle.toLowerCase()) : true;
            const matchesDistrict = formData.district ? 
                (job.location ? job.location.toLowerCase().includes(formData.district.toLowerCase()) : false) : 
                true;
            const jobEmploymentStatus = job.compensationBenefits?.employmentStatus || '';
            const matchesEmploymentStatus = formData.employmentStatus ? 
                jobEmploymentStatus.toLowerCase() === formData.employmentStatus.toLowerCase() : 
                true;
            const matchesExperience = formData.experience ? job.experience.toLowerCase() === formData.experience.toLowerCase() : true;
            const jobSalary = job.salary || '';
            const matchesSalary = formData.salary ? jobSalary.toLowerCase() === formData.salary.toLowerCase() : true;
            const jobSalaryString = job.compensationBenefits?.salary || '';
            const matchesNegotiable = formData.negotiable ? 
                jobSalaryString.toLowerCase().includes("negotiable") : 
                true;
            const deadlineDate = new Date(job.deadline);
            const currentDate = new Date();
            const daysUntilDeadline = Math.ceil((deadlineDate - currentDate) / (1000 * 60 * 60 * 24));
            const matchesExpireSoon = formData.expireSoon ? daysUntilDeadline <= 30 : true;
            const matchesSkill = formData.skill ? job.skill === formData.skill : true;
    
            return matchesCompany && matchesJobTitle && matchesDistrict && 
                   matchesEmploymentStatus && matchesExperience && 
                   matchesSalary && matchesNegotiable && matchesExpireSoon &&
                   matchesSkill;
        });
    
        setFilteredJobs(filtered);
    };

    const resetFilters = () => {
        setFormData({
            company: "",
            jobTitle: "",
            district: "",
            employmentStatus: "",
            experience: "",
            salary: "",
            negotiable: false,
            expireSoon: false,
            skill: ""
        });
        setFilteredJobs(jobs);
    };

    const sortJobs = (jobs, option) => {
        const extractSalary = (salaryString) => {
            if (!salaryString) return 0;
            if (salaryString.toLowerCase().includes("negotiable")) {
                return Infinity;
            }
            const matches = salaryString.match(/\d+/g);
            if (matches && matches.length > 0) {
                return parseInt(matches[0], 10);
            }
            return 0;
        };

        const sortedBySponsored = [...jobs].sort((a, b) => {
            if (a.sponsored === b.sponsored) return 0;
            return a.sponsored ? -1 : 1;
        });

        if (option === 'lowToHigh') {
            return sortedBySponsored.sort((a, b) => extractSalary(a.salary) - extractSalary(b.salary));
        } else if (option === 'highToLow') {
            return sortedBySponsored.sort((a, b) => extractSalary(b.salary) - extractSalary(a.salary));
        }

        return sortedBySponsored;
    };

    const sortedJobs = sortJobs(filteredJobs, sortOption);

    return (
        <div className='grid grid-cols-5 bg-gray-50 pb-5'>
            <div className='flex flex-col items-center bg-white pb-5 h-fit'>
                <div className='flex justify-between items-center my-4 w-[80%]'>
                    <p className='text-[14px]'>Quick Search</p>
                    <div className='flex items-center'>
                        <button onClick={resetFilters} className='text-[9px] w-[91px]'>CLEAR FILTER</button>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" fill="#E5F5FF" />
                            <path d="M7 21V23H13V21H7ZM7 9V11H17V9H7ZM17 25V23H25V21H17V19H15V25H17ZM11 13V15H7V17H11V19H13V13H11ZM25 17V15H15V17H25ZM19 13H21V11H25V9H21V7H19V13Z" fill="black" />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center w-full text-gray-400">
                    <select
                        name="company"
                        className="select select-bordered w-[80%]"
                        value={formData.company}
                        onChange={handleChange}
                    >
                        <option disabled value="">Select Company</option>
                        {[...new Set(jobs.map(job => job.company))].map((company, index) => (
                            <option key={index} value={company}>{company}</option>
                        ))}
                    </select>

                    <input
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title"
                        value={formData.jobTitle}
                        className="input input-bordered w-[80%]"
                        onChange={handleChange}
                    />

                    <select
                        name="district"
                        className="select select-bordered w-[80%]"
                        value={formData.district}
                        onChange={handleChange}
                    >
                        <option disabled value="">Select District</option>
                        {[...new Set(jobs
                            .map(job => job.location ? job.location.split(', ')[1] : null)
                            .filter(district => district !== null)
                        )].map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>

                    <select
                        name="skill"
                        className="select select-bordered w-[80%]"
                        value={formData.skill}
                        onChange={handleChange}
                    >
                        <option disabled value="">Select Skill</option>
                        {skillsList.map((skill, index) => (
                            <option key={index} value={skill}>{skill}</option>
                        ))}
                    </select>

                    <select
                        name="employmentStatus"
                        className="select select-bordered w-[80%]"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                    >
                        <option disabled value="">Employment Status</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                    </select>

                    <select
                        name="experience"
                        className="select select-bordered w-[80%]"
                        value={formData.experience}
                        onChange={handleChange}
                    >
                        <option disabled value="">Experience</option>
                        <option>Entry Level</option>
                        <option>1-2 Years</option>
                        <option>3-5 Years</option>
                        <option>5+ Years</option>
                    </select>

                    <select
                        name="salary"
                        className="select select-bordered w-[80%]"
                        value={formData.salary}
                        onChange={handleChange}
                    >
                        <option disabled value="">Salary</option>
                        <option>10000-20000 BDT</option>
                        <option>20000-30000 BDT</option>
                        <option>25000-35000 BDT</option>
                        <option>30000-40000 BDT</option>
                    </select>

                    <div className='flex flex-col gap-5 mt-5 mb-10 items-center'>
                        <label className="label cursor-pointer">
                            <input
                                type="checkbox"
                                name="negotiable"
                                className="checkbox border-[3px] border-black rounded"
                                checked={formData.negotiable}
                                onChange={handleChange}
                            />
                            <span className="label-text">Negotiable Salary</span>
                        </label>
                        <label className="label cursor-pointer">
                            <input
                                type="checkbox"
                                name="expireSoon"
                                className="checkbox border-[3px] border-black rounded"
                                checked={formData.expireSoon}
                                onChange={handleChange}
                            />
                            <span className="label-text">Expire Soon (30 days)</span>
                        </label>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-5 w-full'>
                    <hr className='w-[80%]' />
                    <button onClick={handleSearch} className='flex justify-center items-center gap-2 p-2 rounded bg-[#0079C1] w-[80%] shadow-lg'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z" fill="white" />
                        </svg>
                        <p className='text-white'>Search</p>
                    </button>
                </div>
            </div>

            <div className='col-span-4 px-[4px]'>
                <div className='flex justify-between px-8 mt-[32px] rounded shadow-md bg-white py-8'>
                    <h2 className='text-[20px]'>
                        {filteredJobs.length > 0 ? 
                            `We Found ${filteredJobs.length} jobs` : 
                            'No jobs found matching your criteria'}
                    </h2>
                    <div className='flex gap-4 items-center'>
                        <p>Sort by:</p>
                        <select
                            className="select select-bordered w-[108px]"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option disabled value="">Select</option>
                            <option value="lowToHigh">Low to High(Salary)</option>
                            <option value="highToLow">High to Low(Salary)</option>
                        </select>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 mx-1 mt-4'>
                    {sortedJobs.length > 0 ? (
                        sortedJobs.map((item) => (
                            <FindJobCard key={item._id} object={item} />
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-10">
                            <p className="text-lg text-gray-500">No jobs found for the selected criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FindJob;