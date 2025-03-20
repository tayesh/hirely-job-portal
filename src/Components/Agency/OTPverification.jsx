import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../AuthContext/UserContext';

const OTPverification = () => {
    const [otp, setOtp] = useState(['', '', '', '']); // State to store the OTP digits
    const [countdown, setCountdown] = useState(60); // Start countdown from 60 seconds (1 minute)
    const inputRef = useRef(null); // Ref to focus the hidden input field
    const{tempUser,login,setTempUser}=useContext(UserContext);

    const nav=useNavigate()

    // Start countdown when the component mounts
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000); // Decrease countdown every second
            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [countdown]);

    // Function to handle input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.length <= 4) {
            const newOtp = value.split('').concat(Array(4 - value.length).fill('')); // Split the OTP into digits
            setOtp(newOtp.slice(0, 4)); // Update the OTP state
        }
    };

    // Function to handle click on OTP divs
    const handleOtpDivClick = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Focus the hidden input field
        }
    };

    // Function to format the countdown into minutes and seconds
    const formatCountdown = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    // Function to handle OTP submission
    const handleSubmit = async () => {
        const enteredOTP = otp.join('');
        console.log(tempUser) // Combine the OTP digits into a single string
        try {
            const response = await fetch('https://hirely-job-portal-server.vercel.app/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp: enteredOTP, email:tempUser.email }), // Replace with actual email
            });
            const data = await response.json();
            if (response.ok) {
                const updatedTempUser = { ...tempUser, OTPverified: true };
                console.log(updatedTempUser);
                login(updatedTempUser);
                setTempUser(null);

                alert(data.message);
                nav("/accCreated");
            } else {
                alert(data.message); // OTP verification failed
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert('An error occurred while verifying OTP.');
        }
    };

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <div className="bg-blue-200 p-10 w-[300px] h-[300px] relative rounded-full">
                <img
                    className='absolute left-[65px] top-[25px] w-[200px]'
                    src="https://i.ibb.co.com/mrJTxVMW/Something-went-wrong.png"
                    alt=""
                />
            </div>
            <h2 className='text-2xl font-semibold'>OTP Verification</h2>
            <p className='text-center'>
                We will send you a one-time password <br /> on this mobile number <br />
                <span className='font-semibold text-lg'>+880 1905209098</span>
            </p>

            {/* Hidden input field */}
            <input
                type="number"
                ref={inputRef}
                className='opacity-0 absolute' // Make it invisible but focusable
                onChange={handleInputChange}
                maxLength={4}
            />

            {/* OTP display divs */}
            <div className='flex gap-5 my-5'>
                {otp.map((digit, index) => (
                    <div
                        key={index}
                        className='w-[50px] h-[50px] rounded-full border-2 border-blue-400 bg-sky-200 flex justify-center items-center cursor-pointer'
                        onClick={handleOtpDivClick}
                    >
                        <p className='text-[30px] font-semibold'>{digit}</p>
                    </div>
                ))}
            </div>

            {/* Countdown and "Send OTP" */}
            <p>
                Didn't get OTP?{' '}
                <span
                    className='text-blue-700 cursor-pointer'
                    onClick={async () => {
                        setCountdown(60); // Reset countdown to 60 seconds
                        try {
                            const response = await fetch('https://hirely-job-portal-server.vercel.app/resend-otp', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ email: tempUser.email }), // Replace with actual email
                            });
                            const data = await response.json();
                            alert(data.message); // New OTP sent successfully
                        } catch (error) {
                            console.error('Error resending OTP:', error);
                            alert('An error occurred while resending OTP.');
                        }
                    }}
                >
                    Send OTP
                </span>
            </p>
            {countdown > 0 && (
                <p className='text-gray-600 text-center'>Resend OTP in <br /> <span className='text-red-600'>{formatCountdown(countdown)}</span></p>
            )}

            {/* Submit button */}
            <button
                onClick={handleSubmit}
                className='mt-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            >
                Submit OTP
            </button>
        </div>
    );
};

export default OTPverification;