import { useLoaderData } from "react-router-dom";
import { FaBuilding, FaMapMarkerAlt, FaUserTie, FaBriefcase, FaHandshake } from "react-icons/fa";

const CompanyProfile = () => {
    const company = useLoaderData(); // Access the data fetched by the loader

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Company Header Section */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="p-8">
                    <div className="flex items-center space-x-6">
                        <img
                            src={company.Logo_Image}
                            alt={company.Company_Name}
                            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                        />
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800">{company.Company_Name}</h1>
                            <p className="text-gray-600 flex items-center mt-2">
                                <FaMapMarkerAlt className="mr-2 text-purple-500" />
                                {company.Location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Details Section */}
            <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - About Us */}
                <div className="bg-white rounded-xl shadow-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <FaBuilding className="mr-2 text-blue-500" />
                        About Us
                    </h2>
                    <p className="text-gray-600 mb-4">{company.Company_Does}</p>
                    <p className="text-gray-600 mb-4">{company.How_Company_Do}</p>
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Culture</h3>
                        <p className="text-gray-600">{company.Their_Culture}</p>
                    </div>
                </div>

                {/* Right Column - Leadership */}
                <div className="bg-white rounded-xl shadow-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <FaUserTie className="mr-2 text-purple-500" />
                        Leadership
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <p className="text-gray-800 font-medium flex items-center">
                                <FaBriefcase className="mr-2 text-blue-500" />
                                CEO
                            </p>
                            <p className="text-gray-600 mt-2">{company.CEO_Name}</p>
                            <p className="text-gray-600 text-sm mt-1">{company.CEO_Details}</p>
                        </div>
                        <div>
                            <p className="text-gray-800 font-medium flex items-center">
                                <FaHandshake className="mr-2 text-purple-500" />
                                COO
                            </p>
                            <p className="text-gray-600 mt-2">{company.COO_Name}</p>
                            <p className="text-gray-600 text-sm mt-1">{company.COO_Details}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Openings Section */}
            <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <FaBriefcase className="mr-2 text-blue-500" />
                    Job Openings
                </h2>
                <p className="text-gray-600">
                    <strong>Open Positions:</strong> {company.Job_Opening}
                </p>
            </div>
        </div>
    );
};

export default CompanyProfile;