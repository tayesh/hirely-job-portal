import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-neutral px-3">
            <footer className="footer flex justify-between bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title space-y-4 text-[#0275D8] text-[18px] epilogue font-normal">For Job Seekers</h6>
                    <a className="link epilogue text-[17px] font-normal link-hover">Register as Candidate</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">Login</a>
                    <a className="link epilogue text-[17px] font-normal link-hover">Find Jobs</a>
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
    );
};

export default Footer;