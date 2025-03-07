import React, { useState } from "react";

const SearchJobsByBenefits = ({ isOpen, onClose, onSearch }) => {
    const [selectedBenefits, setSelectedBenefits] = useState([]);

    // List of benefits under each category
    const benefitsCategories = {
        "Working Hours and Leave": [
            "More than 120 days off per year",
            "Can leave the company by 17:00",
            "Long vacations available",
            "No overtime work",
            "Maternity and paternity leave system",
            "Two days off per week",
            "Leave the office by 5:00 p.m.",
            "Shorter working hours OK",
            "Less than 7 hours of work",
            "Remote work available",
        ],
        "Job Specific": [
            "120 days or more per holidays",
            "Monthly average overtime hours within 20 hours",
            "Operating hours within 7 hours",
            "Annual holiday 120 days or more",
            "Continuous vacation for 5 days or more OK",
            "There is a continuous leave system for 5 days or more",
            "There is a continuous leave system for 2 weeks or more",
            "Opening time after 10 am",
            "Night Shift Available",
        ],
    };

    // Handle benefit selection
    const handleBenefitChange = (benefit) => {
        setSelectedBenefits((prev) =>
            prev.includes(benefit)
                ? prev.filter((b) => b !== benefit) // Remove if already selected
                : [...prev, benefit] // Add if not selected
        );
    };

    // Handle search button click
    const handleSearchClick = () => {
        onSearch(selectedBenefits); // Pass selected benefits to parent component
        onClose(); // Close the modal
    };

    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] max-w-2xl">
                <h2 className="text-xl font-bold mb-4">Search Jobs By Benefits</h2>

                {/* Render benefits categories */}
                {Object.entries(benefitsCategories).map(([category, benefits]) => (
                    <div key={category} className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {benefits.map((benefit) => (
                                <label key={benefit} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedBenefits.includes(benefit)}
                                        onChange={() => handleBenefitChange(benefit)}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                    />
                                    <span>{benefit}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSearchClick}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchJobsByBenefits;