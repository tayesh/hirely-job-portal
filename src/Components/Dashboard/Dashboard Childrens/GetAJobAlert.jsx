import React, { useState } from 'react';

const GetAJobAlert = () => {
    // State to track the active button
    const [activeButton, setActiveButton] = useState('EARLIER');

    return (
        <div className='px-24'>
            <div className='min-h-[930px] border-2 rounded-xl shadow-md mt-10 p-5'>
                <div className=''>
                    <div className='flex justify-between items-end'>
                        <h2 className='text-4xl pl-10 pt-5 text-[#0079C1] font-semibold w-[210px] flex-shrink-0'>Notifications</h2>
                        <div className='flex gap-5'>
                            <p
                                className={`px-7 py-2 rounded cursor-pointer ${
                                    activeButton === 'EARLIER'
                                        ? 'bg-[#1976D2] text-white' // Active style
                                        : 'bg-[#E5F5FF]' // Inactive style
                                }`}
                                onClick={() => setActiveButton('EARLIER')} // Set EARLIER as active
                            >
                                EARLIER
                            </p>
                            <p
                                className={`px-7 py-2 rounded cursor-pointer ${
                                    activeButton === 'RECENT'
                                        ? 'bg-[#1976D2] text-white' // Active style
                                        : 'bg-[#E5F5FF]' // Inactive style
                                }`}
                                onClick={() => setActiveButton('RECENT')} // Set RECENT as active
                            >
                                RECENT
                            </p>
                        </div>
                    </div>
                    <p className='text-2xl font-medium pl-10 mt-10'>There is No message</p>
                </div>
                <hr className='mt-10' />
            </div>
        </div>
    );
};

export default GetAJobAlert;