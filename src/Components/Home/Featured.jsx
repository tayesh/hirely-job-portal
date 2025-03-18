import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../AuthContext/UserContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Featured = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch("https://hirely-job-portal-server.vercel.app/companies")
            .then((response) => response.json())
            .then((data) => {
                setCompanies(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching companies:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    const handleCompanyFollow = async (id) => {
        const object = {
            email: user?.email,
            companyId: id,
        };

        try {
            const response = await fetch(
                "https://hirely-job-portal-server.vercel.app/followCompany",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(object),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Company followed successfully!");
            } else {
                alert("Failed to follow company: " + data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while trying to follow the company.");
        }
    };

    return (
        <div className="mx-16 mb-[70px]">
            <div className="flex justify-between mb-6">
                <p className="text-[28px] nunito">Featured Companies</p>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 1300,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {companies.map((company, index) => (
                    <SwiperSlide key={index}>
                        <div className="card bg-base-200 shadow-xl relative">
                            <figure>
                                <img
                                    src={company.Company_Image}
                                    alt={company.Company_Name}
                                    className="h-[194px] w-full"
                                />
                            </figure>
                            <img
                                className="py-1.5 px-3 rounded-2xl absolute ml-4 mt-[-6.5px]"
                                src="https://i.ibb.co.com/mF1Znn0B/Frame.png"
                                alt="Frame"
                            />
                            <button
                                onClick={() => handleCompanyFollow(company._id)}
                                className="flex items-center roboto gap-2 bg-[#0079C1] text-white w-24 py-1.5 px-3 rounded-2xl absolute top-[150px] right-4"
                            >
                                <IoIosAddCircleOutline /> Follow
                            </button>
                            <div className="card-body">
                                <div className="flex items-center gap-2">
                                    <figure>
                                        <img
                                            src={company.Logo_Image}
                                            alt={company.Company_Name}
                                            className="h-[44px]"
                                        />
                                    </figure>
                                    <p className="text-[#45494B] text-[16px]">
                                        {company.Company_Name}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="https://i.ibb.co.com/kgxXvRXh/location.png"
                                        alt="Location"
                                    />
                                    <p className="text-[#45494B] text-[12px]">
                                        {company.Location}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="https://i.ibb.co.com/TBGnh33M/jobopen.png"
                                            alt="Job Openings"
                                        />
                                        <p className="text-[#0079C1] text-[12px] poppins">
                                            Job Opening ({company.Job_Opening})
                                        </p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/companyprofile/${company._id}`}>
                                            <button className="btn text-white h-[40px] epilogue text-[12px] font-normal bg-[#1976D2]">
                                                View Profile
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Featured;
