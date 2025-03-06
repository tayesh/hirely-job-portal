import { AiOutlineLike } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const JobDetails = () => {
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
                <h2 className="nunito text-[#0079C1] text-[36px]">অডিটর ও মনিটরিং</h2>
                <div className="flex justify-between items-center">
                    <p className="text-[14px] text-[#72737C] poppins">Gram Bangla Shonchoy O Reen Daan Shomobay Shomiti Ltd. (গ্রাম বাংলা সঞ্চয় ও ঋণ দান সমবায় সমিতি লিঃ)</p>
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
                    <a className="text-[14px] font-normal text-[#000000] poppins">25000-35000 Taka</a>
                    <a className="text-[14px] font-normal text-[#000000] poppins">1-2 Years</a>
                    <a className="text-[14px] font-normal text-[#000000] poppins ml-6">8 Hours</a>
                    <a className="text-[14px] font-normal text-[#000000] poppins ml-4">Chapapur, Bogura</a>
                    <a className="text-[14px] font-normal text-[#000000] poppins">Mar, 2025</a>
                </div>

            </div>
            </div>
            <h2 className="text-[#23B33A] mt-[44px] text-[24px] nunito font-bold">Job Details</h2>
            <h2 className="text-[#0079C1] mt-[43px] nunito text-[30px] nunito font-bold">Job Responsibilities:</h2>

            <section className="mt-[24px] mr-[205px]">
                <ul className="list-disc list-inside mt-2 text-gray-700">
                    <p className="text-[24px] font-normal nunito">Assist in various departments, including agriculture financing, supply chain management, and data analysis, to gain hands-on industry experience.</p>
                    <li className="text-[24px] font-normal nunito">Conduct research and market analysis to support business strategies and identify opportunities for agricultural innovation.</li>
                    <li className="text-[24px] font-normal nunito">Work closely with farmers, suppliers, and stakeholders to understand challenges and develop impactful solutions. </li>
                    <li className="text-[24px] font-normal nunito">Participate in training sessions, workshops, and mentorship programs to enhance professional and technical skills.</li>
                    <li className="text-[24px] font-normal nunito">Support cross-functional teams in project execution, ensuring smooth operations and contributing to business growth.</li>
                    <li className="text-[24px] font-normal nunito">Analyze data from remote sensing, machine learning models, and market trends to provide insights for improving farmer profitability.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-[#0079C1] mt-[43px]  text-[30px] nunito font-bold mb-8">Education</h2>
                <p className="text-[24px] font-normal nunito">Minimum Qualification: Bachelor Degree</p>
                <p className="text-[24px] font-normal nunito">Preferred Qualification: Undefined Degree</p>
            </section>

            {/* Job Requirements */}
            <section className="mt-6">
                <h2 className="text-[#00A264] mt-[43px] nunito text-[30px] font-bold">Job Requirements:</h2>
                <h2 className=" text-[#0079C1] mt-[43px]  text-[30px] nunito font-bold mb-8">Qualifications</h2>
                <p className="font-normal text-black text-[24px] nunito" >Fresh graduates from any reputed university in Bangladesh or final-year students seeking academic internships</p>
            </section>

            {/* Additional Requirements */}
            <section className="mt-6">

                <h2 className="text-[#0079C1] mt-[43px]  text-[30px] nunito font-bold mb-8">Additional Requirements:</h2>
                <ul className="list-disc list-inside mt-8 text-black">
                    <li className="text-[24px] nunito font-normal">Skills: Strong communication, problem-solving, and analytical abilities</li>
                    <li className="text-[24px] nunito font-normal">Mindset: Adaptable, curious, and driven to excel in a dynamic setting</li>
                    <li className="text-[24px] nunito font-normal">Passion: Eager to learn, grow, and make a meaningful impact in the agricultura industry</li>
                </ul>
            </section>

            {/* Compensation & Benefits */}
            <section className="mt-6">
                <h2 className="text-[#0079C1] mt-[43px]  text-[30px] nunito font-bold mb-8">Compensation & Other Benefits: </h2>
                <div className="space-y-4">
                    <p className="text-[24px] nunito text-black font-normal">Salary: 15,000</p>
                    <p className="text-[24px] nunito text-black font-normal">Employment Status: <br />Full-time</p>
                    <p className="text-[24px] nunito text-black font-normal">Job Location: <br />8E, Road - 81, Gulshan-2, Dhaka-1212, Bangladesh <br /> Show less v </p>
                </div>
            </section>

            <h2 className="text-[#0079C1] mt-[43px]  text-[30px] nunito font-bold mb-8">Working Conditions:</h2>

        </div>
    );
};

export default JobDetails;
