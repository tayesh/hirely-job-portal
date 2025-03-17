import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../AuthContext/UserContext';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'; // Import the icon
import { Link } from 'react-router-dom'; // Import Link

const Company = () => {
    const { user } = useContext(UserContext);
    const [followedCompanies, setFollowedCompanies] = useState([]);

    useEffect(() => {
        fetch(`https://hirely-job-portal-server.vercel.app/companyfollowedbyuser/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFollowedCompanies(data); // Update the state with fetched data
            })
            .catch(error => {
                console.error('Error fetching followed companies:', error);
            });
    }, [user.email]); // Add user.email as a dependency

    const handleCompanyUnfollow = async (companyId) => {
        try {
            const response = await fetch('https://hirely-job-portal-server.vercel.app/unfollowcompany', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: user.email, companyId }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Company followed/unfollowed successfully!');
                // Refresh the list of followed companies
                fetch(`https://hirely-job-portal-server.vercel.app/companyfollowedbyuser/${user.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setFollowedCompanies(data);
                    });
            } else {
                alert('Failed to follow/unfollow company: ' + data.message);
            }
        } catch (error) {
            console.error('Error following/unfollowing company:', error);
            alert('An error occurred while trying to follow/unfollow the company.');
        }
    };

    return (
        <div className='px-32 '>
            <div className='min-h-[930px] border-2 rounded-xl shadow-md mt-10 p-5'>
                <h2 className='text-4xl pl-10 pt-5 text-[#0079C1] font-semibold mt-10 '>Followed Companies</h2>
                <hr className='mt-10 mx-10' />
                <div className='grid grid-cols-1 gap-5 px-10 py-10'>
                    {followedCompanies.length === 0 ? (
                        <div className='flex flex-col mt-36 justify-center items-center py-10'>
                            <img src="https://i.ibb.co.com/tpXWnd15/image.png" alt="" />
                            <p className='text-xl font-semibold my-10'>No Results Found</p>
                        </div>
                    ) : (
                        followedCompanies.map((company, index) => (
                            <div key={index} className="flex rounded-md bg-slate-50 justify-around items-center shadow-md py-5">
                                <div className='relative shadow-md h-fit '>
                                    <figure>
                                        <img
                                            src={company.Company_Image}
                                            alt={company.Company_Name}
                                            className="w-[300px]  rounded object-cover"
                                        />
                                    </figure>
                                    <img
                                        className=" absolute top-0 left-5"
                                        src="https://i.ibb.co.com/mF1Znn0B/Frame.png"
                                        alt="Frame"
                                    />
                                    <button
                                        onClick={() => handleCompanyUnfollow(company._id)}
                                        className=" flex gap-2  items-center -right-10 top-2 shadow-md border-2 border-white absolute bg-red-500 px-3 py-2 rounded-full text-white"
                                    >
                                        <IoIosRemoveCircleOutline /> Unfollow
                                    </button>
                                </div>
                                <div className=" flex justify-between flex-col gap-10 py-4">


                                    <div className=" flex flex-col gap-5 ">
                                        <div className=" flex justify-start gap-3 text-xl">
                                            <img
                                                src="https://i.ibb.co.com/TBGnh33M/jobopen.png"
                                                alt="Job Openings"
                                                className='w-[30px] rounded-full'
                                            />
                                            <p className="">
                                                Job Opening ({company.Job_Opening})
                                            </p>
                                        </div>
                                        <div className=" flex justify-start gap-3 text-xl">
                                            <img
                                                src="https://i.ibb.co.com/kgxXvRXh/location.png"
                                                alt="Location"
                                                className='w-[30px] h-[30px] object-cover rounded-full'
                                            />
                                            <p className="">{company.Location}</p>
                                        </div>

                                    </div>
                                    <div className=" flex justify-center">
                                        <Link to={`/companyprofile/${company._id}`}>
                                            <button className=" bg-blue-800 rounded-md text-white px-3 py-2">
                                                View Profile
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Company;