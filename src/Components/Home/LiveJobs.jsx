import { MdOutlineWatchLater } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const LiveJobs = () => {
    const jobsData = useLoaderData();

    const parseCustomDate = (dateString) => {
        const cleanedDateString = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1"); 
        return new Date(cleanedDateString);
    };
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    const liveJobs = jobsData.filter(job => {
        const deadlineDate = parseCustomDate(job.deadline);
        return deadlineDate > new Date();
    });

    return (
        <div className="mt-[34px] mb-[175px] nunito px-4">
            <div>
                <div className="flex justify-between mb-6">
                    <p className="ml-4 text-[28px] nunito">Live Jobs <span className="text-red-600"> ({liveJobs.length}) </span></p>
                    <a className="btn px-4 roboto font-normal text-[15px] border-blue-300 bg-white text-[#0079C1]">Explore All</a>
                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 1400,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
            <div className="">
                {liveJobs.map((job, index) => (
                    <SwiperSlide>
                    <div key={index} className="card card-side bg-base-100 border-2 border-gray-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-[18px] text-[#0079C1]">{job.jobTitle}</h2>
                            <div className="flex items-center gap-3">
                                <figure>
                                    <img
                                        src="https://i.ibb.co.com/r2gv6dbx/vacancy.png"
                                        alt="Movie" className="h-12 w-12" />
                                </figure>
                                <p className="mt-5 text-[14px] epilogue text-[#1D1E1B]">Vacancy: {job.vacancy} People</p>
                            </div>

                            <p className="text-[14px] text-[#424447] epilogue">Salary : {job.salary}</p>
                            <hr />
                            <div className="flex justify-between items-center">
                                <p className="text-[14px] epilogue flex items-center gap-1">
                                    <span className="bg-[#E9F5FF] text-blue-700 p-1 rounded-sm text-xl">
                                        <MdOutlineWatchLater />
                                    </span> 
                                    Deadline: {job.deadline}
                                </p>
                                <div className="card-actions justify-end">
                                <Link onClick={scrollToTop} to={`/jobdetails/${job._id}`}>
                                            <button className="btn text-white h-[44px] text-[14px] font-normal bg-[#1976D2]">View Details</button>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
            </div>
            </Swiper>
        </div>
    );
};

export default LiveJobs;