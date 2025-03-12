import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa'; // Import the calendar icon

const PersonalInformation = () => {
    const [dob, setDob] = useState(null);

    return (
        <div>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Father’s Name <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Enter Father’s Name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Mother's Name <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Enter Mother’s Name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className='relative'>
                    <p className='pl-1 text-sm mb-1'>Date of Birth <span className='text-red-700'>*</span></p>
                    <div className="relative">
                        <DatePicker
                            selected={dob}
                            onChange={(date) => setDob(date)}
                            dateFormat="MM/dd/yy"
                            placeholderText="mm/dd/yy"
                            className="input input-bordered w-[90%] pl-3 pr-10" // Added padding for the icon
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                        />
                        {/* Calendar Icon */}
                        <div className="absolute inset-y-0 right-5 flex items-center pr-3 pointer-events-none">
                            <FaCalendarAlt className="text-gray-500" />
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <p className=' pl-1 text-sm mb-1'> Gender <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered w-full text-gray-400"

                    >
                        <option disabled selected>
                            Select Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className='col-span-2'>
                    <p className=' pl-1 text-sm mb-1'>Marital Satus <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered w-full text-gray-400"

                    >
                        <option disabled selected>
                            Select Status
                        </option>
                        <option>Married</option>
                        <option>Unmarried</option>
                    </select>
                </div>
                <div >
                    <p className='pl-1 text-sm mb-1'>Nationality <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Enter"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className='col-span-2'>
                    <p className=' pl-1 text-sm mb-1'>Religion <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered w-full text-gray-400"

                    >
                        <option disabled selected>
                            Select Religion
                        </option>
                        <option>Christianity</option>
                        <option>Islam</option>
                        <option>Hinduism</option>
                        <option>Buddhism</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className='col-span-2' >
                    <p className='pl-1 text-sm mb-1'>Present Address <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Enter Address"
                        className="input input-bordered w-full"
                    />
                </div>
                <div >
                    <p className='pl-1 text-sm mb-1'>Permanent Address <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Enter Address"
                        className="input input-bordered w-full"
                    />
                </div>
            </div>
            <div className='flex justify-center py-10 gap-5 mb-5'>
                
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="px-5 py-1 rounded-full border-2 border-[#0275D8]">Cancel</button>
                </form>
                <button className="px-5 py-1 rounded-full border-2 border-[#0275D8] bg-[#0275D8] text-white">Submit</button>


            </div>
        </div>
    );
};

export default PersonalInformation;