import { useContext } from "react";
import { UserContext } from "./AuthContext/UserContext";

const Verification = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="flex justify-center py-12 items-center min-h-screen bg-gray-200">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-sm space-y-4">
                <h2 className="text-2xl my-5 font-semibold text-center text-blue-500">Verify Your Account</h2>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">NID Number</label>
                        <input type="text" placeholder="Enter Your NID Number" className="border  p-2 rounded w-full" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Driving License</label>
                        <input type="text" placeholder="Enter Your Driving Licence" className="border p-2 rounded w-full" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Passport ID</label>
                        <input type="text" placeholder="Enter Your Passport ID" className="border p-2 rounded w-full" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Document</label>
                        <input type="file"  className="border ml-2 p-2 rounded w-full" />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="flex items-center border  rounded">
                        <input type="text" value={user.phoneNumber} readOnly placeholder="Phone Number" className="w-full p-2 outline-none" required />
                    </div>

                    <label className="block text-sm font-medium text-gray-700 mt-2">Email Address</label>
                    <input type="email" value={user.email} readOnly placeholder="Enter Your Email Address" className="border p-2 rounded w-full mt-1" />

                    <label className="block text-sm font-medium text-gray-700 mt-2">Password</label>
                    <input type="password" placeholder="Enter Your Password" className="border p-2 rounded  w-full mt-1" required />
                </div>

                <div className="flex items-center mt-4">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">By clicking "Create an account", you confirm that you agree to Hirely <a href="#" className="text-blue-500">Terms and Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.</span>
                </div>

                <div className="pb-6">
                    <button className="w-full bg-blue-500 text-white text-xl font-medium p-2 rounded mt-4">Verify Account</button>
                </div>
            </div>
        </div>
    );
};

export default Verification;
