import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../AuthContext/UserContext';

const Notification = ({ object }) => {
    const { companyName, jobId, timestamp, notificationread } = object;
    const [notificationReadStatus, setNotificationReadStatus] = useState(notificationread ? notificationread : false);
    const nav = useNavigate();
    const { user,fetchUserById } = useContext(UserContext);

    // Update the state when the notificationread prop changes
    useEffect(() => {
        setNotificationReadStatus(notificationread ? notificationread : false);
    }, [notificationread]);

    // Parse the timestamp into a Date object
    const date = new Date(timestamp);

    // Format the date as "Month Day, Year" (e.g., "March 20, 2025")
    const formattedDate = date.toLocaleString('en-US', {
        month: 'long', // Full month name (e.g., "March")
        day: 'numeric', // Day of the month (e.g., "20")
        year: 'numeric', // Full year (e.g., "2025")
    });
    const formattedTime = date.toLocaleTimeString();

    // Handle marking the notification as read
    const handleNotificationRead = async (jobId) => {
        try {
            // Ensure user._id is available
            if (!user?._id) {
                console.error('User ID is missing');
                return;
            }

            console.log('Marking notification as read:', { userId: user._id, jobId });

            const response = await fetch('https://hirely-job-portal-server.vercel.app/notifications/mark-as-read', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user._id, // Send the user's ID
                    jobId: jobId, // Send the job ID
                }),
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                const data = await response.json();
                console.log('Notification marked as read:', data);

                // Update the local state to mark the notification as read
                setNotificationReadStatus(true);
            } else {
                const errorData = await response.json();
                console.error('Failed to mark notification as read:', errorData);
            }
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    return (
        <div onClick={() => nav(`/jobdetails/${jobId}`)} className={`w-full ${notificationReadStatus ? "bg-gray-200" : "bg-sky-200"} my-5 px-10 py-5 rounded`}>
            <div>
                <p className='text-xl'>{companyName} posted a new job</p>
                <p className='text-gray-600'>
                    <span> {formattedDate}</span>
                    <span> {formattedTime}</span>
                </p>
            </div>
            <div>
                <p onClick={(e) => {
                    e.stopPropagation(); // Prevent the parent div's onClick from firing
                    handleNotificationRead(jobId);
                    fetchUserById(user._id)
                    
                }} className='text-white bg-blue-600 px-3 py-1 w-fit'>Mark as Read</p>
            </div>
        </div>
    );
};

export default Notification;