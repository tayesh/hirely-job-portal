import React, { useState, useContext } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOffOutline } from 'react-icons/io5';
import { UserContext } from '../../AuthContext/UserContext';

const Settings = () => {
    const { user } = useContext(UserContext);

    const [eye1, setEye1] = useState(false); 
    const [eye2, setEye2] = useState(false); 
    const [eye3, setEye3] = useState(false); 
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handlePasswordChange = async () => {
        setError('');
        setSuccess('');

        if (!user || !user.email) {
            setError('User not found. Please log in again.');
            return;
        }

        if (newPassword.length < 8) {
            setError('New password must be at least 8 characters long.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match.');
            return;
        }

        try {
            const response = await fetch(`https://hirely-job-portal-server.vercel.app/users/password`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: user.email,
                    currentPassword,
                    newPassword,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to update password');
            }

            setSuccess('Password updated successfully');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (err) {
            console.error("Error updating password:", err.message);
            setError(err.message || 'An error occurred while updating the password.');
        }
    };

    return (
        <div className='px-24'>
            <div className='min-h-[930px] border-2 rounded-xl shadow-md mt-10 p-5'>
                <h2 className='text-4xl pl-10 pt-5 text-[#0079C1] font-semibold'>Account Settings</h2>
                <hr className='mt-10' />
                <div>
                    <p className='text-gray-400 pl-1 my-1'>Current Password</p>
                    <div className='relative w-[500px] mb-5'>
                        <input
                            className='w-[500px] border-2 p-3'
                            type={eye1 ? 'text' : 'password'}
                            placeholder='Enter Your Current Password *'
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        {eye1 ? (
                            <FaEye
                                onClick={() => setEye1(false)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        ) : (
                            <IoEyeOffOutline
                                onClick={() => setEye1(true)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        )}
                    </div>

                    <p className='text-gray-400 pl-1 my-1'>Create New Password</p>
                    <div className='relative w-[500px] mb-5'>
                        <input
                            className='w-[500px] border-2 p-3'
                            type={eye2 ? 'text' : 'password'}
                            placeholder='Enter New Password *'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {eye2 ? (
                            <FaEye
                                onClick={() => setEye2(false)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        ) : (
                            <IoEyeOffOutline
                                onClick={() => setEye2(true)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        )}
                    </div>

                    <p className='text-gray-400 pl-1 my-1'>Confirm Password</p>
                    <div className='relative w-[500px] mb-5'>
                        <input
                            className='w-[500px] border-2 p-3'
                            type={eye3 ? 'text' : 'password'}
                            placeholder='Confirm New Password *'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {eye3 ? (
                            <FaEye
                                onClick={() => setEye3(false)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        ) : (
                            <IoEyeOffOutline
                                onClick={() => setEye3(true)}
                                className='absolute top-4 right-3 text-[24px] cursor-pointer'
                            />
                        )}
                    </div>

                    {error && <p className='text-red-500 mb-3'>{error}</p>}
                    {success && <p className='text-green-500 mb-3'>{success}</p>}

                    <button
                        onClick={handlePasswordChange}
                        className='w-fit px-7 py-2 rounded bg-[#1976D2] text-white hover:bg-[#1565C0] transition-colors'
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;