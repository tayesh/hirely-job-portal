import { useContext, useState } from "react";
import bcrypt from "bcryptjs";
import { FaEye, FaEyeSlash, FaRegEye } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../AuthContext/UserContext";

const Registration = () => {
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
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [termsChecked, setTermsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const {isLoggedIn,setIsLoggedIn,setUser}= useContext(UserContext);
    
    const nav = useNavigate();

    // Import bcryptjs for password hashing

    const handleCreateAccount = async () => {
        // Check if terms and conditions are agreed to
        if (!termsChecked) {
            setErrorMessage("Please agree to the terms and conditions.");
            return;
        }
    
        // Validate email format using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }
    
        // Validate password strength using regex
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 8 characters long, include at least one capital letter, one number, and one special character.");
            return;
        }
    
        try {
            // Hash the password using bcryptjs
            const saltRounds = 10; // Number of salt rounds for hashing
            const hashedPassword = await bcrypt.hash(password, saltRounds);
    
            // Create the user object with the hashed password
            const user = {
                name,
                phoneNumber: selectedCountry.dialCode + phoneNumber,
                email,
                password: hashedPassword,
                userRoll:"Candidate" // Store the hashed password
            };
    
            // Log the user object and the original password
            console.log("User Object:", user);
            console.log("Original Password:", password);
    
            // Send the user object to the backend using fetch POST
            const response = await fetch('https://hirely-job-portal-server.vercel.app/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user), // Send the user object as JSON
            });
    
            // Check if the request was successful
            if (response.ok) {
                const data = await response.json();
                console.log('User registered successfully:', data);
                const authUser={
                    name:user.name,
                    phoneNumber:user.phoneNumber,
                    email:user.email,
                    userRoll:user.userRoll

                }
                setUser(authUser);
                setIsLoggedIn(true);
                nav("/");
                
                
                setErrorMessage(""); // Clear any error messages
            } else {
                // Handle errors from the backend
                const errorData = await response.json();
                setErrorMessage(errorData.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setErrorMessage("An error occurred while processing your request.");
        }
    };

    return (
        <div className="bg-white h-[910px] relative flex justify-center items-center">
            <div className="bg-[#D9D9D9] h-[323px] w-full absolute top-0 left-0"></div>

            <div className="relative z-10 bg-white w-[800px] h-[805px] rounded-[22px] mx-[200px]">
                <h2 className="text-center poppins text-[14px] mt-[56px] font-normal text-[#000000DE]">
                    Create your account & find your dream job today!
                </h2>
                <h3 className="text-center nunito font-bold text-[#0275D8] text-[18px] mt-[15px]">
                    <a href="#">Access 1000's of new jobs - apply in minutes.</a>
                </h3>
                <h3 className="text-center text-[19px] nunito font-normal text-[#232323] mt-[26px]">
                    New member Registration
                </h3>

                <div className="mx-[278px]">
                    <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg w-full py-2 mt-4">
                        <img src="https://i.ibb.co.com/HL1BG08s/google.png"
                            alt="Google" className="w-8 h-8" />
                        <p className="roboto text-[16px] text-[#000000DE] font-normal"> Sign up with Google</p>
                    </button>
                </div>

                <div className="text-center text-[16px] text-[#000000DE] mt-[10px] mb-[25px]">OR</div>

                <div className="space-y-4 mx-[148px]">
                    <input
                        type="text"
                        placeholder="Enter Your Name *"
                        className="w-full poppins text-[15px] text-[#00000099] border border-[#0000003B] p-3 rounded-sm pl-[26px]"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            className="ml-12 w-full outline-none"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Enter Your Email Address*"
                        className="w-full poppins text-[15px] text-[#00000099] border border-[#0000003B] p-3 rounded-sm pl-[26px]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create Your Password *"
                            className="w-full poppins text-[15px] text-[#00000099] border border-[#0000003B] p-3 rounded-sm pl-[26px]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="absolute bottom-3 right-6" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash className="h-[20px] w-[22px]" /> : <FaRegEye className="h-[20px] w-[22px]" />}
                        </span>
                    </div>

                    <div className="pt-[36px]">
                        <div className="flex items-start space-x-2 text-gray-600 mr-[20px] ml-[28px]">
                            <input
                                type="checkbox"
                                className="h-[18px] w-[18px]"
                                checked={termsChecked}
                                onChange={(e) => setTermsChecked(e.target.checked)}
                            />
                            <span className="poppins text-[12px]">
                                By clicking "Create an account", you confirm that you agree to
                                <a href="#" className="text-blue-600"> Hirely Terms and Conditions</a> and
                                <a href="#" className="text-blue-600"> Privacy Policy</a>.
                            </span>
                        </div>
                    </div>

                    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

                    <button
                        className="btn roboto text-[14px] font-normal bg-[#1976D2] text-white w-full py-3 rounded-lg mt-4"
                        onClick={handleCreateAccount}
                    >
                        Create an account
                    </button>

                    <p className="text-center nunito text-[16px] text-[#232323] mt-[23px]">
                        Already have an account? <a href="#" className="text-[#0275D8]">Log In</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;