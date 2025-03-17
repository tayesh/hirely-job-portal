import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoEyeOffOutline } from 'react-icons/io5';

const Agency = () => {
    const countries = [
        { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/320px-Flag_of_Bangladesh.svg.png" },
        { code: "IN", name: "India", dialCode: "+91", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png" },
        { code: "CN", name: "China", dialCode: "+86", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_China.svg/320px-Flag_of_China.svg.png" },
        { code: "JP", name: "Japan", dialCode: "+81", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/320px-Flag_of_Japan.svg.png" },
        { code: "PK", name: "Pakistan", dialCode: "+92", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/320px-Flag_of_Pakistan.svg.png" },
        { code: "ID", name: "Indonesia", dialCode: "+62", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/320px-Flag_of_Indonesia.svg.png" },
        { code: "PH", name: "Philippines", dialCode: "+63", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/320px-Flag_of_the_Philippines.svg.png" },
        { code: "VN", name: "Vietnam", dialCode: "+84", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/320px-Flag_of_Vietnam.svg.png" },
        { code: "TH", name: "Thailand", dialCode: "+66", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/320px-Flag_of_Thailand.svg.png" },
        { code: "MY", name: "Malaysia", dialCode: "+60", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/320px-Flag_of_Malaysia.svg.png" },
        { code: "SG", name: "Singapore", dialCode: "+65", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/320px-Flag_of_Singapore.svg.png" },
        { code: "KR", name: "South Korea", dialCode: "+82", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/320px-Flag_of_South_Korea.svg.png" },
        { code: "LK", name: "Sri Lanka", dialCode: "+94", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/320px-Flag_of_Sri_Lanka.svg.png" },
        { code: "MM", name: "Myanmar", dialCode: "+95", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/320px-Flag_of_Myanmar.svg.png" },
        { code: "AF", name: "Afghanistan", dialCode: "+93", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/320px-Flag_of_Afghanistan.svg.png" },
        { code: "IR", name: "Iran", dialCode: "+98", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/320px-Flag_of_Iran.svg.png" },
        { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png" },
        { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/320px-Flag_of_the_United_Arab_Emirates.svg.png" },
        { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/320px-Flag_of_Bangladesh.svg.png" },
        { code: "IQ", name: "Iraq", dialCode: "+964", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/320px-Flag_of_Iraq.svg.png" },
        { code: "KG", name: "Kyrgyzstan", dialCode: "+996", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/320px-Flag_of_Kyrgyzstan.svg.png" },
        { code: "KZ", name: "Kazakhstan", dialCode: "+7", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/320px-Flag_of_Kazakhstan.svg.png" },
        { code: "UZ", name: "Uzbekistan", dialCode: "+998", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/320px-Flag_of_Uzbekistan.svg.png" },
        { code: "NP", name: "Nepal", dialCode: "+977", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/320px-Flag_of_Nepal.svg.png" }
    ];


    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const [eye, setEye] = useState(false);

    return (
        <div className='w-full py-8 relative min-h-screen flex justify-center items-center'>
            <div className='w-full absolute h-[50vh] bg-[#D9D9D9] -z-10 top-0'></div>
            <div className='bg-white flex flex-col gap-5 pt-10 rounded-lg items-center w-[800px]'>
                <p className=' font-semibold'>Post your jobs easily</p>
                <p className='text-[#0275D8] text-[18px] font-semibold w-[500px] text-center'>
                    Create an Agency Account
                </p>
                <div className='w-[500px] flex gap-5'>
                    <div>
                        <label className='text-[14px]'  >Company Name <span className='text-[#FF0000]'> *</span></label>
                        <input
                            className='w-[240px] border-2 p-3 mt-2'
                            type={!eye ? "password" : "text"}
                            placeholder='Enter Agency Name *'

                        />

                    </div>
                    <div>
                        <label className='text-[14px]'  >Agency Type <span className='text-[#FF0000]'> *</span></label>
                        <select
                            name="Skills"
                            className="select border-2 mt-2 text-gray-400 border-gray-200 rounded-none w-[240px] h-[51px]"

                        >
                            <option disabled value="">
                                Select
                            </option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>

                    </div>
                </div>


              
                <div className='space-y-5 flex flex-col'>
          

                    <input
                        className='w-[500px] border-2 p-4'
                        type="text"
                        placeholder='Enter Your Agency Owner Name *'

                    />
                    <div className="flex items-center border border-gray-300 p-3 rounded-lg relative">
                        <div className="flex items-center cursor-pointer">
                            <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-6 h-4 mr-2" /><span className="text-lg"><IoMdArrowDropdown /></span>
                            <span className="text-gray-600">{selectedCountry.dialCode}</span>
                            <select
                                onChange={(e) => {
                                    const country = countries.find(c => c.code === e.target.value);
                                    setSelectedCountry(country);
                                }}
                                value={selectedCountry.code}
                                className="absolute left-10 roboto text-[16px] font-normal text-[#000000DE] bg-transparent border-none outline-none cursor-pointer w-10 opacity-0"
                            >
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            className="ml-12 w-full outline-none"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[14px]'  >Email Address <span className='text-[#FF0000]'> *</span></label>
                        <input
                            className='w-[500px] border-2 p-3'
                            type="text"
                            placeholder='Enter Your Email Address *'

                        />
                    </div>

                
                    <div className='relative flex flex-col'>
                        <label className='text-[14px]'  >Password <span className='text-[#FF0000]'> *</span></label>
                        <input
                            className='w-[500px] border-2 p-3'
                            type={!eye ? "password" : "text"}
                            placeholder='Enter Your Password *'

                        />
                        {!eye ? (
                            <IoEyeOffOutline
                                onClick={() => setEye(true)}
                                className='absolute top-9 right-3 text-[24px] cursor-pointer'
                            />
                        ) : (
                            <FaEye
                                onClick={() => setEye(false)}
                                className='absolute top-9 right-3 text-[24px] cursor-pointer'
                            />
                        )}

                 
                        <div className='w-[500px] flex justify-end'>
                            <p className='text-[#0275D8] cursor-pointer'>Forgot Password?</p>
                        </div>
                    </div>
                </div>
                <div className=" w-[500px]">
                    <div className="flex items-start space-x-2  text-gray-600 ">
                        <input type="checkbox" className=" h-[18px] w-[18px]" />
                        <span className="poppins text-[12px]">
                            By clicking "Create an account", you confirm that you agree to
                            <a href="#" className="text-blue-600"> Hirely Terms and Conditions</a> and
                            <a href="#" className="text-blue-600"> Privacy Policy</a>.
                        </span>
                    </div>
                </div>

         
                <button
                    className='w-[250px] bg-[#1976D2] text-white py-2 rounded shadow-lg hover:bg-[#1565C0]'

                >
                    SIGN IN
                </button>

            
                <p>OR</p>

            
                <div className='relative'>
                    <button className='w-[250px] border-[1px] py-2 rounded hover:bg-gray-100'>
                        Sign in with Google
                    </button>
                    <FcGoogle className='absolute top-[10px] left-2 text-[24px]' />
                </div>
            </div>
        </div>
    );
};

export default Agency;