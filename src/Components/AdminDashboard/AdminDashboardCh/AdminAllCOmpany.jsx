import { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const AdminAllCOmpany = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
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
    return (
        <div>
            <h2 className="text-4xl font-semibold roboto text-gray-800 mt-5 text-center">All Companies</h2>
            <div className="grid grid-cols-2 gap-8 mx-20 shadow-xl p-8 bg-purple-50 my-12">
                {
                    companies.map((company) => (
                        <div>
                            <div className="card bg-base-200 shadow-xl relative">
                                <figure>
                                    <img
                                        src={company.Company_Image}
                                        alt={company.Company_Name}
                                        className="h-[194px] w-full"
                                    />
                                </figure>
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
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src="https://i.ibb.co.com/kgxXvRXh/location.png"
                                                alt="Location"
                                            />
                                            <p className="text-[#45494B] text-[12px]">
                                                {company.Location}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img
                                                src="https://i.ibb.co.com/TBGnh33M/jobopen.png"
                                                alt="Job Openings"
                                            />
                                            <p className="text-[#0079C1] text-[12px] poppins">
                                                Job Opening ({company.Job_Opening})
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="card-actions justify-end">
                                            <Link onClick={scrollToTop} to={`/companyprofile/${company._id}`}>
                                                <button className="btn text-white h-[40px] epilogue text-[14px] font-medium px-6 bg-[#1976D2]">
                                                    View Profile
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <Link onClick={scrollToTop} to={`/companyprofile/${company._id}`}>
                                                <button className="btn text-white h-[40px] epilogue text-[14px] font-medium px-6  bg-[#2ff394]">
                                                    Edit Company
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AdminAllCOmpany;