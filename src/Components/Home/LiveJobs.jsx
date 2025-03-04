import { MdOutlineWatchLater } from "react-icons/md";

const LiveJobs = () => {
    return (
        <div className="mt-[34px] mb-[175px] nunito px-4">
            <div>
                <div className="flex justify-between mb-6">
                        <p className="ml-4 text-[28px] nunito">Live Jobs <span className="text-red-600"> (1,169) </span></p>
                        <a className="btn px-4 roboto font-normal text-[15px] border-blue-300 bg-white text-[#0079C1]">Explore All</a>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="card card-side bg-base-100 border-2 border-gray-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[18px] text-[#0079C1]">অডিটর ও মনিটরিং</h2>
                        <div className="flex items-center gap-3">
                            <figure>
                                <img
                                    src="https://i.ibb.co.com/r2gv6dbx/vacancy.png"
                                    alt="Movie" className="h-12 w-12" />
                            </figure>
                            <p className="mt-5 text-[14px] epilogue text-[#1D1E1B]">Vacancy: 5 People</p>
                        </div>

                        <p className="text-[14px] text-[#424447] epilogue">Salary : 25000 - 35000 Taka /Monthly</p>
                        <hr />
                        <div className="flex justify-between items-center">
                            <p className="text-[14px] epilogue flex items-center gap-1"><span className="bg-[#E9F5FF] text-blue-700 p-1 rounded-sm text-xl"><MdOutlineWatchLater /></span> Deadline: Mar 1st, 25</p>
                            <div className="card-actions justify-end">
                                <button className="btn text-white h-[60px] text-[9px] bg-[#1976D2]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border-2 border-gray-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[18px] text-[#0079C1]">Senior iOS Engineer</h2>
                        <div className="flex items-center gap-3">
                            <figure>
                                <img
                                    src="https://i.ibb.co.com/r2gv6dbx/vacancy.png"
                                    alt="Movie" className="h-12 w-12" />
                            </figure>
                            <p className="mt-5 text-[14px] epilogue text-[#1D1E1B]">Vacancy: 5 People</p>
                        </div>

                        <p className="text-[14px] text-[#424447] epilogue">Salary : Negotiable</p>
                        <hr />
                        <div className="flex justify-between items-center">
                            <p className="text-[14px] epilogue flex items-center gap-1"><span className="bg-[#E9F5FF] text-blue-700 p-1 rounded-sm text-xl"><MdOutlineWatchLater /></span> Deadline: Mar 20th, 25</p>
                            <div className="card-actions justify-end">
                                <button className="btn text-white h-[60px] text-[9px] bg-[#1976D2]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border-2 border-gray-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[18px] text-[#0079C1]">𝐒𝐞𝐧𝐢𝐨𝐫 𝐄𝐱𝐞𝐜𝐮𝐭𝐢𝐯𝐞- 𝐁𝐫𝐚𝐧𝐝, 𝐍𝐞𝐰 </h2>
                        <div className="flex items-center gap-3">
                            <figure>
                                <img
                                    src="https://i.ibb.co.com/r2gv6dbx/vacancy.png"
                                    alt="Movie" className="h-12 w-12" />
                            </figure>
                            <p className="mt-5 text-[14px] epilogue text-[#1D1E1B]">Vacancy: 5 People</p>
                        </div>

                        <p className="text-[14px] text-[#424447] epilogue">Salary : Negotiable</p>
                        <hr />
                        <div className="flex justify-between items-center">
                            <p className="text-[14px] epilogue flex items-center gap-1"><span className="bg-[#E9F5FF] text-blue-700 p-1 rounded-sm text-xl"><MdOutlineWatchLater /></span> Deadline: Mar 3rd, 25</p>
                            <div className="card-actions justify-end">
                                <button className="btn text-white h-[60px] text-[9px] bg-[#1976D2]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default LiveJobs;