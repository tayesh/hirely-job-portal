import React, { useState } from "react";

const AgencyVerification = () => {
    const [formData, setFormData] = useState({
        ownershipType: "",
        tradeLicenceNo: "",
        ownerID: "",
        companyAddress: "",
        tradeLicence: null,
        nidCard: null,
        utilityBill: null,
        recruitingLicence: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setFormData({ ...formData, [e.target.name]: file });
        } else {
            alert("Please upload a valid image file.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <div className="flex items-center justify-center py-12 min-h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h2 className="text-2xl font-semibold text-center mb-6">Agency Verification</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Ownership Type *</label>
                        <select
                            name="ownershipType"
                            value={formData.ownershipType}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                        >
                            <option value="">Select Ownership Type</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Sole Proprietorship">Sole Proprietorship</option>
                            <option value="Corporation">Corporation</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Trade Licence *</label>
                        <input
                            type="text"
                            name="tradeLicenceNo"
                            value={formData.tradeLicenceNo}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="Enter your Trade Licence No."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Enter Agency Owner ID Card No *</label>
                        <input
                            type="text"
                            name="ownerID"
                            value={formData.ownerID}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="Enter"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Upload NID Card *</label>
                        <div className="relative">
                            <input
                                type="file"
                                name="nidCard"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border p-2 rounded opacity-0 absolute"
                            />
                            <div className="w-full border p-2 rounded bg-white">
                                {formData.nidCard ? formData.nidCard.name : "Click to upload NID Card"}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Company Address *</label>
                        <input
                            type="text"
                            name="companyAddress"
                            value={formData.companyAddress}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="Enter Address"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Utility Bill *</label>
                        <div className="relative">
                            <input
                                type="file"
                                name="utilityBill"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border p-2 rounded opacity-0 absolute"
                            />
                            <div className="w-full border p-2 rounded bg-white">
                                {formData.utilityBill ? formData.utilityBill.name : "Click to upload Utility Bill"}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Upload Trade Licence *</label>
                        <div className="relative">
                            <input
                                type="file"
                                name="tradeLicence"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border p-2 rounded opacity-0 absolute"
                            />
                            <div className="w-full border p-2 rounded bg-white">
                                {formData.tradeLicence ? formData.tradeLicence.name : "Click to upload Trade Licence"}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Upload Recruiting Licence *</label>
                        <div className="relative">
                            <input
                                type="file"
                                name="recruitingLicence"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full border p-2 rounded opacity-0 absolute"
                            />
                            <div className="w-full border p-2 rounded bg-white">
                                {formData.recruitingLicence ? formData.recruitingLicence.name : "Click to upload Recruiting Licence"}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-between mt-4">
                        <button type="button" className="px-6 py-2 border border-blue-500 text-blue-500 rounded">CANCEL</button>
                        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AgencyVerification;