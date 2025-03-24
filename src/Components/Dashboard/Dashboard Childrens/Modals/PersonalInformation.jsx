import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa'; // Import the calendar icon
import { UserContext } from '../../../AuthContext/UserContext';

const PersonalInformation = ({modalID}) => {

    const { user } = useContext(UserContext)

    // State management for each input field
    const [formData, setFormData] = useState({
        fathersName: '',
        mothersName: '',
        dob: null,
        gender: '',
        maritalStatus: '',
        nationality: '',
        religion: '',
        presentAddress: '',
        permanentAddress: ''
    });

    // Event handler to update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Event handler for date picker
    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            dob: date
        });
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to send to the backend
        const personalInfo = {
            fathersName: formData.fathersName,
            mothersName: formData.mothersName,
            dob: formData.dob,
            gender: formData.gender,
            maritalStatus: formData.maritalStatus,
            nationality: formData.nationality,
            religion: formData.religion,
            presentAddress: formData.presentAddress,
            permanentAddress: formData.permanentAddress
        };
        const object = {
            email: user.email,
            dataType: "PersonalInfo",
            data: personalInfo
        }

        // Send data to backend
        try {
            const response = await fetch('https://hirely-job-portal-server.vercel.app/update-user-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            });

            if (response.ok) {
                alert('Personal information updated successfully!');
            } else {
                alert('Failed to update personal information.');
            }
        } catch (error) {
            console.error('Error updating personal information:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Father’s Name <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="fathersName"
                        placeholder="Enter Father’s Name"
                        value={formData.fathersName}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Mother's Name <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="mothersName"
                        placeholder="Enter Mother’s Name"
                        value={formData.mothersName}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className='relative'>
                    <p className='pl-1 text-sm mb-1'>Date of Birth <span className='text-red-700'>*</span></p>
                    <div className="relative">
                        <DatePicker
                            selected={formData.dob}
                            onChange={handleDateChange}
                            dateFormat="MM/dd/yy"
                            placeholderText="mm/dd/yy"
                            className="input input-bordered w-[90%] pl-3 pr-10"
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            required
                        />
                        <div className="absolute inset-y-0 right-5 flex items-center pr-3 pointer-events-none">
                            <FaCalendarAlt className="text-gray-500" />
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Gender <span className='text-red-700'>*</span></p>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Marital Status <span className='text-red-700'>*</span></p>
                    <select
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Select Status</option>
                        <option value="Married">Married</option>
                        <option value="Unmarried">Unmarried</option>
                    </select>
                </div>
                <div>
                    <p className='pl-1 text-sm mb-1'>Nationality <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="nationality"
                        placeholder="Enter"
                        value={formData.nationality}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Religion <span className='text-red-700'>*</span></p>
                    <select
                        name="religion"
                        value={formData.religion}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Select Religion</option>
                        <option value="Christianity">Christianity</option>
                        <option value="Islam">Islam</option>
                        <option value="Hinduism">Hinduism</option>
                        <option value="Buddhism">Buddhism</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Present Address <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="presentAddress"
                        placeholder="Enter Address"
                        value={formData.presentAddress}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <p className='pl-1 text-sm mb-1'>Permanent Address <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="permanentAddress"
                        placeholder="Enter Address"
                        value={formData.permanentAddress}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
            </div>
            <div className='flex justify-center py-10 gap-5 mb-5'>
                <button
                    type="button"
                    className="px-5 py-1 rounded-full border-2 border-[#0275D8]"
                    onClick={() => {
                        setFormData({
                            fathersName: '',
                            mothersName: '',
                            dob: null,
                            gender: '',
                            maritalStatus: '',
                            nationality: '',
                            religion: '',
                            presentAddress: '',
                            permanentAddress: ''
                        })
                        document.getElementById(modalID).close()
                    }}
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

export default PersonalInformation;