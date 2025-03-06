import React, { useState } from 'react';
import { IoEyeOffOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [eye, setEye] = useState(false); // State to toggle password visibility
    const [contactMethod, setContactMethod] = useState('email'); // Default to 'email'
    const [email, setEmail] = useState(''); // State for email input
    const [phone, setPhone] = useState(''); // State for phone input
    const [password, setPassword] = useState(''); // State for password input

    // Handle contact method change (email or phone)
    const handleContactMethodChange = (event) => {
        setContactMethod(event.target.value);
    };

    // Handle email input change
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Handle phone input change
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    // Handle password input change
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Handle form submission
    const handleSignIn = () => {
        if (contactMethod === 'email') {
            console.log("Email:", email);
        } else if (contactMethod === 'phone') {
            console.log("Phone:", phone);
        }
        console.log("Password:", password);
    };

    return (
        <div className='w-full relative py-8 min-h-screen flex justify-center items-center'>
            <div className='w-full absolute h-[50vh] bg-[#D9D9D9] -z-10 top-0'></div>
            <div className='bg-white flex flex-col gap-5 pt-10 rounded-lg items-center w-[800px]'>
                <p className='text-xl'>Welcome Back!</p>
                <p className='text-[#0275D8] font-semibold w-[500px] text-center'>
                    If you already have an account, sign in using your email address or mobile number.
                </p>

                {/* Contact Method Selection (Email or Phone) */}
                <div className='flex justify-center items-center gap-5'>
                    <div className='flex gap-3'>
                        <input
                            type="radio"
                            name="contactMethod"
                            id="email"
                            value="email"
                            checked={contactMethod === 'email'} // Default checked
                            onChange={handleContactMethodChange}
                            
                        />
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div className='flex gap-3'>
                        <input
                            type="radio"
                            name="contactMethod"
                            id="phone"
                            value="phone"
                            checked={contactMethod === 'phone'}
                            onChange={handleContactMethodChange}
                        />
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                </div>

                {/* Input Fields */}
                <div className='space-y-5'>
                    {/* Email or Phone Input */}
                    {contactMethod === 'email' ? (
                        <input
                            className='w-[500px] border-2 p-3'
                            type="text"
                            placeholder='Enter Your Email Address *'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    ) : (
                        <input
                            className='w-[500px] border-2 p-3'
                            type="text"
                            placeholder='Enter Your Phone Number *'
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    )}

                    {/* Password Input */}
                    <div className='relative'>
                        <input
                            className='w-[500px] border-2 p-3'
                            type={!eye ? "password" : "text"}
                            placeholder='Enter Your Password *'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {!eye ? (
                            <IoEyeOffOutline
                                onClick={() => setEye(true)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        ) : (
                            <FaEye
                                onClick={() => setEye(false)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        )}

                        {/* Forgot Password Link */}
                        <div className='w-[500px] flex justify-end'>
                            <p className='text-[#0275D8] cursor-pointer'>Forgot Password?</p>
                        </div>
                    </div>
                </div>

                {/* Sign In Button */}
                <button
                    className='w-[500px] bg-[#1976D2] text-white py-2 rounded shadow-lg hover:bg-[#1565C0]'
                    onClick={handleSignIn}
                >
                    SIGN IN
                </button>

                {/* OR Divider */}
                <p>OR</p>

                {/* Sign In with Google Button */}
                <div className='relative'>
                    <button className='w-[500px] border-[1px] py-2 rounded hover:bg-gray-100'>
                        Sign in with Google
                    </button>
                    <FcGoogle className='absolute top-[10px] left-2 text-[24px]' />
                </div>

                {/* Register Link */}
                <h2 className='mt-10'>
                    Don't have an account yet?{' '}
                    <span className='text-[#1976D2] cursor-pointer'>Register here</span>
                </h2>
            </div>
        </div>
    );
};

export default Login;