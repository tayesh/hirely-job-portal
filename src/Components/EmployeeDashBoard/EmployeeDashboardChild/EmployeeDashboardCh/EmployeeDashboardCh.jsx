const EmployeeDashboardCh = () => {
    return (
        <div className="mt-9">
            <div className="flex justify-between mx-5 ">
                <h2 className="poppins font-semibold text-[32px] text-[#000000]">Welcome to your Dashboard!</h2>
                <p className="bg-[#0079C1] epilogue flex items-center py-2 px-4 gap-2 text-[20px] text-white rounded-md"><img className="h-6 w-6" src="https://i.ibb.co.com/1tSLgMMr/add.png" alt="" />New Job Post</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mx-6 py-4 h-[40vh] mb-[100px]">
                {/* First Row */}
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

                {/* Second Row */}
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co.com/Yv8hvNT/image.png" alt="" />
                    <div className="mt-0">
                        <h2 className="text-lg mt-0">Followed Company</h2>
                        <p className="text-base">Following</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co.com/Yv8hvNT/image.png" alt="" />
                    <div className="mt-0">
                        <h2 className="text-lg mt-0">Followed Company</h2>
                        <p className="text-base">Following</p>
                    </div>
                </div>
                {/* Empty div for the third column in the second row */}
                <div></div>
            </div>
            <h2 className="ml-6 text-[24px] font-semibold poppins text-black">This week's applicants.</h2>
            <div className="flex items-center justify-center pt-20">
                <img src="https://i.ibb.co.com/HDLzFmFN/notfound.png" alt="" />
            </div>
            <h2 className="text-center text-[32px] font-semibold poppins text-black">Candidate Not Found!</h2>
        </div>
    );
};

export default EmployeeDashboardCh;