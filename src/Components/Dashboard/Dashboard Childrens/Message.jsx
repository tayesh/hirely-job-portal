import React, { useContext, useEffect, useState } from 'react';
import { IoSend } from "react-icons/io5";
import { UserContext } from '../../AuthContext/UserContext';

const Message = () => {
    const [message, setMessage] = useState('');
    const [chats, setChats] = useState([]);
    const [error, setError] = useState(null);
    const [counter, setCounter] = useState(0); // Counter state

    const { user } = useContext(UserContext);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const fetchAllMessages = async () => {
        if (!user?.email) {
            setError('User email is not available');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/messages/${user.email}`);
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            const data = await response.json();
            setChats(data);
            // console.log('Fetched Messages:', data);
        } catch (error) {
            console.error('Error fetching messages:', error);
            setError('Failed to fetch messages');
        }
    };

    // Fetch messages whenever the counter changes
    useEffect(() => {
        fetchAllMessages();
    }, [counter]); // Dependency on counter

    // Set up an interval to increment the counter every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1); // Increment counter every second
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // No dependencies, runs only once on mount

    const handleSendMessage = async () => {
        if (message.trim() === '') {
            alert('Message cannot be empty');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name:user.name, email: user.email, messageText: message, userRoll: user.userRoll }),
            });
            const data = await response.json();

            if (!response.ok) {
                console.log('Failed to send message', data);
                setError('Failed to send message');
                return;
            }

            console.log('Message sent successfully:', data);
            setMessage(''); // Clear the textbox after sending
            fetchAllMessages(); // Re-fetch messages to update the UI
        } catch (error) {
            console.error('Error sending message:', error);
            setError('Failed to send message');
        }
    };

    return (
        <div className='px-24'>
            <div className='min-h-[930px] border-2 rounded-xl shadow-md mt-10 p-5'>
                <div className=''>
                    <h2 className='text-4xl pl-10 pt-5 text-[#0079C1] font-semibold w-[210px] flex-shrink-0'>Message</h2>
                    {error && <p className='text-red-500 pl-10 pt-5'>{error}</p>}
                </div>
                <hr className='mt-10' />
                <div className='min-h-[800px] flex flex-col-reverse items-center justify-start overflow-y-scroll'>
                    <div className='w-full flex items-center gap-5 '>
                        <textarea
                            placeholder="Write to admin"
                            className="textarea textarea-bordered textarea-sm text-xl w-[90%]"
                            value={message}
                            onChange={handleInputChange}
                        />
                        <IoSend
                            className='text-[40px] cursor-pointer'
                            onClick={handleSendMessage}
                            disabled={message.trim() === ''}
                        />
                    </div>
                    <div className='w-full'>
                        {chats.length > 0 ? (
                            chats.map((chat, index) => (
                                <div key={index} className={`w-full my-4 flex ${chat.sentBy.toLowerCase() !== "candidate" ? "justify-start" : "justify-end"}`}>
                                    <div className={`${chat.sentBy.toLowerCase() !== "candidate" ? "bg-gray-300" : "bg-blue-300"} w-[60%] px-5 py-3 rounded`}>
                                        <p className='text-xs text-gray-600 font-medium my-2'>{chat.sentBy}</p>
                                        <p className='text-xl font-semibold'>{chat.messageText}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-2xl font-medium pl-10 mt-10'>There is No message</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;