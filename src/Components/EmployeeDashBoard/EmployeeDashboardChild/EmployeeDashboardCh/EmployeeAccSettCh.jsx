import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const EmployeeAccSettCh = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="mt-6 mx-12">
            <div className="shadow-2xl border-2 border-gray-400 rounded-xl">
                <div className="pt-12 pl-8">
                    <h2 className="text-[32px] font-semibold text-black">Account Settings</h2>
                </div>
                <div className="divider"></div>

                <div className="py-8 px-16">
                    {/* Current Password */}
                    <div className="mb-6 w-1/2">
                        <label className="block roboto text-[14px] font-normal text-[#424447] mb-2">Current Password</label>
                        <div className="relative">
                            <input
                                type={showCurrentPassword ? "text" : "password"}
                                placeholder="Enter Current Password *"
                                className="w-full poppins text-[15px] text-[#424447] border border-[#0000003B] p-3 rounded-sm pl-[26px]"
                            />
                            <span className="absolute bottom-3 right-6 cursor-pointer" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                                {showCurrentPassword ? <FaEyeSlash className="h-[20px] w-[22px]" /> : <FaRegEye className="h-[20px] w-[22px]" />}
                            </span>
                        </div>
                    </div>

                    {/* Create New Password */}
                    <div className="mb-6 w-1/2">
                        <label className="block roboto text-[14px] font-normal text-[#424447] mb-2">Create New Password</label>
                        <div className="relative">
                            <input
                                type={showCreatePassword ? "text" : "password"}
                                placeholder="Create New Password *"
                                className="w-full poppins text-[15px] text-[#424447] border border-[#0000003B] p-3 rounded-sm pl-[26px]"
                            />
                            <span className="absolute bottom-3 right-6 cursor-pointer" onClick={() => setShowCreatePassword(!showCreatePassword)}>
                                {showCreatePassword ? <FaEyeSlash className="h-[20px] w-[22px]" /> : <FaRegEye className="h-[20px] w-[22px]" />}
                            </span>
                        </div>
                    </div>

                    {/* Confirm New Password */}
                    <div className="mb-6 w-1/2">
                        <label className="block roboto text-[14px] font-normal text-[#424447] mb-2">Confirm New Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm New Password *"
                                className="w-full roboto text-[15px] text-[#424447] border border-[#0000003B] p-3 rounded-sm pl-[26px]"
                            />
                            <span className="absolute bottom-3 right-6 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <FaEyeSlash className="h-[20px] w-[22px]" /> : <FaRegEye className="h-[20px] w-[22px]" />}
                            </span>
                        </div>
                    </div>
                    <input type="submit" value="SUBMIT" className="btn mb-20 px-8 bg-[#0079C1] text-[#F8F9FA] py-2"/>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAccSettCh;