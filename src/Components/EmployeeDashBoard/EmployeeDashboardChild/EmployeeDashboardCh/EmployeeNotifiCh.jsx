import { useContext, useEffect } from "react";
import { UserContext } from "../../../AuthContext/UserContext";

const EmployeeNotifiCh = () => {
    const { user, fetchUserById } = useContext(UserContext);

    useEffect(() => {
        if (user?._id) {
            fetchUserById(user._id); // Fetch the latest user data (including notifications)
        }
    }, [user?._id]); // Re-fetch when the user ID changes

    const handleMarkAsRead = async (jobId) => {
        try {
            const response = await fetch('http://localhost:5000/notifications/mark-as-read', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user._id, // Agency's user ID
                    jobId: jobId, // Job ID from the notification
                }),
            });

            if (response.ok) {
                // Fetch the updated user data to reflect the changes
                await fetchUserById(user._id);
            } else {
                const errorData = await response.json();
                console.error('Failed to mark notification as read:', errorData);
            }
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    return (
        <div>
            <div className="mt-6 mx-12">
                <div className="shadow-2xl border-2 border-gray-400 rounded-xl">
                    <div className="flex gap-4 justify-end mr-12 mt-7">
                        <button className="px-6 py-3 rounded epilogue text-[16px] text-[#F8F9FA] bg-[#0079C1]">EARLIER</button>
                        <button className="px-6 py-3 rounded epilogue text-[16px] text-[#0079C1] bg-white border-2 border-[#0079C1]">RECENT</button>
                    </div>
                    <div className="pt-0 pl-8">
                        <h2 className=" text-[32px] font-semibold  text-black">Notifications</h2>
                    </div>
                    <div className="divider"></div>
                    {user?.notifications?.length === 0 ? (
                        <div className="flex justify-center items-center">
                            <img src="https://i.ibb.co.com/HDLzFmFN/notfound.png" alt="" />
                            <p className="text-center mb-16 text-[36px] font-semibold  text-black">No Result Found!</p>
                        </div>
                    ) : (
                        <div className="p-8">
                            {user?.notifications?.map((notification) => (
                                <div
                                    key={notification._id}
                                    className={`w-full ${notification.notificationRead ? "bg-gray-200" : "bg-sky-200"} my-5 px-10 py-5 rounded`}
                                >
                                    <div>
                                        <p className='text-xl'>{notification.CandidateName} applied for {notification.jobTitle}</p>
                                        <p className='text-gray-600'>
                                            <span>{new Date(notification.applyTime).toLocaleDateString()}</span>
                                            <span> {new Date(notification.applyTime).toLocaleTimeString()}</span>
                                        </p>
                                    </div>
                                    {!notification.notificationRead && (
                                        <div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleMarkAsRead(notification.jobId);
                                                }}
                                                className='text-white bg-blue-600 px-3 py-1 w-fit'
                                            >
                                                Mark as Read
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmployeeNotifiCh;