import React, { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoEyeOffOutline } from 'react-icons/io5';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../AuthContext/UserContext';

const Agency = () => {
    const countries = [
        { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/320px-Flag_of_Bangladesh.svg.png", phoneNumberLength: 10 },
        { code: "IN", name: "India", dialCode: "+91", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png", phoneNumberLength: 10 },
        { code: "CN", name: "China", dialCode: "+86", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_China.svg/320px-Flag_of_China.svg.png", phoneNumberLength: 11 },
        { code: "JP", name: "Japan", dialCode: "+81", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/320px-Flag_of_Japan.svg.png", phoneNumberLength: 10 },
        { code: "PK", name: "Pakistan", dialCode: "+92", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/320px-Flag_of_Pakistan.svg.png", phoneNumberLength: 10 },
        { code: "ID", name: "Indonesia", dialCode: "+62", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/320px-Flag_of_Indonesia.svg.png", phoneNumberLength: 9 },
        { code: "PH", name: "Philippines", dialCode: "+63", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/320px-Flag_of_the_Philippines.svg.png", phoneNumberLength: 10 },
        { code: "VN", name: "Vietnam", dialCode: "+84", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/320px-Flag_of_Vietnam.svg.png", phoneNumberLength: 9 },
        { code: "TH", name: "Thailand", dialCode: "+66", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/320px-Flag_of_Thailand.svg.png", phoneNumberLength: 9 },
        { code: "MY", name: "Malaysia", dialCode: "+60", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/320px-Flag_of_Malaysia.svg.png", phoneNumberLength: 9 },
        { code: "SG", name: "Singapore", dialCode: "+65", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/320px-Flag_of_Singapore.svg.png", phoneNumberLength: 8 },
        { code: "KR", name: "South Korea", dialCode: "+82", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/320px-Flag_of_South_Korea.svg.png", phoneNumberLength: 9 },
        { code: "LK", name: "Sri Lanka", dialCode: "+94", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/320px-Flag_of_Sri_Lanka.svg.png", phoneNumberLength: 9 },
        { code: "MM", name: "Myanmar", dialCode: "+95", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/320px-Flag_of_Myanmar.svg.png", phoneNumberLength: 9 },
        { code: "AF", name: "Afghanistan", dialCode: "+93", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/320px-Flag_of_Afghanistan.svg.png", phoneNumberLength: 9 },
        { code: "IR", name: "Iran", dialCode: "+98", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/320px-Flag_of_Iran.svg.png", phoneNumberLength: 10 },
        { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png", phoneNumberLength: 9 },
        { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/320px-Flag_of_the_United_Arab_Emirates.svg.png", phoneNumberLength: 9 },
        { code: "IQ", name: "Iraq", dialCode: "+964", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/320px-Flag_of_Iraq.svg.png", phoneNumberLength: 10 },
        { code: "KG", name: "Kyrgyzstan", dialCode: "+996", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/320px-Flag_of_Kyrgyzstan.svg.png", phoneNumberLength: 9 },
        { code: "KZ", name: "Kazakhstan", dialCode: "+7", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/320px-Flag_of_Kazakhstan.svg.png", phoneNumberLength: 10 },
        { code: "UZ", name: "Uzbekistan", dialCode: "+998", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/320px-Flag_of_Uzbekistan.svg.png", phoneNumberLength: 9 },
        { code: "NP", name: "Nepal", dialCode: "+977", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/320px-Flag_of_Nepal.svg.png", phoneNumberLength: 10 }
    ];

    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [eye, setEye] = useState(false);
    const {tempUser, setTempUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        companyName: '',
        ownerName: '',
        phoneNumber: '',
        email: '',
        password: '',
        termsAccepted: false
    });
    const [errors, setErrors] = useState({});
    const nav = useNavigate()

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    };

    // Import bcryptjs for password hashing

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate Company Name
        if (!formData.companyName) newErrors.companyName = 'Company Name is required';

        // Validate Owner Name
        if (!formData.ownerName) newErrors.ownerName = 'Owner Name is required';

        // Validate Phone Number
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone Number is required';
        } else {
            // Remove dialCode from the phone number
            const phoneNumberWithoutDialCode = formData.phoneNumber.replace(selectedCountry.dialCode, '').trim();
            // Check if the length matches the expected phoneNumberLength
            if (phoneNumberWithoutDialCode.length !== selectedCountry.phoneNumberLength) {
                newErrors.phoneNumber = `Phone Number must be ${selectedCountry.phoneNumberLength} digits long`;
            }
        }

        // Validate Email
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        // Validate Password
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (!validatePassword(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters long, include a capital letter, a number, and a special character';
        }

        // Validate Terms and Conditions
        if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';

        // If there are errors, show them using alert and stop submission
        if (Object.keys(newErrors).length > 0) {
            const errorMessages = Object.values(newErrors).join('\n'); // Combine error messages into a single string
            alert(errorMessages); // Show all errors in a single alert
            return;
        }

        try {
            // Hash the password using bcryptjs
            const saltRounds = 10; // Number of salt rounds for hashing
            const hashedPassword = await bcrypt.hash(formData.password, saltRounds);

            // Create the agency object with the hashed password
            const agency = {
                companyName: formData.companyName,
                ownerName: formData.ownerName,
                phoneNumber: selectedCountry.dialCode + formData.phoneNumber,
                email: formData.email,
                password: hashedPassword, // Store the hashed password
                userRole: "AGENCY" // Set the user role
            };

            // Log the agency object and the original password
            console.log("Agency Object:", agency);
            console.log("Original Password:", formData.password);

            // Send the agency object to the backend using fetch POST
            const response = await fetch('https://hirely-job-portal-server.vercel.app/register/agency', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(agency), // Send the agency object as JSON
            });

            // Check if the request was successful
            if (response.ok) {
                const data = await response.json();
                console.log('Agency registered successfully:', data);

                // Update user state and handle navigation
                setTempUser(data.user);
                console.log(data.user);
                console.log(tempUser); // Store the user data temporarily

                // Navigate to the OTP verification page
                nav("/otp");

                // Clear any error messages
                setErrors({});
            } else {
                // Handle errors from the backend
                const errorData = await response.json();
                alert(errorData.message || "Registration failed. Please try again."); // Show backend error using alert
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred while processing your request."); // Show generic error using alert
        }
    };

    return (
        <div className='w-full py-8 relative min-h-screen flex justify-center items-center'>
            <div className='w-full absolute h-[50vh] bg-[#D9D9D9] -z-10 top-0'></div>
            <div className='bg-white flex flex-col gap-5 pt-10 rounded-lg items-center w-[800px]'>
                <p className='font-semibold'>Post your jobs easily</p>
                <p className='text-[#0275D8] text-[18px] font-semibold w-[500px] text-center'>
                    Create an Agency Account
                </p>
                <form onSubmit={handleSubmit} className='w-[500px] flex flex-col space-y-5'>
                    <div>
                        <label className='text-[14px]'>Company Name <span className='text-[#FF0000]'>*</span></label>
                        <input
                            className='w-full border-2 p-3 mt-2'
                            type="text"
                            placeholder='Enter Agency Name *'
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        />
                        {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
                    </div>

                    <div>
                        <label className='text-[14px]'>Agency Owner Name <span className='text-[#FF0000]'>*</span></label>
                        <input
                            className='w-full border-2 p-3 mt-2'
                            type="text"
                            placeholder='Enter Your Agency Owner Name *'
                            value={formData.ownerName}
                            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        />
                        {errors.ownerName && <p className="text-red-500 text-sm">{errors.ownerName}</p>}
                    </div>

                    <div className="flex items-center border border-gray-300 p-3 rounded-lg relative">
                        <div className="flex items-center cursor-pointer">
                            <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-6 h-4 mr-2" />
                            <span className="text-lg"><IoMdArrowDropdown /></span>
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
                            type="text"
                            placeholder="Enter Your Phone Number"
                            className="ml-12 w-full outline-none"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        />
                    </div>
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}

                    <div>
                        <label className='text-[14px]'>Email Address <span className='text-[#FF0000]'>*</span></label>
                        <input
                            className='w-full border-2 p-3 mt-2'
                            type="text"
                            placeholder='Enter Your Email Address *'
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className='relative'>
                        <label className='text-[14px]'>Password <span className='text-[#FF0000]'>*</span></label>
                        <input
                            className='w-full border-2 p-3 mt-2'
                            type={!eye ? "password" : "text"}
                            placeholder='Enter Your Password *'
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <div className="w-full">
                        <div className="flex items-start space-x-2 text-gray-600">
                            <input
                                type="checkbox"
                                className="h-[18px] w-[18px]"
                                checked={formData.termsAccepted}
                                onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                            />
                            <span className="poppins text-[12px]">
                                By clicking "Create an account", you confirm that you agree to
                                <a href="#" className="text-blue-600"> Hirely Terms and Conditions</a> and
                                <a href="#" className="text-blue-600"> Privacy Policy</a>.
                            </span>
                        </div>
                        {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}
                    </div>

                    <button
                        type="submit"
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
                </form>
            </div>
        </div>
    );
};

export default Agency;