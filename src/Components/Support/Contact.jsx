import { CiMobile4 } from "react-icons/ci";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="bg-[#D0EFFF] h-[565px] grid grid-cols-2 gap-[30px] mx-[25px] rounded-[20px] mb-[100px]">
            <div className="roboto ml-[60px]">
                <h2 className="text-[36px] text-[#232323] font-normal text-center  mt-[60px]">Contact Us</h2>
                <p className="font-normal text-center text-[20px] mt-[22px] mb-[60px] text-[#6F6F6F]">If you have any queries, feel free to reach out to us during business hours.</p>
                <p className="flex items-center gap-6 mt-15 font-normal text-[20px] text-[#6F6F6F]"><span className="text-black text-[64px]"><IoLocationOutline /></span> 11th Floor, MMK-Aakash Avenue, Plot No. 12, Kamal Ataturk Avenue, Gulshan-2, Dhaka-1212, Bangladesh</p>
                <p className="flex items-center gap-6 mt-[40px] font-normal text-[20px] text-[#6F6F6F]"><span className="text-black text-[64px]"><IoMailOutline /></span> contact@hirely.com</p>
                <p className="flex items-center gap-6 mt-[40px] font-normal text-[20px] text-[#6F6F6F]"><span className="text-black text-[64px]"><CiMobile4 /></span> +880169696969</p>
            </div>
            <div>
                <img src="https://i.ibb.co.com/Pz07MGDZ/pl.png" alt="" className="h-[393px] w-[529px] mt-[30px]"/>
            </div>
        </div>
    );
};

export default Contact;