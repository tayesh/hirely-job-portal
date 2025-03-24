import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { UserContext } from '../../../AuthContext/UserContext';

const WorkExp = ({ modalID }) => { // Pass `modalID` as a prop to identify the modal
    // State management for each input field
    const [formData, setFormData] = useState({
        designation: '',
        employmentType: '',
        companyName: '',
        industryType: '',
        department: '',
        companyLocation: '',
        workType: '',
        startDate: null,
        endDate: null
    });

        const { user } = useContext(UserContext)
    

    // Event handler to update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Event handler for date pickers
    const handleStartDateChange = (date) => {
        setFormData({
            ...formData,
            startDate: date
        });
    };

    const handleEndDateChange = (date) => {
        setFormData({
            ...formData,
            endDate: date
        });
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate input
        if (!formData.designation || !formData.employmentType || !formData.companyName || !formData.startDate) {
            alert('Please fill out all required fields.');
            return;
        }

        // Prepare the data to send to the backend
        const workExpData = {
            designation: formData.designation,
            employmentType: formData.employmentType,
            companyName: formData.companyName,
            industryType: formData.industryType,
            department: formData.department,
            companyLocation: formData.companyLocation,
            workType: formData.workType,
            startDate: formData.startDate,
            endDate: formData.endDate
        };

        // Send data to backend
        try {
            const response = await fetch('http://localhost:5000/update-user-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: user.email, // Replace with the logged-in user's email
                    dataType: 'WorkExp',
                    data: workExpData
                })
            });

            if (response.ok) {
                alert('Work experience added successfully!');
                document.getElementById(modalID).close(); // Close the modal after successful submission
            } else {
                alert('Failed to add work experience.');
            }
        } catch (error) {
            console.error('Error adding work experience:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-5 gap-4'>
                {/* Designation */}
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Designation <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="designation"
                        placeholder="Type Your Designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Employment Type */}
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Employment Type <span className='text-red-700'>*</span></p>
                    <select
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Select Type</option>
                        <option>Contract</option>
                        <option>Freelance</option>
                        <option>Full-Time</option>
                        <option>Internship</option>
                        <option>Part Time</option>
                        <option>Spot Job</option>
                    </select>
                </div>

                {/* Company Name */}
                <div>
                    <p className='pl-1 text-sm mb-1'>Company Name <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Enter Your Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Industry Type */}
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Industry Type <span className='text-red-700'>*</span></p>
                    <select
                        name="industryType"
                        value={formData.industryType}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Select Type</option>
                        <option>Education</option>
                        <option>Engineering</option>
                        <option>Food Services</option>
                        <option>Information Technology</option>
                        <option>Pharmaceuticals</option>
                        <option>Other Services</option>
                    </select>
                </div>

                {/* Department */}
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Department <span className='text-red-700'>*</span></p>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Add Department</option>
                        <option>IT & Software Development</option>
                        <option>Sales</option>
                        <option>Human Resources</option>
                        <option>Accounting & Finance</option>
                        <option>Legal Services</option>
                        <option>Call Center & Customer Services</option>
                    </select>
                </div>

                {/* Company Location */}
                <div>
                    <p className='pl-1 text-sm mb-1'>Company Location <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="companyLocation"
                        placeholder="Type Location"
                        value={formData.companyLocation}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Work Type */}
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Candidate Work Type <span className='text-red-700'>*</span></p>
                    <select
                        name="workType"
                        value={formData.workType}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Select Work Type</option>
                        <option>Onsite</option>
                        <option>Hybrid</option>
                        <option>Remote</option>
                    </select>
                </div>

                {/* Start Date */}
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Start Date <span className='text-red-700'>*</span></p>
                    <div className="relative w-full">
                        <DatePicker
                            selected={formData.startDate}
                            onChange={handleStartDateChange}
                            dateFormat="MM/dd/yy"
                            placeholderText="mm/dd/yy"
                            className="input input-bordered w-[375px] pl-3 pr-10"
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            required
                        />
                        {/* Calendar Icon */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FaCalendarAlt className="text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* End Date */}
                <div>
                    <p className='pl-1 text-sm mb-1'>End Date <span className='text-red-700'>*</span></p>
                    <div className="relative w-full">
                        <DatePicker
                            selected={formData.endDate}
                            onChange={handleEndDateChange}
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

            {/* Cancel and Submit Buttons */}
            <div className='flex justify-center py-10 gap-5 mb-5'>
                <button
                    type="button" // Ensure this is type="button" to prevent form submission
                    className="px-5 py-1 rounded-full border-2 border-[#0275D8]"
                    onClick={() => document.getElementById(modalID).close()} // Close the modal
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-5 py-1 rounded-full border-2 border-[#0275D8] bg-[#0275D8] text-white"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default WorkExp;