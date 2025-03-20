import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                {/* About Hirely Header */}
                <div className="text-center  mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">About Hirely</h1>
                    <p className="text-lg text-gray-600 mt-2">Connecting top talent with the best employers.</p>
                </div>

                {/* About Hirely Content with Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Introduction and Features */}
                    <div className="space-y-8">
                        {/* Section 1 */}
                        <section className="bg-purple-50 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">Introduction to Hirely</h2>
                            <p className="text-gray-600 mt-2">Welcome to <strong>Hirely</strong>, the modern agency platform designed to streamline the hiring process for both employers and job seekers. At Hirely, we aim to simplify hiring, making it more efficient, transparent, and accessible for everyone.</p>
                        </section>

                        {/* Section 2 */}
                        <section className="bg-purple-50 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">What We Do</h2>
                            <p className="text-gray-600 mt-2">Hirely connects employers, agencies, and job seekers in one seamless platform. Agencies can manage job postings for multiple companies, track applicants, and communicate directly with candidates. Job seekers can browse job opportunities, apply, and track their applications in real-time.</p>
                        </section>

                        {/* Section 3 */}
                        <section className="bg-purple-50 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">Why Choose Hirely?</h2>
                            <p className="text-gray-600 mt-2">Hirely stands out by providing a simple, scalable, and secure solution for the recruitment process. Whether you're an agency, job seeker, or admin, Hirely ensures a seamless and efficient experience, saving time and effort in the hiring journey.</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Streamlined job posting and application process.</li>
                                <li>User-friendly interface for easy navigation.</li>
                                <li>Real-time communication tools for seamless interaction.</li>
                                <li>Security and transparency for data protection and privacy.</li>
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Vision and Process */}
                    <div className="space-y-8">
                        {/* Section 4 */}
                        <section className="bg-purple-50 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
                            <p className="text-gray-600 mt-2">Our vision is to revolutionize the way hiring is done by creating a platform where employers and job seekers can connect effortlessly, ensuring that the hiring process is more efficient, transparent, and effective.</p>
                        </section>

                        {/* Section 5 */}
                        <section className="bg-purple-50 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">How Hirely Works</h2>
                            <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-2">
                                <li><strong>Job Posting:</strong> Agencies create job postings for multiple companies.</li>
                                <li><strong>Job Application:</strong> Job seekers apply to positions and submit their resumes.</li>
                                <li><strong>Application Review:</strong> Agencies review applicants and communicate directly.</li>
                                <li><strong>Admin Management:</strong> Admins oversee the platform and ensure smooth operation.</li>
                            </ol>
                        </section>

                        {/* Section 6 */}
                        <section className="bg-purple-50 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">Get In Touch</h2>
                            <p className="text-gray-600 mt-2">If you have any questions or need support, feel free to reach out to us. We are here to help you make the most out of your Hirely experience.</p>
                            <p className="text-gray-600 mt-2"><strong>Email:</strong> support@hirely.com</p>
                            <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
