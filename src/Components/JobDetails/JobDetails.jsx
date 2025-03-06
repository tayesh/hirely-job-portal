import { AiOutlineLike } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);
    return (
        <div className="p-6 px-[73px] bg-white shadow-lg rounded-lg">
            <div>
                <div className="flex items-center gap-8 mx-[112px] mb-8">
                    <a className="text-[18px] text-[#72737C] poppins">Job Details</a>
                    <a className="text-[18px] text-[#72737C] poppins">Company Details</a>
                    <a className="text-[18px] text-[#72737C] poppins">Opening</a>
                    <a className="text-[18px] text-[#72737C] poppins">Interview</a>
                    <a className="text-[18px] text-[#72737C] poppins">FAQ</a>
                </div>

                <div>
                    <h2 className="nunito text-[#0079C1] text-[36px]">{job.jobTitle}</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-[14px] text-[#72737C] poppins">{job.company}</p>
                        <div className="flex items-center gap-[44px]">
                            <button className="bg-[#00A264] w-[131px] px-3 h-[37px] rounded-[4px] epilogue text-[14px] text-white">Apply Now</button>
                            <div className="flex gap-2">
                                <button className="text-[#0079C1] h-[30px] w-[50px] text-[20px] btn border-[#0079C1] bg-white"><CiHeart /></button>
                                <button className="text-[#0079C1] h-[30px] w-[50px] text-[20px] btn border-[#0079C1] bg-white"><AiOutlineLike /></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[65px] mt-[44px] mb-8">
                        <a className="text-[14px] text-[#72737C] poppins">Monthly Salary</a>
                        <a className="text-[14px] text-[#72737C] poppins">Experience</a>
                        <a className="text-[14px] text-[#72737C] poppins">Duty Time</a>
                        <a className="text-[14px] text-[#72737C] poppins">Job Location</a>
                        <a className="text-[14px] text-[#72737C] poppins">Deadline</a>
                    </div>

                    <div className="flex items-center gap-12 mt-[24px] mb-8">
                        <a className="text-[14px] font-normal text-[#000000] poppins">{job.salary}</a>
                        <a className="text-[14px] font-normal text-[#000000] poppins">{job.experience}</a>
                        <a className="text-[14px] font-normal text-[#000000] poppins ml-6">{job.dutyTime}</a>
                        <a className="text-[14px] font-normal text-[#000000] poppins ml-4">{job.location}</a>
                        <a className="text-[14px] font-normal text-[#000000] poppins">{job.deadline}</a>
                    </div>
                </div>
            </div>
            <h2 className="text-[#23B33A] mt-[44px] text-[24px] nunito font-bold">Job Details</h2>
            <h2 className="text-[#0079C1] mt-[43px] text-[30px] nunito font-bold">Job Responsibilities:</h2>

            <section className="mt-[24px] mr-[205px]">
                <ul className="list-disc list-inside mt-2 text-gray-700">
                    {job.jobResponsibilities.map((responsibility, index) => (
                        <li key={index} className="text-[24px] font-normal nunito">{responsibility}</li>
                    ))}
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-[#0079C1] mt-[43px]  text-[30px] nunito font-bold mb-8">Education</h2>
                <p className="text-[24px] font-normal nunito">Minimum Qualification: {job.education.minimumQualification}</p>
                <p className="text-[24px] font-normal nunito">Preferred Qualification: {job.education.preferredQualification}</p>
            </section>

            <section className="mt-6">
                <h2 className="text-[#00A264] mt-[43px] nunito text-[30px] font-bold">Job Requirements:</h2>
                <h2 className=" text-[#0079C1] mt-[43px]  text-[30px] nunito font-bold mb-8">Qualifications</h2>
                <p className="font-normal text-black text-[24px] nunito" >{job.jobRequirements.qualifications}</p>
                <h2 className="text-[#0079C1] mt-[43px] text-[30px] nunito font-bold mb-8">Additional Requirements:</h2>
                <ul className="list-disc list-inside mt-8 text-black">
                    {job.jobRequirements.additionalRequirements.map((requirement, index) => (
                        <li key={index} className="text-[24px] nunito font-normal">{requirement}</li>
                    ))}
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-[#0079C1] mt-[43px] text-[30px] nunito font-bold mb-8">Compensation & Other Benefits:</h2>
                <div className="space-y-4">
                    <p className="text-[24px] nunito text-black font-normal">Salary: {job.compensationBenefits.salary}</p>
                    <p className="text-[24px] nunito text-black font-normal">Employment Status: {job.compensationBenefits.employmentStatus}</p>
                    <p className="text-[24px] nunito text-black font-normal">Job Location: {job.compensationBenefits.location}</p>
                </div>
            </section>

            <h2 className="text-[#0079C1] mt-[43px] text-[30px] nunito font-bold mb-8">Working Conditions:</h2>
        </div>
    );
};

export default JobDetails;
