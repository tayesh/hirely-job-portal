import React from 'react';

const DashboardCh = () => {
    return (
        <div>
            <div className="flex justify-around items-center py-10 h-[50vh]">
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co.com/h0WYFVJ/image.png" alt="" />
                    <div className="mt-0">
                        <h2 className="text-lg mt-0">Applied Jobs</h2>
                        <p className="text-base">Applied Jobs</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co.com/zVqCnJDN/image.png" alt="" />
                    <div className="mt-0">
                        <h2 className="text-lg mt-0">Saved Jobs</h2>
                        <p className="text-base">Jobs Saved</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co.com/Yv8hvNT/image.png" alt="" />
                    <div className="mt-0">
                        <h2 className="text-lg mt-0">Followed Company</h2>
                        <p className="text-base">Following</p>
                    </div>
                </div>
            </div>
            <div className="pl-20" >
                <div className="pl-10 shadow">
                    <div className="flex gap-10 items-center ">
                        <div>
                            <h2 className="text-xl font-bold">Recommended jobs (Add your preferences)</h2>
                            <p>To access personalized job recommendations, Please click the icon above.</p>
                        </div>
                        <button className="text-xl w-[130px] text-white text-center rounded bg-[#0079C1] h-fit py-1">Add +</button>
                    </div>
                    <div className="flex flex-col items-center py-20 ">
                        <img className="w-[600px]" src="https://i.ibb.co.com/Rkkjxqx9/image.png" alt="" />
                        <h2 className="text-2xl font-bold mb-5">No Jobs Found</h2>
                        <p>To access personalized job recommendations, Please click the recommended job icon.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DashboardCh;