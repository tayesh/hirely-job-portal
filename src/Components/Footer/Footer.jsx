import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <div className="bg-[#1F2131] w-full h-[231px] ">
                <div className="flex gap-[145px] px-12 py-12">
                    <div className="space-y-3 ">
                        <p className="text-white epilogue text-[20px] font-normal">Are you looking for a job?</p>
                        <p className="text-white epilogue text-[24px] font-normal">Hirely is Your Gateway to Success Starts Here <br /> !</p>
                        <p className="text-[20px] epilogue font-normal  text-[#0275D8] ">Our goal is to make your job search as easy as possible.</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <button className="btn text-white text-[14px] epilogue font-normal w-[133px] h-[45px] bg-[#1F2131] px-4">
                            Sign In
                        </button>
                        <button className="btn text-white w-[250px] text-[14px] epilogue font-normal h-[49px] bg-[#0275D8] px-12">
                            Register as Candidate
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-neutral px-3">
                <footer className="footer flex justify-between bg-neutral text-neutral-content p-10">
                    <nav>
                        <h6 className="footer-title space-y-4 text-[#0275D8] text-[18px] epilogue font-normal">For Job Seekers</h6>
                        <Link onClick={scrollToTop} to="/register">
                            <a className="link epilogue text-[17px] font-normal link-hover">Register as Candidate</a>
                        </Link>
                        <Link onClick={scrollToTop} to="/login">
                            <a className="link epilogue text-[17px] font-normal link-hover">Login</a>
                        </Link>
                        <Link onClick={scrollToTop} to="/findjob">
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
                        <Link onClick={scrollToTop} to="/about">
                            <a className="link epilogue text-[17px] font-normal link-hover">About Hirely</a>
                        </Link>
                        <Link onClick={scrollToTop} to="/support">
                            <a className="link epilogue text-[17px] font-normal link-hover">Get Support</a>
                        </Link>
                        <Link onClick={scrollToTop} to="/terms">
                            <a className="link epilogue text-[17px] font-normal link-hover">Terms and Conditions</a>
                        </Link>
                        <Link onClick={scrollToTop} to="/privacy">
                            <a className="link epilogue text-[17px] font-normal link-hover">Privacy Policy</a>
                        </Link>
                        <Link onClick={scrollToTop} to='/refund'>
                            <a className="link epilogue text-[17px] font-normal link-hover">Refund Policy</a>
                        </Link>
                        <Link onClick={scrollToTop} to="/faqcan">
                            <a className="link epilogue text-[17px] font-normal link-hover">FAQs For Candidate</a>
                        </Link>
                        <Link onClick={scrollToTop} to="/faqcom">
                            <a className="link epilogue text-[17px] font-normal link-hover">FAQs For Company</a>
                        </Link>
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
        </div>

    );
};

export default Footer;