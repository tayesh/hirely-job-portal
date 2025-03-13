import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const WorkExp = () => {
    const [dob, setDob] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className=''>
            <div className='grid grid-cols-5 gap-4 '>
                {/* Other fields */}
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Designation <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Type Your Designation"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Employment Type <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered w-full text-gray-400"
                    >
                        <option disabled selected>
                            Select Type
                        </option>
                        <option>Contract</option>
                        <option>Freelance</option>
                        <option>Full-Time</option>
                        <option>Internship</option>
                        <option>Part Time</option>
                        <option>Spot Job</option>
                    </select>
                </div>
                <div>
                    <p className='pl-1 text-sm mb-1'>Company Name <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Enter Your Company Name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Employment Type <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered w-full text-gray-400"
                    >
                        <option disabled selected>
                            Select Type
                        </option>
                        <option>Education</option>
                        <option>Engineering</option>
                        <option>Food Services</option>
                        <option>Information Technology</option>
                        <option>Pharmaceuticals</option>
                        <option>Other Services</option>
                    </select>
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Department <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered w-full text-gray-400"
                    >
                        <option disabled selected>
                            Add Department
                        </option>
                        <option>IT & Software Development</option>
                        <option>Sales</option>
                        <option>Human Resources</option>
                        <option>Accounting & Finance</option>
                        <option>Legal Services</option>
                        <option>Call Center & Customer Services</option>
                    </select>
                </div>
                <div>
                    <p className='pl-1 text-sm mb-1'>Company Location <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Type Location"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Candidate Work Type <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered w-full text-gray-400"
                    >
                        <option disabled selected>
                            Select Work Type
                        </option>
                        <option>Onsite</option>
                        <option>Hybrid</option>
                        <option>Remote</option>
                    </select>
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Date of Birth <span className='text-red-700'>*</span></p>
                    <div className="relative w-full">
                        <DatePicker
                            selected={dob}
                            onChange={(date) => setDob(date)}
                            dateFormat="MM/dd/yy"
                            placeholderText="mm/dd/yy"
                            className="input input-bordered w-[375px] pl-3 pr-10"
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                        />
                        {/* Calendar Icon */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FaCalendarAlt className="text-gray-500" />
                        </div>
                    </div>
                </div>
                <div >
                    <p className='pl-1 text-sm mb-1'>End Date <span className='text-red-700'>*</span></p>
                    <div className="relative w-full">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            dateFormat="MM/dd/yy"
                            placeholderText="mm/dd/yy"
                            className="input input-bordered w-full pl-3 pr-10"
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                        />
                        {/* Calendar Icon */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FaCalendarAlt className="text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-10 gap-5 mb-5'>
                <form method="dialog">
                    <button className="px-5 py-1 rounded-full border-2 border-[#0275D8]">Cancel</button>
                </form>
                <button className="px-5 py-1 rounded-full border-2 border-[#0275D8] bg-[#0275D8] text-white">Submit</button>
            </div>
        </div>
    );
};

export default WorkExp;