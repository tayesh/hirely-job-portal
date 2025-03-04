import { MdOutlineWatchLater } from "react-icons/md";

const Expire = () => {
    return (
        <div className="mt-4 mx-8 mb-[82px]">
            <div>
                <div className="flex justify-between mb-6 nunito">
                    <p className="text-[28px]">Expire Soon Jobs <span className="text-[#DB1616]"> (69) </span></p>
                    <a className="btn px-4 text-[15px] roboto font-normal border-blue-300 bg-white text-[#0079C1]">Explore All</a>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="card card-side bg-base-100 border-2 border-gray-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title nunito font-normal text-[#0079C1] text-[18px]">ETT Technician</h2>
                        <p className="mt-5 text-[16px] poppins font-normal text-[#72737C]">Vacancy: 5 People</p>
                        <p className="text-[16px] epilogue font-normal text-[#424447]">Salary : 9300 - 22490 Taka /Monthly</p>
                        <div className="divider"></div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <p className="bg-[#E9F5FF] text-blue-700 p-1 rounded-sm text-4xl"><MdOutlineWatchLater /></p>
                                <div>
                                    <p className="text-[14px] epilogue font-normal text-[#212529]">Deadline: Mar 1st, 25</p>
                                    <p className="text-[#DB1616] font-normal text-[14px] text-center">(6 Days Left)</p>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn text-white h-[40px] text-[9px] font-bold bg-[#1976D2]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border-2 border-gray-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title nunito font-normal text-[#0079C1] text-[18px]">ECO Technician</h2>
                        <p className="mt-5 text-[16px] poppins font-normal text-[#72737C]">Vacancy: 5 People</p>
                        <p className="text-[16px] epilogue font-normal text-[#424447]">Salary : 9300 - 22490 Taka /Monthly</p>
                        <div className="divider"></div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <p className="bg-[#E9F5FF] text-blue-700 p-1 rounded-sm text-4xl"><MdOutlineWatchLater /></p>
                                <div>
                                    <p className="text-[14px] epilogue font-normal text-[#212529]">Deadline: Mar 1st, 25</p>
                                    <p className="text-[#DB1616] font-normal text-[14px] text-center">(6 Days Left)</p>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn text-white h-[40px] text-[9px] font-bold bg-[#1976D2]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border-2 border-gray-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title nunito font-normal text-[#0079C1] text-[18px]">Marketing Executive</h2>
                        <p className="mt-5 text-[16px] poppins font-normal text-[#72737C]">Vacancy: 5 People</p>
                        <p className="text-[16px] epilogue font-normal text-[#424447]">Salary : Negotiable</p>
                        <div className="divider"></div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <p className="bg-[#E9F5FF] text-blue-700 p-1 rounded-sm text-4xl"><MdOutlineWatchLater /></p>
                                <div>
                                    <p className="text-[14px] epilogue font-normal text-[#212529]">Deadline: Mar 1st, 25</p>
                                    <p className="text-[#DB1616] font-normal text-[14px] text-center">(6 Days Left)</p>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn text-white h-[40px] text-[9px] font-bold bg-[#1976D2]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expire;