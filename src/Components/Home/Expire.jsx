import { MdOutlineWatchLater } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const Expire = () => {
    const jobsData = useLoaderData();

    const expiringJobs = jobsData.filter(job => job.status === "expiring");

    const calculateDaysLeft = (deadline) => {
        const dateParts = deadline.split(" ");
        const month = dateParts[0];
        const day = dateParts[1].replace(/\D/g, "");
        const year = "20" + dateParts[2].replace(",", "");
        const validDateString = `${month} ${day} ${year}`;
        const deadlineDate = new Date(validDateString);
        const today = new Date();
        const timeDifference = deadlineDate - today;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        return daysLeft > 0 ? daysLeft : 0;
    };

    return (
        <div className="mt-4 mx-8 mb-[82px]">
            <div>
                <div className="flex justify-between mb-6 nunito">
                    <p className="text-[28px]">Expire Soon Jobs <span className="text-[#DB1616]"> ({expiringJobs.length}) </span></p>
                    <a className="btn px-4 text-[15px] roboto font-normal border-blue-300 bg-white text-[#0079C1]">Explore All</a>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {expiringJobs.map((job, index) => {
                    const daysLeft = calculateDaysLeft(job.deadline);
                    return (
                        <div key={index} className="card card-side bg-base-100 border-2 border-gray-300 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title nunito font-normal text-[#0079C1] text-[18px]">{job.jobTitle}</h2>
                                <p className="mt-5 text-[16px] poppins font-normal text-[#72737C]">Vacancy: {job.vacancy} People</p>
                                <p className="text-[16px] epilogue font-normal text-[#424447]">Salary : {job.salary}</p>
                                <div className="divider"></div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-1">
                                        <p className="bg-[#E9F5FF] text-blue-700 p-1 rounded-sm text-4xl"><MdOutlineWatchLater /></p>
                                        <div>
                                            <p className="text-[14px] epilogue font-normal text-[#212529]">Deadline: {job.deadline}</p>
                                            <p className="text-[#DB1616] font-normal text-[14px] text-center">({daysLeft} Days Left)</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/jobdetails/${job._id}`}>
                                            <button className="btn text-white h-[40px] text-[14px] font-normal bg-[#1976D2]">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Expire;