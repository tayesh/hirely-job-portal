import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOffOutline } from 'react-icons/io5';

const Settings = () => {
    const [eye1, setEye1] = useState(false);
    const [eye2, setEye2] = useState(false);
    const [eye3, setEye3] = useState(false);
    const [password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };



    return (
        <div className='px-24'>
            <div className='min-h-[930px] border-2 rounded-xl shadow-md mt-10 p-5'>
                <div className=''>
                    <h2 className='text-4xl pl-10 pt-5 text-[#0079C1] font-semibold '>Account Settings</h2>

                </div>
                <hr className='mt-10' />

                <div>
                    <p className='text-gray-400 pl-1 my-1'>Current Password</p>
                    <div className='relative w-[500px] mb-5'>

                        <input
                            className='w-[500px] border-2 p-3'
                            type={!eye1 ? "password" : "text"}
                            placeholder='Enter Your Current Password *'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {!eye1 ? (
                            <IoEyeOffOutline
                                onClick={() => setEye1(true)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        ) : (
                            <FaEye
                                onClick={() => setEye1(false)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        )}
                    </div>
                    <p className='text-gray-400 pl-1 my-1'>Create New Password</p>

                    <div className='relative w-[500px] mb-5'>
                        <input
                            className='w-[500px] border-2 p-3'
                            type={!eye2 ? "password" : "text"}
                            placeholder='Enter New Password *'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {!eye2 ? (
                            <IoEyeOffOutline
                                onClick={() => setEye2(true)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        ) : (
                            <FaEye
                                onClick={() => setEye2(false)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        )}
                    </div>
                    <p className='text-gray-400 pl-1 my-1'>Confirm Password</p>

                    <div className='relative w-[500px] mb-5'>
                        <input
                            className='w-[500px] border-2 p-3'
                            type={!eye3 ? "password" : "text"}
                            placeholder='Confirm New Password *'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {!eye3 ? (
                            <IoEyeOffOutline
                                onClick={() => setEye3(true)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        ) : (
                            <FaEye
                                onClick={() => setEye3(false)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        )}
                    </div>
                    <p className=' w-fit px-7 py-2 rounded cursor-pointer bg-[#1976D2] text-white'>Submit</p>
                </div>



            </div>


        </div>
    );
};

export default Settings;