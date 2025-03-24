import { MdOutlineWatchLater } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Expire = () => {
    const jobsData = useLoaderData();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const calculateDaysLeft = (deadline) => {
        // Check if deadline is undefined or not in the expected format
        if (!deadline || typeof deadline !== "string" || deadline.split(" ").length < 3) {
            return Infinity; // Return a large number to exclude invalid deadlines
        }

        const dateParts = deadline.split(" ");
        const month = dateParts[0];
        const day = dateParts[1].replace(/\D/g, ""); // Remove any non-digit characters (e.g., "st", "nd", "rd", "th")
        const year = "20" + dateParts[2].replace(",", "");
        const validDateString = `${month} ${day} ${year}`;
        const deadlineDate = new Date(validDateString);
        const today = new Date();
        const timeDifference = deadlineDate - today;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        return daysLeft; // Return the exact days left (can be positive, zero, or negative)
    };

    // Filter jobs that are expiring within the next 30 days and have not yet passed
    const expiringJobs = jobsData.filter(job => {
        const daysLeft = calculateDaysLeft(job.deadline);
        return daysLeft > 0 && daysLeft <= 30; // Only show jobs expiring in 30 days or less and not yet passed
    });

    return (
        <div className="mt-4 mx-8 mb-[82px]">
            <div>
                <div className="flex justify-between mb-6 nunito">
                    <p className="text-[28px]">Expire Soon Jobs <span className="text-[#DB1616]"> ({expiringJobs.length}) </span></p>
                    <a className="btn px-4 text-[15px] roboto font-normal border-blue-300 bg-white text-[#0079C1]">Explore All</a>
                </div>
            </div>
            {/* Swiper Container */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {/* Map through expiringJobs and render SwiperSlide for each job */}
                {expiringJobs.map((job, index) => {
                    const daysLeft = calculateDaysLeft(job.deadline);
                    return (
                        <SwiperSlide key={index}>
                            <div className="card card-side bg-base-100 border-2 border-gray-300 shadow-xl">
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
                                            <Link onClick={scrollToTop} to={`/jobdetails/${job._id}`}>
                                                <button className="btn text-white h-[40px] text-[14px] font-normal bg-[#1976D2]">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Expire;