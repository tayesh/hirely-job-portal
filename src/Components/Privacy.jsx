import React from 'react';

const Privacy = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                {/* Privacy Policy Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
                </div>

                {/* Privacy Policy Content with Grid Layout (grid-cols-2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Sections */}
                    <div className="space-y-8">
                        {/* Section 1 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
                            <p className="text-gray-600 mt-2">We collect two types of information from our users:</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li><strong>Personal Information</strong>: When you register as a user, apply for jobs, or interact with the website, we may collect information such as your name, email address, phone number, resume, and other relevant details for job applications.</li>
                                <li><strong>Non-Personal Information</strong>: This includes data that does not personally identify you, such as your IP address, browser type, and usage statistics. We collect this information to enhance the user experience and analyze website traffic.</li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
                            <p className="text-gray-600 mt-2">We use the information we collect to:</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Facilitate job applications and manage user accounts.</li>
                                <li>Provide job-related services and content.</li>
                                <li>Communicate with you about job postings, application status, and other relevant updates.</li>
                                <li>Improve our website, services, and user experience.</li>
                                <li>Prevent fraud, security breaches, and ensure compliance with legal obligations.</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">3. Sharing Your Information</h2>
                            <p className="text-gray-600 mt-2">We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following circumstances:</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>With third-party service providers who help us operate the website and deliver services, such as hosting and job management tools.</li>
                                <li>With companies offering job opportunities to help facilitate the hiring process.</li>
                                <li>To comply with legal obligations, respond to legal claims, or protect the rights of Hirely, our users, or the public.</li>
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Additional Sections */}
                    <div className="space-y-8">
                        {/* Section 4 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">4. Data Security</h2>
                            <p className="text-gray-600 mt-2">We take the security of your personal information seriously. We use various security measures, including encryption and access controls, to protect your data from unauthorized access, alteration, disclosure, or destruction.</p>
                        </section>

                        {/* Section 5 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">5. Cookies</h2>
                            <p className="text-gray-600 mt-2">Hirely uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and analyze website traffic. You can choose to disable cookies through your browser settings, but this may affect your experience on the website.</p>
                        </section>

                        {/* Section 6 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">6. User Rights</h2>
                            <p className="text-gray-600 mt-2">As a user, you have the right to:</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Access, update, or delete your personal information.</li>
                                <li>Withdraw consent for the use of your personal data.</li>
                                <li>Request the restriction or objection to the processing of your personal data.</li>
                                <li>Request a copy of your personal data in a portable format.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
