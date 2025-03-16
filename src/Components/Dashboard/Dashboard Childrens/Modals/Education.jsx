import React, { useContext, useState } from 'react';
import { UserContext } from '../../../AuthContext/UserContext';

const Education = ({ modalID }) => { // Pass `modalID` as a prop to identify the modal
    // State management for each input field

        const { user } = useContext(UserContext)
    
    const [formData, setFormData] = useState({
        degree: '',
        instituteName: '',
        graduationYear: '',
        grade: '',
        fieldOfStudy: '',
        currentlyStudying: false
    });

    // Event handler to update state
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send data to backend
        try {
            const response = await fetch('http://localhost:5000/update-user-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: user.email, // Replace with the logged-in user's email
                    dataType: 'Education',
                    data: formData
                })
            });

            if (response.ok) {
                alert('Education details updated successfully!');
                document.getElementById(modalID).close(); // Close the modal after successful submission
            } else {
                alert('Failed to update education details.');
            }
        } catch (error) {
            console.error('Error updating education details:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-x-20 gap-y-5'>
                {/* Degree */}
                <div>
                    <p className='pl-1 text-sm mb-1'>Degree <span className='text-red-700'>*</span></p>
                    <select
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Ex: Bachelor’s</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Diploma">Diploma</option>
                        <option value="HSC">HSC</option>
                        <option value="Master">Master</option>
                        <option value="MBBS">MBBS</option>
                        <option value="PDGHRM">PDGHRM</option>
                        <option value="PHD">PHD</option>
                        <option value="PHR">PHR</option>
                        <option value="SPHR">SPHR</option>
                        <option value="SSC">SSC</option>
                    </select>
                </div>

                {/* University or Institute Name */}
                <div>
                    <p className='pl-1 text-sm mb-1'>University or Institute Name <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="instituteName"
                        placeholder="Enter Institute Name"
                        value={formData.instituteName}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Graduation Year */}
                <div>
                    <p className='pl-1 text-sm mb-1'>Graduation Year <span className='text-red-700'>*</span></p>
                    <select
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Ex: {new Date().getFullYear()}</option>
                        {Array.from({ length: new Date().getFullYear() - 1949 }, (_, index) => {
                            const year = 1950 + index;
                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </div>

                {/* Grade */}
                <div>
                    <p className='pl-1 text-sm mb-1'>Grade <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="grade"
                        placeholder="A, A+.."
                        value={formData.grade}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Field of Study */}
                <div>
                    <p className='pl-1 text-sm mb-1'>Field of Study <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="fieldOfStudy"
                        placeholder="e.g., Mathematics"
                        value={formData.fieldOfStudy}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Currently Studying */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="currentlyStudying"
                        name="currentlyStudying"
                        checked={formData.currentlyStudying}
                        onChange={handleChange}
                        className="checkbox checkbox-sm rounded-none shadow-md"
                    />
                    <label htmlFor="currentlyStudying" className="text-sm text-gray-700">
                        Currently Studying
                    </label>
                </div>
            </div>

            {/* Cancel and Submit Buttons */}
            <div className='flex justify-center py-10 gap-5 mb-5'>
                <button
                    type="button" // Ensure this is type="button" to prevent form submission
                    className="px-5 py-1 rounded-full border-2 border-[#0275D8]"
                    onClick={() => {
                        setFormData({
                            degree: '',
                            instituteName: '',
                            graduationYear: '',
                            grade: '',
                            fieldOfStudy: '',
                            currentlyStudying: false

                        })
                        document.getElementById(modalID).close()
                    }} // Close the modal
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

export default Education;