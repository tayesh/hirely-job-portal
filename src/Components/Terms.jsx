import React from 'react';

const Terms = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-100">
            <div className="bg-sky-600 text-white text-center py-8 rounded-lg">
                <h1 className="text-3xl font-semibold">Terms and Conditions – Hirely</h1>
                <p className="mt-2"><strong>Effective Date:</strong> 20th December,2025</p>
            </div>

            <div className="bg-white p-8 mt-10 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700">
                    Welcome to <strong>Hirely</strong>, a recruitment platform that connects agencies, employers, and job seekers. By accessing and using our platform, you agree to comply with the following Terms and Conditions. Please read them carefully.
                </p>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">1. Acceptance of Terms</h2>
                    <p className="mt-2 text-gray-700">By using Hirely, you agree to be bound by these terms. If you do not agree, please do not use our platform. We reserve the right to update or modify these terms at any time.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">2. Definitions</h2>
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                        <li><strong>Platform:</strong> refers to Hirely and all related services.</li>
                        <li><strong>Agency:</strong> refers to a registered entity that posts jobs on behalf of companies.</li>
                        <li><strong>Employer:</strong> refers to a company that hires candidates through an agency.</li>
                        <li><strong>Job Seeker:</strong> refers to an individual applying for jobs.</li>
                        <li><strong>Admin:</strong> refers to the team managing and overseeing Hirely.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">3. User Responsibilities</h2>
                    <div className="flex justify-between mt-4">
                        <div className="w-1/2 pr-4">
                            <h3 className="text-xl font-semibold text-gray-800">Agencies & Employers</h3>
                            <ul className="list-disc pl-6 mt-2 text-gray-700">
                                <li>Must provide accurate job listings.</li>
                                <li>Are responsible for managing applicants and ensuring compliance with labor laws.</li>
                                <li>Must not engage in discrimination, fraudulent job postings, or spam.</li>
                            </ul>
                        </div>
                        <div className="w-1/2 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800">Job Seekers</h3>
                            <ul className="list-disc pl-6 mt-2 text-gray-700">
                                <li>Must provide truthful information in resumes and applications.</li>
                                <li>Are responsible for verifying job details before accepting offers.</li>
                                <li>Should not engage in spam applications or misleading profiles.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">4. Application Process & Hiring</h2>
                    <p className="mt-2 text-gray-700">
                        Agencies can <strong>post jobs, view applicants, and update application statuses</strong> (Shortlisted, Interview Scheduled, Hired, Rejected, etc.). Job Seekers can <strong>apply to jobs, update their profiles, and accept/decline offers</strong>.
                    </p>
                    <p className="mt-2 text-gray-700">Hirely is <strong>not responsible for employment decisions</strong> made by agencies or employers.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">5. Payment & Subscription (If Applicable)</h2>
                    <p className="mt-2 text-gray-700">Some features may require paid subscriptions for agencies or employers. Payment terms, renewal, and cancellation policies will be outlined separately.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">6. Prohibited Activities</h2>
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                        <li>🚫 Posting fake job listings or misleading information.</li>
                        <li>🚫 Engaging in any form of discrimination, harassment, or unethical hiring practices.</li>
                        <li>🚫 Attempting to bypass the platform for direct hiring without agency involvement.</li>
                        <li>🚫 Sharing unauthorized or confidential information.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">7. Account Suspension & Termination</h2>
                    <p className="mt-2 text-gray-700">Hirely reserves the right to <strong>suspend or terminate accounts</strong> that violate these terms, engage in fraud, or misuse the platform.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">8. Liability Disclaimer</h2>
                    <p className="mt-2 text-gray-700">Hirely is a <strong>platform provider</strong> and does not guarantee job placements or hiring outcomes. We are not liable for disputes between agencies, employers, and job seekers.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">9. Privacy Policy</h2>
                    <p className="mt-2 text-gray-700">Your use of Hirely is also governed by our <strong>Privacy Policy</strong>, which outlines how we collect, store, and use personal data.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-2">10. Changes to Terms & Contact Information</h2>
                    <p className="mt-2 text-gray-700">We may update these terms as needed. For any questions, contact us at <strong>contact@hirely.com</strong>.</p>
                </section>
            </div>

            <div className="text-center mt-12 text-lg text-gray-700 font-semibold">
                <p>By using Hirely, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</p>
            </div>
        </div>
    );
};

export default Terms;
