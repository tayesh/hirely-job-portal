import { FaRegEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const CompanyProfilech = () => {
    return (
        <div className="p-8 min-h-screen">
            <div className="shadow-xl px-1 border-2 border-gray-200 rounded-xl">
                {/* Navigation Tabs */}
                <div className="flex gap-4 items-center justify-center shadow-xl border-2 border-gray-400 rounded-xl py-6 ">
                    {["Company Information", "Company Overview", "Meet the Team", "Join Us", "Contact Information", "FAQ"].map(
                        (tab) => (
                            <button key={tab} className=" px-4  text-[15px] poppins font-medium text-[#0079C1]">
                                {tab}
                            </button>
                        )
                    )}
                </div>

                {/* Company Information */}
                <div className="flex mx-4 my-4 justify-between items-center">
                    <h2 className="text-[20px] font-medium">Company Information</h2>
                    <button className="px-6 py-1 border flex items-center font-medium gap-3 rounded-md bg-[#E6ECFF] text-[#0079C1] text-[20px] poppins">Edit <FaRegEdit /></button>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    {[
                        { label: "Business Type", image: "https://i.ibb.co.com/n4BdKYH/business.png" },
                        { label: "Trade License", image: "https://i.ibb.co.com/fdgTmzCz/trade.png" },
                        { label: "Address", image: "https://i.ibb.co.com/HTnDxSBp/company.png" },
                        { label: "Location", image: "https://i.ibb.co.com/cnzWWck/loc.png" },
                        { label: "Website", image: "https://i.ibb.co.com/yBVPj4fj/webs.png" },
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center p-3 rounded-md">
                            <div className="w-12 h-12 bg-[#BBDEF3] rounded-full flex items-center justify-center overflow-hidden">
                                <img src={item.image} alt={item.label} className="w-8 h-8 object-contain" />
                            </div>
                            <p className="mt-3 text-center font-medium poppins mb-16 text-[16px]">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Company Overview */}
            <div className="mt-10 ">
                <div className="flex mr-4 justify-between items-center">
                    <h2 className="text-[20px] font-medium pl-3">Company Overview</h2>
                    <button className="px-6 py-1 border flex items-center font-medium gap-3 rounded-md bg-[#E6ECFF] text-[#0079C1] text-[20px] poppins">Edit <FaRegEdit /></button>
                </div>
                <div className="mt-4 p-3 border-2 shadow-xl rounded-md h-[300px]">
                    <p className="text-gray-500 italic"> </p>
                </div>
            </div>

            {/* Meet the Team */}
            <div className="mt-10">
                <div className="flex mr-4 justify-between items-center">
                    <h2 className="text-[20px] font-medium pl-3">Meet The Team</h2>
                    <button className="px-6 py-1 border flex items-center font-medium gap-3 rounded-md bg-[#E6ECFF] text-[#0079C1] text-[20px] poppins">Add <IoMdAdd /></button>
                </div>
                <div className="mt-4 p-3 border-2 shadow-xl rounded-md h-[72px]">
                    <p className="text-gray-500 italic"> </p>
                </div>
            </div>

            {/* Join Us */}
            <div className="mt-10">
                <div className="flex mr-4 justify-between items-center">
                    <h2 className="text-[20px] font-medium pl-3">Join Us</h2>
                    <button className="px-6 py-1 border flex items-center font-medium gap-3 rounded-md bg-[#E6ECFF] text-[#0079C1] text-[20px] poppins">Edit <FaRegEdit /></button>
                </div>
                <div className="mt-4 p-3 border-2 shadow-xl rounded-md h-[106px]">
                    <p className="text-gray-500 italic"> </p>
                </div>
            </div>

            {/* Contact Information */}
            <div className="mt-10 ">
                <div className="flex mr-4 justify-between items-center">
                    <h2 className="text-[20px] font-medium pl-3">Contact Information</h2>
                    <button className="px-6 py-1 border flex items-center font-medium gap-3 rounded-md bg-[#E6ECFF] text-[#0079C1] text-[20px] poppins">Edit <FaRegEdit /></button>
                </div>
                <div className="mt-4 p-3 border-2 shadow-xl rounded-md h-[250px]">
                    <p className="text-gray-500 italic"> </p>
                </div>
            </div>
        </div>
    );
};




export default CompanyProfilech;