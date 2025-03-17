import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../AuthContext/UserContext";

const Featured = () => {
    const [companies, setCompanies] = useState([]); // State to store all company data
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [showAll, setShowAll] = useState(false); // State to toggle between showing 3 or all companies

    const {user}=useContext(UserContext);

    // Fetch company data from the API
    useEffect(() => {
        fetch("https://hirely-job-portal-server.vercel.app/companies")
            .then((response) => response.json())
            .then((data) => {
                setCompanies(data); // Set the fetched data to state
                setLoading(false); // Set loading to false
            })
            .catch((error) => {
                console.error("Error fetching companies:", error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

    // Show a loading message while data is being fetched
    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    // Determine which companies to display
    const displayedCompanies = showAll ? companies : companies.slice(0, 3);


    const handleCompanyFollow = async (id) => {
        const object = {
            email: user.email, // Assuming `user` is defined and contains the logged-in user's email
            companyId: id
        };
    
        console.log(object);
    
        try {
            const response = await fetch('http://localhost:5000/followCompany', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            });
    
            const data = await response.json(); // Parse the JSON response from the server
    
            if (response.ok) {
                alert('Company followed successfully!');
                console.log(data.message); // Log the success message from the backend
            } else {
                alert('Failed to follow company: ' + data.message); // Show the error message from the backend
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while trying to follow the company.');
        }
    };

    return (
        <div className="mx-16 mb-[70px]">
            <div>
                <div className="flex justify-between mb-6">
                    <p className="text-[28px] nunito">Featured Companies</p>
                    <a
                        onClick={() => setShowAll(!showAll)} // Toggle showAll state
                        className="btn px-4 roboto text-[15px] font-normal border-blue-300 bg-white text-[#0079C1] cursor-pointer"
                    >
                        {showAll ? "Show Less" : "Explore All"}
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {displayedCompanies.map((company, index) => (
                    <div key={index} className="card bg-base-200 shadow-xl">
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
                        <button onClick={() => handleCompanyFollow(company._id)} className="flex items-center roboto gap-2 bg-[#0079C1] text-white w-24 py-1.5 px-3 rounded-2xl absolute mt-44 ml-64">
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
                                <p className="text-[#45494B] text-[16px]">{company.Company_Name}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://i.ibb.co.com/kgxXvRXh/location.png"
                                    alt="Location"
                                />
                                <p className="text-[#45494B] text-[12px]">{company.Location}</p>
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
                ))}
            </div>
        </div>
    );
};

export default Featured;