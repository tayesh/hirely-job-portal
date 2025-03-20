import { Link } from "react-router-dom";

const EmployeeDashboardCh = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="my-48">
            <div className="flex justify-between mb-12 mx-12">
                <h2 className="poppins font-semibold text-[32px] text-[#000000]">Welcome to your Dashboard!</h2>
                <Link to="/employeedashboard/newjobpost">
                    <p className="bg-[#0079C1] epilogue flex items-center py-2 px-4 gap-2 text-[20px] text-white rounded-md"><img className="h-6 w-6" src="https://i.ibb.co.com/1tSLgMMr/add.png" alt="" />New Job Post</p>
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 mx-6 py-4 h-[40vh] mb-[100px]">
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1 h-10" src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" />
                    <div className="mt-0">
                        <h2 className="text-[20px] poppins mt-0">Today’s Applicant</h2>
                        <p className="text-[20px] poppins font-semibold text-[#0079C1]">69</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1 h-10" src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" />
                    <div className="mt-0">
                        <h2 className="text-[20px] poppins mt-0">Applied Candidate</h2>
                        <p className="text-[20px] poppins font-semibold text-[#0079C1]">34</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1" src="https://i.ibb.co.com/Yv8hvNT/image.png" alt="" />
                    <div className="mt-0">
                        <h2 className="text-[20px] poppins mt-0">Published Jobs</h2>
                        <p className="text-[20px] poppins font-semibold text-[#0079C1]">78</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1 h-10" src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" />
                    <div className="mt-0">
                        <h2 className="text-[20px] poppins mt-0">Applicant Shortlist</h2>
                        <p className="text-[20px] poppins font-semibold text-[#0079C1]">22</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 shadow-md shadow-gray-400 h-fit px-5 py-2 rounded">
                    <img className="mt-1 h-10" src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" />
                    <div className="mt-0">
                        <h2 className="text-[20px] poppins mt-0">Selected Candidate</h2>
                        <p className="text-[20px] poppins font-semibold text-[#0079C1]">17</p>
                    </div>
                </div>
                <div></div>
            </div>
            {/* <h2 className="ml-6 text-[24px] font-semibold poppins text-black">This week's applicants.</h2>
            <div className="flex items-center justify-center pt-20">
                <img src="https://i.ibb.co.com/HDLzFmFN/notfound.png" alt="" />
            </div>
            <h2 className="text-center text-[32px] font-semibold poppins text-black">Candidate Not Found!</h2> */}
        </div>
        </div>
    );
};

export default EmployeeDashboardCh;