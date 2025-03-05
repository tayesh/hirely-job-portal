const Registration = () => {
    return (
        <div className="bg-white h-[910px] relative flex justify-center items-center">
            <div className="bg-[#D9D9D9] h-[323px] w-full absolute top-0 left-0"></div>

            {/* Registration Form */}
            <div className="relative z-10 bg-white w-[800px] h-[815px]  shadow-lg rounded-lg  mt-[32px] mx-[200px]">
                <h2 className="text-center poppins text-[14px] mt-[56px] font-normal text-[#000000DE]">
                    Create your account & find your dream job today!
                </h2>
                <h3 className="text-center nunito text-blue-600 font-semibold text-sm my-1">
                    <a href="#">Access 1000's of new jobs - apply in minutes.</a>
                </h3>
                <h3 className="text-center text-lg font-semibold mt-2">
                    New member Registration
                </h3>

                {/* Google Sign-up */}
                <div className="mx-[278px]">
                <button className="flex items-center justify-center border border-gray-300 rounded-lg w-full  py-2 mt-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                        alt="Google" className="w-5 h-5 mr-2" />
                    Sign up with Google
                </button>
                </div>
                

                <div className="text-center text-gray-500 my-4">OR</div>

                {/* Form Fields */}
                <div className="space-y-4 mx-[148px]">
                    <input
                        type="text"
                        placeholder="Enter Your Name *"
                        className="w-full  border border-gray-300 p-3 rounded-lg text-sm"
                    />

                    <div className="flex border border-gray-300 p-3 rounded-lg">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/320px-Flag_of_Bangladesh.svg.png"
                            alt="BD Flag" className="w-6 h-4 mr-2"
                        />
                        <span className="text-gray-600">+880</span>
                        <input
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            className="ml-2 w-full outline-none"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Enter Your Email Address*"
                        className="w-full border border-gray-300 p-3 rounded-lg text-sm"
                    />

                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Create Your Password *"
                            className="w-full border border-gray-300 p-3 rounded-lg text-sm"
                        />
                        <span className="absolute right-3 top-3 cursor-pointer">
                            🔒
                        </span>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start space-x-2 text-xs text-gray-600">
                        <input type="checkbox" />
                        <span>
                            By clicking "Create an account", you confirm that you agree to
                            <a href="#" className="text-blue-600"> Hifely Terms and Conditions</a> and
                            <a href="#" className="text-blue-600"> Privacy Policy</a>.
                        </span>
                    </div>

                    {/* Submit Button */}
                    <button className="bg-blue-600 text-white w-full py-3 rounded-lg mt-2">
                        Create an account
                    </button>

                    {/* Login Redirect */}
                    <p className="text-center text-sm mt-3">
                        Already have an account? <a href="#" className="text-blue-600">Log In</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
