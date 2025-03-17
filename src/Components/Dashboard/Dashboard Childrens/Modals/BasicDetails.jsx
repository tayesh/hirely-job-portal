import React, { useContext, useState } from 'react';
import { UserContext } from '../../../AuthContext/UserContext';

const BasicDetails = ({modalID}) => {
    const {user} =useContext(UserContext)
    // State management for each input field
    const [formData, setFormData] = useState({
        totalYearsOfExperience: '',
        currency: '',
        presentSalary: '',
        expectedSalary: '',
        employmentType: '',
        salaryType: '',
        jobLevel: '',
        bio: ''
    });

    // Event handler to update state
    const handleChange = (e) => {
        
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); 
        const object ={
            email:user.email,
            dataType: "BasicDetails",
            data:formData
        }// Prevent default form submission behavior

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
                alert('Form submitted successfully!');
            } else {
                alert('Failed to submit form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-4 gap-5'>
                <div>
                    <p className='pl-1 text-sm mb-1'>Total Year Of Experience <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="totalYearsOfExperience"
                        placeholder="1.5 Year"
                        value={formData.totalYearsOfExperience}
                        onChange={handleChange}
                        className="input input-bordered"
                        required
                    />
                </div>
                <div>
                    <p className='pl-1 text-sm mb-1'>Currency <span className='text-red-700'>*</span></p>
                    <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        className="select select-bordered text-gray-400"
                        required
                    >
                        <option disabled value="">Dollar/Taka</option>
                        <option value="Dollar">Dollar</option>
                        <option value="Taka">Taka</option>
                    </select>
                </div>
                <div>
                    <p className='pl-1 text-sm mb-1'>Present Salary<span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="presentSalary"
                        placeholder="10,000"
                        value={formData.presentSalary}
                        onChange={handleChange}
                        className="input input-bordered"
                        required
                    />
                </div>
                <div>
                    <p className='pl-1 text-sm mb-1'>Expected Salary <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="expectedSalary"
                        placeholder="50,000"
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className='col-span-2'>
                    <p className='pl-1 text-sm mb-1'>Employment Type <span className='text-red-700'>*</span></p>
                    <select
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Full Time/Part Time</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                    </select>
                </div>
                <div className=''>
                    <p className='pl-1 text-sm mb-1'>Salary Type <span className='text-red-700'>*</span></p>
                    <select
                        name="salaryType"
                        value={formData.salaryType}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Monthly/Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Weekly">Weekly</option>
                    </select>
                </div>
                <div className=''>
                    <p className='pl-1 text-sm mb-1'>Looking For Job Level <span className='text-red-700'>*</span></p>
                    <select
                        name="jobLevel"
                        value={formData.jobLevel}
                        onChange={handleChange}
                        className="select select-bordered w-full text-gray-400"
                        required
                    >
                        <option disabled value="">Student/Senior</option>
                        <option value="Senior">Senior</option>
                        <option value="Student">Student</option>
                    </select>
                </div>
                <div className='col-span-4'>
                    <p className='pl-1 text-sm mb-1 w-[80%] mx-auto'>Bio <span className='text-red-700'>*</span></p>
                    <div className='flex justify-center w-full'>
                        <textarea
                            name="bio"
                            placeholder="Bio"
                            value={formData.bio}
                            onChange={handleChange}
                            className="textarea textarea-bordered textarea-md w-[80%]"
                            required
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-10 gap-5 mb-5'>
                <button
                    type="button"
                    className="px-5 py-1 rounded-full border-2 border-[#0275D8]"
                    onClick={() =>{
                        setFormData({
                            totalYearsOfExperience: '',
                            currency: '',
                            presentSalary: '',
                            expectedSalary: '',
                            employmentType: '',
                            salaryType: '',
                            jobLevel: '',
                            bio: ''
                        });
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

export default BasicDetails;