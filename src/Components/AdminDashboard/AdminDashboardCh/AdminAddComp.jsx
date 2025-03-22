import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminAddComp = () => {
    const [formData, setFormData] = useState({
        Company_Name: '',
        Location: '',
        Job_Opening: '',
        Company_Image: '',
        Logo_Image: '',
        CEO_Name: '',
        CEO_Details: '',
        COO_Name: '',
        COO_Details: '',
        Company_Does: '',
        How_Company_Do: '',
        Their_Culture: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/companies', formData);
            console.log('Company added successfully:', response.data);

            // Success message with SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Company added successfully!',
                confirmButtonText: 'OK'
            });

            // Reset form after successful submission
            setFormData({
                Company_Name: '',
                Location: '',
                Job_Opening: '',
                Company_Image: '',
                Logo_Image: '',
                CEO_Name: '',
                CEO_Details: '',
                COO_Name: '',
                COO_Details: '',
                Company_Does: '',
                How_Company_Do: '',
                Their_Culture: '',
            });
        } catch (error) {
            console.error('There was an error adding the company:', error);

            // Error message with SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to add company.',
                confirmButtonText: 'Try Again'
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-2 sm:px-3 lg:px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Add Company</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Company Name</label>
                            <input
                                type="text"
                                name="Company_Name"
                                value={formData.Company_Name}
                                onChange={handleChange}
                                placeholder="Enter company name"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Location</label>
                            <input
                                type="text"
                                name="Location"
                                value={formData.Location}
                                onChange={handleChange}
                                placeholder="Enter company location"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* Job Opening */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Job Opening</label>
                            <input
                                type="number"
                                name="Job_Opening"
                                value={formData.Job_Opening}
                                onChange={handleChange}
                                placeholder="Enter number of job openings"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* Company Image URL */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Company Image URL</label>
                            <input
                                type="text"
                                name="Company_Image"
                                value={formData.Company_Image}
                                onChange={handleChange}
                                placeholder="Enter company image URL"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* Logo Image URL */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Logo Image URL</label>
                            <input
                                type="text"
                                name="Logo_Image"
                                value={formData.Logo_Image}
                                onChange={handleChange}
                                placeholder="Enter logo image URL"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* CEO Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">CEO Name</label>
                            <input
                                type="text"
                                name="CEO_Name"
                                value={formData.CEO_Name}
                                onChange={handleChange}
                                placeholder="Enter CEO name"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* CEO Details */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700">CEO Details</label>
                            <textarea
                                name="CEO_Details"
                                value={formData.CEO_Details}
                                onChange={handleChange}
                                placeholder="Enter CEO details"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                rows="3"
                                required
                            />
                        </div>

                        {/* COO Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">COO Name</label>
                            <input
                                type="text"
                                name="COO_Name"
                                value={formData.COO_Name}
                                onChange={handleChange}
                                placeholder="Enter COO name"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* COO Details */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700">COO Details</label>
                            <textarea
                                name="COO_Details"
                                value={formData.COO_Details}
                                onChange={handleChange}
                                placeholder="Enter COO details"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                rows="3"
                                required
                            />
                        </div>

                        {/* What the Company Does */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700">What the Company Does</label>
                            <textarea
                                name="Company_Does"
                                value={formData.Company_Does}
                                onChange={handleChange}
                                placeholder="Describe what the company does"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                rows="3"
                                required
                            />
                        </div>

                        {/* How the Company Does It */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700">How the Company Does It</label>
                            <textarea
                                name="How_Company_Do"
                                value={formData.How_Company_Do}
                                onChange={handleChange}
                                placeholder="Describe how the company operates"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                rows="3"
                                required
                            />
                        </div>

                        {/* Their Culture */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700">Their Culture</label>
                            <textarea
                                name="Their_Culture"
                                value={formData.Their_Culture}
                                onChange={handleChange}
                                placeholder="Describe the company culture"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                rows="3"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Add Company
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminAddComp;