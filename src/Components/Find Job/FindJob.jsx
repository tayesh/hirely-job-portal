import React, { useEffect, useState } from 'react';
import { FiGrid } from "react-icons/fi";
import { CiGrid2H } from "react-icons/ci";
import FindJobCard from './FindJobCard';
import SearchJobsByBenefits from './SearchJobsByBenefits'; 

const FindJob = () => {
    const [jobs, setJobs] = useState([]);
    const [isBenefitsModalOpen, setIsBenefitsModalOpen] = useState(false); // State to control modal visibility
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            });
    }, []);

    const [formData, setFormData] = useState({
        Skills: "",
        JobTitle: "",
        Country: "",
        Industry: "",
        Experience: "",
        Salary: "",
        Currency: "",
        Negotiable: false,
        ExpireSoon: false
    });

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        const updatedData = {
            ...formData,
            [name]: type === "checkbox" ? checked : value
        };
        setFormData(updatedData);
    };

    const handleSearch = () => {
        console.log(formData);
    };

    const resetFilters = () => {
        setFormData({
            Skills: "",
            JobTitle: "",
            Country: "",
            Industry: "",
            Experience: "",
            Salary: "",
            Currency: "",
            Negotiable: false,
            ExpireSoon: false
        });
    };

    // Handle search by benefits
    const handleBenefitsSearch = (selectedBenefits) => {
        console.log("Selected Benefits:", selectedBenefits);
        // Add logic to filter jobs based on selected benefits
        const filteredJobs = jobs.filter((job) =>
            selectedBenefits.every((benefit) => job.benefits.includes(benefit))
        );
        setJobs(filteredJobs); // Update the jobs state with filtered results
    };

    return (
        <div className='grid grid-cols-5 bg-gray-50 pb-5'>
            {/* Quick Search Sidebar */}
            <div className='flex flex-col items-center bg-white pb-5 h-fit'>
                <div className='flex justify-between items-center my-4 w-[80%]'>
                    <p className='text-[14px]'>Quick Search</p>
                    <div className='flex items-center'>
                        <p onClick={resetFilters} className='text-[9px] w-[91px]'>CLEAR FILTER</p>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" fill="#E5F5FF" />
                            <path d="M7 21V23H13V21H7ZM7 9V11H17V9H7ZM17 25V23H25V21H17V19H15V25H17ZM11 13V15H7V17H11V19H13V13H11ZM25 17V15H15V17H25ZM19 13H21V11H25V9H21V7H19V13Z" fill="black" />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center w-full text-gray-400">
                    {/* Select Skills */}
                    <select
                        name="Skills"
                        className="select select-bordered w-[80%]"
                        value={formData.Skills}
                        onChange={handleChange}
                    >
                        <option disabled value="">
                            Select Skills
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>

                    {/* Job Title */}
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Type here"
                        value={formData.JobTitle}
                        className="input input-bordered w-[80%]"
                        onChange={handleChange}
                    />

                    {/* Select Country */}
                    <select
                        name="Country"
                        className="select select-bordered w-[80%]"
                        value={formData.Country}
                        onChange={handleChange}
                    >
                        <option disabled value="">
                            Select Country
                        </option>
                        <option>USA</option>
                        <option>UK</option>
                    </select>

                    {/* Industry */}
                    <select
                        name="Industry"
                        className="select select-bordered w-[80%]"
                        value={formData.Industry}
                        onChange={handleChange}
                    >
                        <option disabled value="">
                            Industry
                        </option>
                        <option>Tech</option>
                        <option>Finance</option>
                    </select>

                    {/* Experience */}
                    <select
                        name="Experience"
                        className="select select-bordered w-[80%]"
                        value={formData.Experience}
                        onChange={handleChange}
                    >
                        <option disabled value="">
                            Experience
                        </option>
                        <option>1-3 years</option>
                        <option>4-6 years</option>
                    </select>

                    {/* Salary & Currency */}
                    <div className="flex w-[80%] justify-between gap-2">
                        <select
                            name="Salary"
                            className="select select-bordered"
                            value={formData.Salary}
                            onChange={handleChange}
                        >
                            <option disabled value="">
                                Salary
                            </option>
                            <option>50,000</option>
                            <option>100,000</option>
                        </select>

                        <select
                            name="Currency"
                            className="select select-bordered"
                            value={formData.Currency}
                            onChange={handleChange}
                        >
                            <option disabled value="">
                                Currency
                            </option>
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                    </div>

                    {/* Checkboxes */}
                    <div className='flex flex-col gap-5 mt-5 mb-10 items-center'>
                        <label className="label cursor-pointer">
                            <input
                                type="checkbox"
                                name="Negotiable"
                                className="checkbox border-[3px] border-black rounded"
                                checked={formData.Negotiable}
                                onChange={handleChange}
                            />
                            <span className="label-text">Negotiable</span>
                        </label>
                        <label className="label cursor-pointer">
                            <input
                                type="checkbox"
                                name="ExpireSoon"
                                className="checkbox border-[3px] border-black rounded"
                                checked={formData.ExpireSoon}
                                onChange={handleChange}
                            />
                            <span className="label-text">Expire Soon</span>
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

                    {/* Button to open the modal */}
                    <button
                        onClick={() => setIsBenefitsModalOpen(true)}
                        className='flex justify-center items-center gap-2 p-2 rounded bg-[#E5F5FF] w-[80%] shadow-lg'
                    >
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7885 17.4008C11.1322 17.4138 10.7039 17.2552 10.2687 17.1262C9.45938 16.8921 8.64869 16.6614 7.84208 16.4198C7.63655 16.3512 7.41921 16.325 7.20326 16.3429C6.98731 16.3609 6.77726 16.4226 6.58587 16.5242C6.33738 16.655 6.08432 16.777 5.82666 16.89C5.68938 16.9511 5.66946 17.0184 5.73124 17.1536C5.8445 17.4014 5.95708 17.6513 5.88569 17.9423C5.8564 18.0882 5.79202 18.2246 5.69812 18.3399C5.60423 18.4552 5.48366 18.5459 5.34684 18.6041C4.84435 18.821 4.33912 19.0325 3.82908 19.2315C3.3012 19.4375 2.8152 19.2136 2.58524 18.6645C1.95095 17.1497 1.31872 15.6338 0.688556 14.1168C0.492231 13.6445 0.29384 13.1729 0.0995739 12.6999C-0.141371 12.1144 0.0604597 11.6256 0.645318 11.3792C1.09701 11.1888 1.54938 11.0007 2.00244 10.8149C2.58318 10.576 3.07468 10.7826 3.3218 11.3641C3.33781 11.3965 3.35156 11.43 3.36298 11.4643C3.40416 11.6332 3.48585 11.6489 3.63755 11.5735C4.49219 11.1561 5.35712 10.7586 6.20832 10.3344C7.5064 9.68709 8.76808 9.70971 9.97285 10.5403C10.3737 10.8149 10.8206 10.922 11.2695 11.0456C11.8805 11.2137 12.4935 11.3737 13.1065 11.5343C13.5431 11.6482 13.9014 11.8776 14.1362 12.2682C14.2117 12.3951 14.2845 12.4054 14.4169 12.3642C15.7358 11.9752 17.0561 11.5909 18.3778 11.211C18.8364 11.0798 19.3134 11.0249 19.7898 11.0483C21.0343 11.1059 21.6906 12.1274 21.2135 13.2786C20.9849 13.8312 20.6005 14.2396 20.039 14.4545C17.8012 15.3181 15.5619 16.1782 13.3214 17.0349C12.7674 17.2504 12.1928 17.3856 11.7885 17.4008ZM7.93754 10.4676C7.56408 10.4586 7.17555 10.565 6.80211 10.7236C5.78754 11.1561 4.81139 11.6757 3.81055 12.1316C3.70002 12.1816 3.68493 12.2386 3.73161 12.3498C4.28352 13.6651 4.83268 14.9817 5.3791 16.2997C5.43264 16.428 5.49029 16.4177 5.58982 16.3683C5.84038 16.2413 6.09505 16.1232 6.34492 15.9969C6.84499 15.7412 7.42549 15.6919 7.96154 15.8596C8.94246 16.1466 9.92615 16.426 10.9064 16.7156C11.2383 16.8169 11.5878 16.8463 11.932 16.8022C12.3038 16.7532 12.6688 16.6611 13.0193 16.5276C15.2992 15.6558 17.5781 14.781 19.8557 13.9032C20.3719 13.7029 20.6616 13.2855 20.7694 12.7493C20.873 12.2338 20.6177 11.8364 20.1111 11.6942C19.6601 11.5679 19.2063 11.6106 18.7642 11.7238C17.3412 12.0889 15.9429 12.5393 14.5295 12.9395C14.3922 12.9786 14.3977 13.0589 14.3922 13.1632C14.3305 14.1998 13.4229 14.9439 12.4455 14.7064C11.1659 14.3948 9.89869 14.033 8.62669 13.6891C8.42077 13.6342 8.33908 13.4962 8.394 13.3198C8.45231 13.1303 8.59585 13.0932 8.77223 13.1338C8.81408 13.1434 8.856 13.155 8.89785 13.166C10.0731 13.4797 11.2489 13.7914 12.4235 14.1092C12.6445 14.1799 12.8821 14.1799 13.1031 14.1092C13.313 14.0382 13.4947 13.9018 13.6216 13.7202C13.7486 13.5385 13.8142 13.321 13.8088 13.0994C13.8031 12.8776 13.7258 12.6634 13.5885 12.4889C13.4512 12.3146 13.2612 12.1892 13.0468 12.1316C12.2981 11.9219 11.5471 11.7201 10.7938 11.5261C10.4156 11.4396 10.0555 11.2874 9.72985 11.0765C9.20262 10.7188 8.63154 10.4614 7.93754 10.4689V10.4676ZM2.41362 11.3043C2.37625 11.3098 2.33947 11.3188 2.30378 11.3312C1.80405 11.5371 1.30293 11.7389 0.807308 11.9537C0.587646 12.0485 0.532729 12.2166 0.634324 12.4569C1.46448 14.4526 2.29578 16.4475 3.12822 18.4414C3.24354 18.716 3.4028 18.7785 3.6815 18.6638C4.12152 18.4839 4.55947 18.2993 4.99811 18.1146C5.32418 17.9774 5.38185 17.8401 5.24387 17.5058C4.81278 16.4679 4.38098 15.4302 3.94852 14.3927C3.56365 13.4687 3.17923 12.5443 2.79528 11.6195C2.72526 11.454 2.63809 11.3119 2.41362 11.3057V11.3043Z" fill="#0079C1" />
                            <path d="M14.2241 0.000687124C14.5453 0.154452 14.7341 0.418048 14.8803 0.735188C15.113 1.23905 15.3752 1.72986 15.6134 2.23166C15.6418 2.30259 15.6899 2.36389 15.7522 2.4083C15.8143 2.45271 15.8879 2.47836 15.9642 2.48221C16.5765 2.55978 17.1875 2.65314 17.7991 2.73894C18.1519 2.78837 18.4279 2.94489 18.5432 3.29978C18.6585 3.65468 18.5473 3.94299 18.2865 4.19218C17.8492 4.61435 17.425 5.05024 16.9774 5.46142C16.8092 5.61588 16.7715 5.76347 16.8126 5.97695C16.9211 6.53229 17.0069 7.09243 17.1078 7.64915C17.1765 8.02462 17.1635 8.37746 16.8236 8.62462C16.4838 8.87169 16.1551 8.80238 15.8118 8.61223C15.2895 8.32254 14.7519 8.06308 14.2288 7.77546C14.1653 7.73446 14.0913 7.71269 14.0157 7.71269C13.9401 7.71269 13.8661 7.73446 13.8025 7.77546C13.2602 8.06992 12.7091 8.34862 12.1661 8.64177C11.8379 8.81954 11.5167 8.84769 11.205 8.61839C10.8934 8.38915 10.846 8.08708 10.9098 7.73492C11.0218 7.11714 11.1206 6.49933 11.238 5.88152C11.2532 5.81164 11.2485 5.73887 11.2242 5.67159C11.1999 5.6043 11.1571 5.54524 11.1007 5.50123C10.6614 5.08112 10.2351 4.64728 9.78754 4.2361C9.50054 3.97182 9.37562 3.66498 9.48823 3.29566C9.60077 2.92635 9.90008 2.78082 10.2632 2.7314C10.8645 2.64972 11.4645 2.5543 12.0672 2.47948C12.1483 2.47351 12.2261 2.44448 12.2912 2.39583C12.3564 2.34719 12.4064 2.28095 12.4352 2.20489C12.6727 1.7031 12.9348 1.21228 13.1628 0.705676C13.309 0.380297 13.506 0.12768 13.8492 0L14.2241 0.000687124ZM11.5578 7.91546C11.5578 8.13239 11.6677 8.15023 11.853 8.05277C12.4262 7.74938 13.0035 7.45488 13.5753 7.14872C13.7139 7.06895 13.8714 7.02789 14.0313 7.02982C14.1912 7.03176 14.3476 7.07662 14.4842 7.15971C15.008 7.44528 15.5386 7.71985 16.0692 7.99238C16.1729 8.04592 16.2834 8.16677 16.4063 8.083C16.5435 7.98892 16.4625 7.83246 16.4434 7.70954C16.3472 7.09999 16.2374 6.49178 16.1338 5.8829C16.1055 5.74122 16.1149 5.59458 16.1612 5.45771C16.2075 5.32083 16.2889 5.19855 16.3974 5.1031C16.858 4.66034 17.3131 4.21071 17.7702 3.76245C17.8389 3.69381 17.9535 3.63478 17.9035 3.50985C17.8533 3.38491 17.738 3.40755 17.6371 3.39245C17.0193 3.30183 16.3953 3.20436 15.7734 3.11786C15.6141 3.10251 15.462 3.04404 15.3334 2.94873C15.2048 2.85343 15.1047 2.7249 15.0437 2.57695C14.7794 2.01886 14.5007 1.46765 14.2199 0.916423C14.1725 0.821008 14.1513 0.676845 14.0037 0.688515C13.8856 0.698125 13.8575 0.821685 13.8128 0.9123C13.5342 1.47519 13.2571 2.03853 12.9815 2.60234C12.9223 2.74018 12.8275 2.85984 12.707 2.94908C12.5864 3.03833 12.4442 3.09397 12.2952 3.11032C11.6732 3.19475 11.0526 3.29292 10.4321 3.38491C10.325 3.40138 10.1877 3.37186 10.1383 3.50641C10.0888 3.64095 10.2131 3.70892 10.29 3.78099C10.7307 4.21392 11.1742 4.64454 11.6203 5.07288C11.7395 5.17945 11.8278 5.31607 11.8762 5.46846C11.9245 5.62086 11.9309 5.78344 11.8949 5.93919C11.7755 6.59407 11.6725 7.24483 11.5578 7.91546Z" fill="#0079C1" />
                        </svg>
                        <p className='text-[#0079C1]'>Search By Benefits</p>
                    </button>
                </div>
            </div>

            {/* Job Listings */}
            <div className='col-span-4 px-[32px]'>
                <div className='flex justify-between px-4 mt-[32px] rounded shadow-md bg-white py-8'>
                    <h2 className='text-[20px]'>We Found <span className='text-[#0275D8]'>(2170)</span> jobs</h2>
                    <div className='flex gap-4 items-center'>
                        <p>Sort by:</p>
                        <select className="select select-bordered w-[108px]">
                            <option disabled selected>Select</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <FiGrid className='text-[30px] text-[#0275D8] border-[#0275D8] border-2 rounded' />
                        <CiGrid2H className='text-[30px] border-black border-2 rounded' />
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4 mt-4'>
                    {jobs.map((item) => (
                        <FindJobCard key={item.id} object={item} />
                    ))}
                </div>
            </div>

            {/* Modal for Search By Benefits */}
            <SearchJobsByBenefits
                isOpen={isBenefitsModalOpen}
                onClose={() => setIsBenefitsModalOpen(false)}
                onSearch={handleBenefitsSearch}
            />
        </div>
    );
};

export default FindJob;