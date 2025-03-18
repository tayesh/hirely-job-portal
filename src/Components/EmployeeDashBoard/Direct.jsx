const Direct = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-6xl  mx-auto px-6 py-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">Direct Recruiting</h1>
                <p className="text-gray-600 mt-2">
                    Search, shortlist, and hire top candidates directly.
                </p>
            </div>

            <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-gray-700">🔹 Key Features of Direct Recruiting</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">Talent Search & Filtering</h3>
                        <ul className="list-disc list-inside text-gray-600 mt-2">
                            <li>✅ Skills</li>
                            <li>✅ Experience Level</li>
                            <li>✅ Industry/Job Category</li>
                            <li>✅ Location</li>
                            <li>✅ Expected Salary</li>
                        </ul>
                    </div>

                    <div className="p-5 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">Candidate Profile Viewing</h3>
                        <ul className="list-disc list-inside text-gray-600 mt-2">
                            <li>✅ Resume & Portfolio</li>
                            <li>✅ Work Experience</li>
                            <li>✅ Educational Background</li>
                            <li>✅ Certifications</li>
                            <li>✅ Availability Status</li>
                        </ul>
                    </div>

                    <div className="p-5 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">Shortlisting Candidates</h3>
                        <p className="text-gray-600 mt-2">Save and categorize candidates for specific job roles.</p>
                    </div>

                    <div className="p-5 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">Direct Messaging & Interview Scheduling</h3>
                        <p className="text-gray-600 mt-2">Communicate with candidates and schedule interviews.</p>
                    </div>

                    <div className="p-5 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">Hiring & Offer Management</h3>
                        <p className="text-gray-600 mt-2">Send job offers directly through the platform.</p>
                    </div>

                    <div className="p-5 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">Application Status Management</h3>
                        <ul className="list-disc list-inside text-gray-600 mt-2">
                            <li>✅ Contacted</li>
                            <li>✅ Shortlisted</li>
                            <li>✅ Interview Scheduled</li>
                            <li>✅ Hired</li>
                            <li>✅ Rejected</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-700">🔹 How Direct Recruiting Works?</h2>
                
                <div className="mt-6 space-y-6">
                    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">Step 1: Access the Talent Pool</h3>
                        <p className="text-gray-600 mt-1">Navigate to the <strong>Direct Recruiting</strong> section and search for candidates.</p>
                    </div>
                    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">Step 2: View & Shortlist Candidates</h3>
                        <p className="text-gray-600 mt-1">Click on a profile to view details and add them to your shortlist.</p>
                    </div>
                    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">Step 3: Contact Candidates</h3>
                        <p className="text-gray-600 mt-1">Send direct messages and schedule interviews.</p>
                    </div>
                    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">Step 4: Conduct Interviews & Hire</h3>
                        <p className="text-gray-600 mt-1">Interview candidates and send job offers through the platform.</p>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-700">🔹 Benefits of Direct Recruiting</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">✅ Faster Hiring Process</h3>
                        <p className="text-gray-600 mt-1">Contact and recruit candidates directly.</p>
                    </div>
                    <div className="p-5 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">✅ Higher Quality Hires</h3>
                        <p className="text-gray-600 mt-1">Shortlist only the best candidates.</p>
                    </div>
                    <div className="p-5 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">✅ Better Engagement</h3>
                        <p className="text-gray-600 mt-1">Communicate with candidates smoothly.</p>
                    </div>
                    <div className="p-5 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">✅ Saves Time & Effort</h3>
                        <p className="text-gray-600 mt-1">Reduces dependency on job postings.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Direct;
