import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-neutral px-3">
            <footer className="footer flex justify-between bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title space-y-4 text-[#0275D8] text-[18px] epilogue font-normal">For Job Seekers</h6>
                    <Link to="/register">
                        <a className="link epilogue text-[17px] font-normal link-hover">Register as Candidate</a>
                    </Link>
                    <Link to="/login">
                    <a className="link epilogue text-[17px] font-normal link-hover">Login</a>
                    </Link>
                    <Link to="/findjob">
                    <a className="link epilogue text-[17px] font-normal link-hover">Find Jobs</a>
                    </Link>
                    <a className="link epilogue text-[17px] font-normal link-hover">Anonymous Jobs</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">Download Hirely App</a>
                </nav>
                <nav>
                    <h6 className="footer-title space-y-4 text-[#0275D8] text-[18px] epilogue font-normal">For Employers</h6>
                    <a className="link epilogue text-[17px] font-normal link-hover">Post a Job</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">Register</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">Recruiter Login</a>
                </nav>
                <nav>
                    <h6 className="footer-title space-y-4 text-[#0275D8] text-[18px] epilogue font-normal">Quick Link</h6>
                    <a className="link epilogue text-[17px] font-normal link-hover">About Hirely</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">Get Support</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">Terms and Conditions</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">Privacy Policy</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">Refund Policy</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">FAQs For Candidate</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">FAQs For Company</a>
                </nav>
                <nav>
                    <h6 className="footer-title space-y-4 text-[#0275D8] text-[18px] epilogue font-normal">Contact Information</h6>
                    <a className="link epilogue text-[17px] font-normal link-hover flex items-center gap-4 mb-3"><span className="text-[#0275D8] text-md"><FaPhoneAlt /></span>+880169696969</a>
                    <a className="link epilogue text-[17px] font-normal link-hover flex items-center gap-4 mb-3"><span className="text-[#0275D8] text-md"><CiMail /></span>contact@hirely.com</a>
                    <a className="link epilogue text-[17px] font-normal link-hover flex items-center gap-4"><span className="text-[#0275D8] text-md"><CiLocationOn /></span>11th Floor, MMK-Aakash <br /> Avenue, Plot No. 12,<br /> Kamal Ataturk Avenue,<br /> Gulshan-2, Dhaka-1212,<br /> Bangladesh</a>
                </nav>
            </footer>
            <div className="flex justify-between mb-8 mx-4">
                <img className="w-[250px] h-[75px]" src="https://i.ibb.co.com/DPVpD8TV/google.png" alt="" />
                <img className="w-[250px] h-[75px]" src="https://i.ibb.co.com/23Dz94qW/app.png" alt="" />
                <img className="w-[250px] h-[75px]" src="https://i.ibb.co.com/gZfhyS4n/huawei.png" alt="" />
                <img className="w-[250px] h-[75px]" src="https://i.ibb.co.com/mVBnfLWv/amazon.png" alt="" />
            </div>
            <hr />
            <footer className="footer roboto h-[98px] flex justify-between bg-neutral text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <p className="text-[16px] font-normal">© {new Date().getFullYear()} Copyright : : <span className="text-[#0275D8] text-[15px] font-normal">Hirely</span> All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                    <p className="text-[#0275D8] text-[15px] font-normal">Follow us on : </p>
                    <div className="flex gap-4">
                        <img className="h-[28px] w-[28px]" src="https://i.ibb.co.com/27tJ9hLy/fb.png" alt="" />
                        <img className="h-[28px] w-[28px]" src="https://i.ibb.co.com/pv5NPQJT/lnk.png" alt="" />
                        <img className="h-[28px] w-[28px]" src="https://i.ibb.co.com/nsDvS8rK/insta.png" alt="" />
                        <img className="h-[28px] w-[28px]" src="https://i.ibb.co.com/v6QzPhfy/tiktok.png" alt="" />
                        <img className="h-[28px] w-[28px]" src="https://i.ibb.co.com/fVQDRsHr/yt.png" alt="" />
                    </div>
                </nav>
            </footer>
        </div>
        // <div>
        //     <footer className="footer flex justify-between pb-12 px-[100px] bg-white text-base-content">
        //         <nav>
        //             <h6 className="font-medium belanosima text-[40px] text-black mb-6">Hire<span className="text-[#0079C1] belanosima">ly</span></h6>
        //             <p className="text-[14px] font-normal text-[#1E1E1E99] mb-6">Discover the perfect candidates <br />effortlessly as our smart <br />matchmaking connects you with <br />the best candidates</p>
        //             <div className="flex items-center gap-6">
        //                 <img src="https://i.ibb.co/NdDHq3wY/fb.png" alt="Facebook" />
        //                 <img src="https://i.ibb.co/nsDHp3b8/Frame.png" alt="Frame" />
        //                 <img src="https://i.ibb.co/HprNVdxy/insta.png" alt="Instagram" />
        //                 <img src="https://i.ibb.co/Wp5v2MrN/lnkd.png" alt="LinkedIn" />
        //                 <img src="https://i.ibb.co/CKddLrHr/yt.png" alt="YouTube" />
        //             </div>
        //         </nav>
        //         <nav className="space-y-4">
        //             <h6 className="text-[#00457C] text-[16px]">Get in Touch</h6>
        //             <p className="text-[15px] font-normal text-[#1E1E1E99]">11th Floor, MMK-Aakash <br />Avenue, Plot No. 12, Kamal <br />Ataturk Avenue, Gulshan-2,<br /> Dhaka-1212, Bangladesh</p>
        //             <p className="text-[15px] font-normal text-[#1E1E1E99]">+88 0169696969</p>
        //             <p className="text-[15px] font-normal text-[#1E1E1E99]">sales@hirely.com</p>


        //         </nav>
        //     </footer>
        //     <hr />
        //     <footer className=" bg-white p-4">
        //         <aside className="flex px-[110px] justify-between">
        //             <div>
        //                 <p className="text-[#1E1E1E99] text-[16px] ">© {new Date().getFullYear()}  HIRELY. All rights reserved.</p>
        //             </div>
        //             <div className="flex gap-4">
        //                 <p className="text-[#1E1E1E99] text-[16px] font-normal">Privacy Policy</p>
        //                 <p className="text-[#1E1E1E99] text-[16px] font-normal">Terms of Use</p>
        //             </div>
        //         </aside>
        //     </footer>
        // </div>
    );
};

export default Footer;