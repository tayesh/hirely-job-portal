import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../AuthContext/UserContext';
import { IoSend } from 'react-icons/io5';

const MessageModal = ({ object, fetchM }) => {
    const { _id, email, messages } = object;
    const { user } = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [counter, setCounter] = useState(0); // Counter state

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

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
                body: JSON.stringify({ email: email, messageText: message, userRoll: user.userRoll }),
            });
            const data = await response.json();

            if (!response.ok) {
                console.log('Failed to send message', data);
                setError('Failed to send message');
                return;
            }

            console.log('Message sent successfully:', data);
            setMessage(''); // Clear the textbox after sending
            fetchM(); // Re-fetch messages to update the UI
        } catch (error) {
            console.error('Error sending message:', error);
            setError('Failed to send message');
        }
    };

    // Set up an interval to increment the counter every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1); // Increment counter every second
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // No dependencies, runs only once on mount

    // Fetch messages whenever the counter changes
    useEffect(() => {
        fetchM();
    }, [counter]); // Dependency on counter

    return (
        <div>
            <p onClick={() => document.getElementById(_id).showModal()}>{email}</p>

            {/* Modal */}
            <dialog id={_id} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* Close button */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='min-h-[600px] flex flex-col-reverse items-center justify-start overflow-y-scroll scroll-m-0'>
                        <div className='w-full flex items-center gap-5 '>
                            <textarea
                                placeholder={`Write to ${email}`}
                                className="textarea textarea-bordered textarea-sm text-xl w-[90%]"
                                value={message}
                                onChange={handleInputChange}
                            />
                            <button
                                className='text-[40px] cursor-pointer'
                                onClick={handleSendMessage}
                                disabled={message.trim() === ''}
                            >
                                <IoSend />
                            </button>
                        </div>
                        <div className='w-full'>
                            {messages.length > 0 ? (
                                messages.map((messagee, index) => (
                                    <div key={index} className={`w-full my-4 flex ${messagee.sentBy.toLowerCase() === "candidate" ? "justify-start" : "justify-end"}`}>
                                        <div className={`${messagee.sentBy.toLowerCase() === "candidate" ? "bg-gray-300" : "bg-blue-300"} w-[60%] px-5 py-3 rounded`}>
                                            <p className='text-xs text-gray-600 font-medium mb-1'>{messagee.sentBy}</p>
                                            <p className='text-xl font-semibold'>{messagee.messageText}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className='text-2xl font-medium pl-10 mt-10'>There is No message</p>
                            )}
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MessageModal;