import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const AdminAllCOmpany = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [selectedCompany, setSelectedCompany] = useState(null); // State to store the selected company for editing
    const [companyDetails, setCompanyDetails] = useState({
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

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        try {
            const response = await fetch("http://localhost:5000/companies");
            if (!response.ok) {
                throw new Error('Failed to fetch companies');
            }
            const data = await response.json();
            setCompanies(data);
        } catch (error) {
            console.error("Error fetching companies:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEditClick = (company) => {
        setSelectedCompany(company);
        setCompanyDetails(company); // Pre-fill the form with the selected company's data
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCompany(null);
        setCompanyDetails({
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
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompanyDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCompanyUpdate = async (e) => {
        e.preventDefault();
        try {
            const { _id, ...updatedCompanyDetails } = companyDetails;

            const response = await fetch(`http://localhost:5000/companies/${selectedCompany._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCompanyDetails),
            });

            if (!response.ok) {
                throw new Error('Failed to update company');
            }

            const data = await response.json();
            console.log('Company updated successfully:', data);

            Swal.fire({
                icon: 'success',
                title: 'Company Updated!',
                text: 'The company has been updated successfully.',
            });

            handleCloseModal();
            fetchCompanies();
        } catch (error) {
            console.error('Error updating company:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to update the company. Please try again.',
            });
        }
    };

    const handleDeleteCompany = async (companyId) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this company!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
            });

            if (result.isConfirmed) {
                const response = await fetch(`http://localhost:5000/companies/${companyId}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Failed to delete company');
                }

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'The company has been deleted.',
                });

                await fetchCompanies();
            }
        } catch (error) {
            console.error('Error deleting company:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to delete the company. Please try again.',
            });
        }
    };

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    return (
        <div>
            <h2 className="text-4xl font-semibold roboto text-gray-800 mt-5 text-center">All Companies</h2>
            <div className="grid grid-cols-2 gap-8 mx-20 shadow-xl p-8 bg-purple-50 my-12">
                {companies.map((company) => (
                    <div key={company._id}>
                        <div className="card bg-base-200 shadow-xl relative">
                            <figure>
                                <img
                                    src={company.Company_Image}
                                    alt={company.Company_Name}
                                    className="h-[194px] w-full"
                                />
                            </figure>
                            <div className="card-body">
                                <div className="flex items-center gap-2">
                                    <figure>
                                        <img
                                            src={company.Logo_Image}
                                            alt={company.Company_Name}
                                            className="h-[44px]"
                                        />
                                    </figure>
                                    <p className="text-[#45494B] text-[16px]">
                                        {company.Company_Name}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="https://i.ibb.co.com/kgxXvRXh/location.png"
                                            alt="Location"
                                        />
                                        <p className="text-[#45494B] text-[12px]">
                                            {company.Location}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="https://i.ibb.co.com/TBGnh33M/jobopen.png"
                                            alt="Job Openings"
                                        />
                                        <p className="text-[#0079C1] text-[12px] poppins">
                                            Job Opening ({company.Job_Opening})
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="card-actions justify-end">
                                        <Link onClick={scrollToTop} to={`/companyprofile/${company._id}`}>
                                            <button className="btn text-white h-[40px] epilogue text-[14px] font-medium px-6 bg-[#1976D2]">
                                                View Profile
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button
                                            onClick={() => handleEditClick(company)}
                                            className="btn text-white h-[40px] epilogue text-[20px] font-medium px-6 bg-[#2ff394]"
                                        >
                                            <CiEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteCompany(company._id)}
                                            className="btn text-white h-[40px] epilogue text-[20px] font-medium px-6 bg-[#ff4d4d] ml-2"
                                        >
                                            <MdDelete />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Editing Company */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white max-h-[80vh] overflow-y-auto p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Edit Company</h3>
                        <form onSubmit={handleCompanyUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Company Name */}
                            <div className="flex flex-col">
                                <label htmlFor="Company_Name" className="text-sm font-semibold mb-2">Company Name</label>
                                <input
                                    type="text"
                                    name="Company_Name"
                                    id="Company_Name"
                                    placeholder="Enter Company Name"
                                    value={companyDetails.Company_Name}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Location */}
                            <div className="flex flex-col">
                                <label htmlFor="Location" className="text-sm font-semibold mb-2">Location</label>
                                <input
                                    type="text"
                                    name="Location"
                                    id="Location"
                                    placeholder="Enter Location"
                                    value={companyDetails.Location}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Job Opening */}
                            <div className="flex flex-col">
                                <label htmlFor="Job_Opening" className="text-sm font-semibold mb-2">Job Opening</label>
                                <input
                                    type="number"
                                    name="Job_Opening"
                                    id="Job_Opening"
                                    placeholder="Enter Job Opening"
                                    value={companyDetails.Job_Opening}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Company Image */}
                            <div className="flex flex-col">
                                <label htmlFor="Company_Image" className="text-sm font-semibold mb-2">Company Image URL</label>
                                <input
                                    type="text"
                                    name="Company_Image"
                                    id="Company_Image"
                                    placeholder="Enter Company Image URL"
                                    value={companyDetails.Company_Image}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Logo Image */}
                            <div className="flex flex-col">
                                <label htmlFor="Logo_Image" className="text-sm font-semibold mb-2">Logo Image URL</label>
                                <input
                                    type="text"
                                    name="Logo_Image"
                                    id="Logo_Image"
                                    placeholder="Enter Logo Image URL"
                                    value={companyDetails.Logo_Image}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* CEO Name */}
                            <div className="flex flex-col">
                                <label htmlFor="CEO_Name" className="text-sm font-semibold mb-2">CEO Name</label>
                                <input
                                    type="text"
                                    name="CEO_Name"
                                    id="CEO_Name"
                                    placeholder="Enter CEO Name"
                                    value={companyDetails.CEO_Name}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* CEO Details */}
                            <div className="flex flex-col">
                                <label htmlFor="CEO_Details" className="text-sm font-semibold mb-2">CEO Details</label>
                                <textarea
                                    name="CEO_Details"
                                    id="CEO_Details"
                                    placeholder="Enter CEO Details"
                                    value={companyDetails.CEO_Details}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    required
                                    rows="4"
                                />
                            </div>

                            {/* COO Name */}
                            <div className="flex flex-col">
                                <label htmlFor="COO_Name" className="text-sm font-semibold mb-2">COO Name</label>
                                <input
                                    type="text"
                                    name="COO_Name"
                                    id="COO_Name"
                                    placeholder="Enter COO Name"
                                    value={companyDetails.COO_Name}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* COO Details */}
                            <div className="flex flex-col">
                                <label htmlFor="COO_Details" className="text-sm font-semibold mb-2">COO Details</label>
                                <textarea
                                    name="COO_Details"
                                    id="COO_Details"
                                    placeholder="Enter COO Details"
                                    value={companyDetails.COO_Details}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    required
                                    rows="4"
                                />
                            </div>

                            {/* Company Does */}
                            <div className="flex flex-col col-span-2">
                                <label htmlFor="Company_Does" className="text-sm font-semibold mb-2">What the Company Does</label>
                                <textarea
                                    name="Company_Does"
                                    id="Company_Does"
                                    placeholder="Enter what the company does"
                                    value={companyDetails.Company_Does}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    required
                                    rows="4"
                                />
                            </div>

                            {/* How Company Does */}
                            <div className="flex flex-col col-span-2">
                                <label htmlFor="How_Company_Do" className="text-sm font-semibold mb-2">How the Company Does It</label>
                                <textarea
                                    name="How_Company_Do"
                                    id="How_Company_Do"
                                    placeholder="Enter how the company does it"
                                    value={companyDetails.How_Company_Do}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    required
                                    rows="4"
                                />
                            </div>

                            {/* Their Culture */}
                            <div className="flex flex-col col-span-2">
                                <label htmlFor="Their_Culture" className="text-sm font-semibold mb-2">Their Culture</label>
                                <textarea
                                    name="Their_Culture"
                                    id="Their_Culture"
                                    placeholder="Enter their culture"
                                    value={companyDetails.Their_Culture}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    required
                                    rows="4"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white text-[20px] font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300 col-span-2"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="w-full bg-gray-500 text-white text-[20px] font-medium py-2 rounded-md hover:bg-gray-700 transition duration-300 col-span-2"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminAllCOmpany;