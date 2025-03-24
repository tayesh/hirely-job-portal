import React, { useContext, useEffect, useState } from 'react';
import MessageModal from './MessageModal';
import { IoSend } from 'react-icons/io5'; // Import IoSend
import { UserContext } from '../../AuthContext/UserContext';

const AdminAllMessages = () => { // Assuming user is passed as a prop
    const [AllMessages, setAllMessages] = useState([]);
    
    const [error, setError] = useState(null);
    

    

    const fetchAllMessages = async () => {
        try {
            const response = await fetch(`http://localhost:5000/messages`);
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            const data = await response.json();
            setAllMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error);
            setError('Failed to fetch messages');
        }
    };

    useEffect(() => {
        fetchAllMessages();
    }, []);

    return (
        <div className='px-24'>
            <div className='min-h-[930px] border-2 rounded-xl shadow-md mt-10 p-5'>
                <div className=''>
                    <h2 className='text-4xl pl-10 pt-5 text-[#0079C1] font-semibold w-[210px] flex-shrink-0'>Message</h2>
                    {error && <p className='text-red-500 pl-10 pt-5'>{error}</p>}
                </div>
                <hr className='mt-10' />
                <div className='w-full flex flex-col gap-5 py-5'>
                    {AllMessages?.map((item, index) => (
                        <MessageModal key={index} object={item} fetchM={fetchAllMessages} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminAllMessages;