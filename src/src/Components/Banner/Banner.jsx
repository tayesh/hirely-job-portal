import { RiArrowDropDownLine } from "react-icons/ri";

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/4RmWfNYm/bg.jpg)",
                }}>

                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-[36px] nunito mx-[203px]">"Find Your Dream Job Abroad – Verified Recruiters, Trusted & Hassle-Free Process!"</h1>
                        <p className="mb-5 text-[24px] nunito text-[#0079C1]">
                            11,000+ Active Vacancies, Available Right Now!
                        </p>
                        <div className="flex gap-6 justify-center bg-white mx-28 py-4 items-center h-16 rounded-lg">
                            <div className="dropdown dropdown-right">
                                <div tabIndex={0} role="button" className="btn text-md w-[400px] flex justify-between bg-white poppins text-[18px] font-normal text-[#424447]">Skills <span className="text-2xl"><RiArrowDropDownLine /></span></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box ">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-right">
                                <div tabIndex={0} role="button" className="btn text-md w-[400px] flex justify-between bg-white text-[18px] font-normal poppins text-[#424447]">Country <span className="text-2xl"><RiArrowDropDownLine /></span></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box ">
                                    <li>Bangladesh</li>
                                    <li>India</li>
                                    <li>USA</li>
                                    <li>UK</li>
                                    <li>Australia</li>
                                </ul>
                            </div>
                            <button className="btn bg-[#0275D8] text-white text-[15px] font-normal roboto rounded-md">SEARCH JOB</button>
                        </div>
                        <div className="flex justify-center items-center mt-3 gap-2">
                            <img src="https://i.ibb.co.com/b58TqMBd/Clip-path-group.png" alt="" />
                            <p className="text-[24px] nunito text-[#0079C1]">Easy Sign-up & Easy Application Process</p>
                        </div>
                        <div className="flex justify-center gap-4">
                            <div className="flex items-center">
                                <img src="https://i.ibb.co.com/20yVqtY5/jobs.png" alt="" />
                                <div>
                                    <p className="text-[#424447] nunito text-[15px]">VACANCIES</p>
                                    <p className="text-[30px] poppins text-[#0079C1] ml-4">6,999+</p>
                                </div>
                            </div >
                            <div className="flex items-center">
                                <img src="https://i.ibb.co.com/MxGjJV1p/company.png" alt="" />
                                <div>
                                    <p className="text-[#424447] nunito text-[15px]">COMPANIES</p>
                                    <p className="text-[30px] poppins text-[#0079C1] ml-4">6,999+</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="https://i.ibb.co.com/Zp58VWvK/peo.png" alt="" />
                                <div >
                                    <p className="text-[#424447] nunito text-[15px]">LIVE JOBS</p>
                                    <p className="text-[30px] poppins text-[#0079C1] ml-4">6,999+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;