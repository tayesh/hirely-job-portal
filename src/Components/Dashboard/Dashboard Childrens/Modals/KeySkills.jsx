import React, { useContext, useState } from 'react';
import { UserContext } from '../../../AuthContext/UserContext';

const KeySkills = ({ modalID }) => {
    // State for the current skill and years of experience
    const [skill, setSkill] = useState('');
    const [years, setYears] = useState('');

    const { user } = useContext(UserContext)

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate input
        if (!skill.trim() || !years.trim()) {
            alert('Please fill out both fields.');
            return;
        }
    
        // Prepare the data to send to the backend
        const skillData = {
            name: skill,
            years: years
        };
    
        // Send data to backend
        try {
            const response = await fetch('https://hirely-job-portal-server.vercel.app/update-user-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: user.email, // Replace with the logged-in user's email
                    dataType: 'KeySkills',
                    data: skillData
                })
            });
    
            if (response.ok) {
                alert('Skill added successfully!');
                setSkill(''); // Clear the input field
                setYears(''); // Clear the input field
            } else {
                alert('Failed to add skill.');
            }
        } catch (error) {
            console.error('Error adding skill:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-x-20 gap-y-5'>
                {/* Skill Input */}
                <div>
                    <p className='pl-1 text-sm mb-1'>Skill <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        placeholder="Enter Skill"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Years of Experience Input */}
                <div>
                    <p className='pl-1 text-sm mb-1'>Number of Years <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        placeholder="Number of Years"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
            </div>

            {/* Cancel and Submit Buttons */}
            <div className='flex justify-center py-10 gap-5 mb-5'>
                <button
                    type="button" // Ensure this is type="button" to prevent form submission
                    className="px-5 py-1 rounded-full border-2 border-[#0275D8]"
                    onClick={() =>{
                        setSkill("")
                        setYears("")
                         document.getElementById(modalID).close()}} // Close the modal
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-5 py-1 rounded-full border-2 border-[#0275D8] bg-[#0275D8] text-white"
                >
                    Add Skill
                </button>
            </div>
        </form>
    );
};

export default KeySkills;