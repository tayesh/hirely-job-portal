import { IoIosAddCircleOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const Featured = () => {
    return (
        <div className="mx-16 mb-[70px]">
            <div>
                <div className="flex justify-between mb-6">
                    <p className="text-[28px] nunito">Featured Companies</p>
                    <a className="btn px-4 roboto text-[15px] font-normal border-blue-300 bg-white text-[#0079C1]">Explore All</a>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10">
                <div className="card bg-base-200 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/67Sfrqs7/f1.png"
                            alt="Shoes" className="h-[194px] w-full" />
                    </figure>
                    <img className=" py-1.5 px-3 rounded-2xl absolute ml-4 mt-[-6.5px]" src="https://i.ibb.co.com/mF1Znn0B/Frame.png" />

                    <button className="flex items-center roboto gap-2 bg-[#0079C1] text-white w-24 py-1.5 px-3 rounded-2xl absolute mt-44 ml-64"><IoIosAddCircleOutline /> Follow</button>
                    <div className="card-body">
                        <div className="flex items-center gap-2">
                            <figure>
                                <img
                                    src="https://i.ibb.co.com/nMDn28rx/l1.png"
                                    alt="Shoes" className="h-[44px]" />
                            </figure>
                            <p className="text-[#45494B] text-[16px]">Pathao</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://i.ibb.co.com/kgxXvRXh/location.png" alt="" />
                            <p className="text-[#45494B] text-[12px]">Dhaka North City Corporat, Dhaka</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img src="https://i.ibb.co.com/TBGnh33M/jobopen.png" alt="" />
                                <p className="text-[#0079C1] text-[12px] poppins">Job Opening(1)</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn text-white h-[40px] epilogue text-[12px] font-normal bg-[#1976D2]">View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/0yr7Z8wW/f2.png"
                            alt="Shoes" className="h-[194px] w-full" />
                    </figure>
                    <img className=" py-1.5 px-3 rounded-2xl absolute ml-4 mt-[-6.5px]" src="https://i.ibb.co.com/mF1Znn0B/Frame.png" />

                    <button className="flex items-center gap-2 roboto bg-[#0079C1] text-white w-24 py-1.5 px-3 rounded-2xl absolute mt-44 ml-64"><IoIosAddCircleOutline /> Follow</button>
                    <div className="card-body">
                        <div className="flex items-center gap-2">
                            <figure>
                                <img
                                    src="https://i.ibb.co.com/0yr7Z8wW/f2.png"
                                    alt="Shoes" className="h-[44px] " />
                            </figure>
                            <p className="text-[#45494B] text-[16px]">GoZayaan Limited</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://i.ibb.co.com/kgxXvRXh/location.png" alt="" />
                            <p className="text-[#45494B] text-[12px]">Dhaka North City Corporat, Dhaka</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img src="https://i.ibb.co.com/TBGnh33M/jobopen.png" alt="" />
                                <p className="text-[#0079C1] text-[12px] poppins">Job Opening(1)</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn text-white h-[40px]  epilogue text-[12px] font-normal bg-[#1976D2]">View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/3Yz4gdTh/f3.png"
                            alt="Shoes" className="h-[194px] w-full" />
                    </figure>

                    <img className=" py-1.5 px-3 rounded-2xl absolute ml-4 mt-[-6.5px]" src="https://i.ibb.co.com/mF1Znn0B/Frame.png" />

                    <button className="flex items-center gap-2 bg-[#0079C1] text-white w-24 py-1.5 px-3 rounded-2xl absolute mt-44 ml-64"><IoIosAddCircleOutline /> Follow</button>
                    <div className="card-body">
                        <div className="flex items-center gap-2">
                            <figure>
                                <img
                                    src="https://i.ibb.co.com/gbnLBq6Q/l3.jpg"
                                    alt="Shoes" className="h-[44px] " />
                            </figure>
                            <p className="text-[#45494B] text-[16px]">Heguang Electronic Distribution Company Ltd.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://i.ibb.co.com/kgxXvRXh/location.png" alt="" />
                            <p className="text-[#45494B] text-[12px]">Dhaka North City Corporat, Dhaka</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img src="https://i.ibb.co.com/TBGnh33M/jobopen.png" alt="" />
                                <p className="text-[#0079C1] text-[12px] poppins">Job Opening(1)</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn text-white epilogue text-[12px] font-normal h-[40px]  bg-[#1976D2]">View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;