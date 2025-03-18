const HowtoStart = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-8 bg-gray-100 min-h-screen">
            {/* Left Section */}
            <div className="flex-1 p-8  shadow-2xl rounded-xl bg-gradient-to-r from-sky-50 to-green-50 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding the Role of an Agency in Hirely</h2>
                <p className="text-gray-600 mb-4">Hirely allows agencies to act as intermediaries between companies and job seekers. Agencies can:</p>
                <ul className="list-disc ml-5 list-inside space-y-2 text-gray-700">
                    <li>Post jobs on behalf of multiple companies.</li>
                    <li>View and manage applicants for each job posting.</li>
                    <li>Update the status of job applications (shortlisted, interviewed, hired, etc.).</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Setting Up Your Agency Account</h2>
                <p className="text-gray-600 mb-4">To get started, follow these steps:</p>
                <ul className="list-decimal ml-5 list-inside space-y-2 text-gray-700">
                    <li><span className="font-semibold">Sign Up/Login:</span> Register as an agency by providing business details and authentication credentials.</li>
                    <li><span className="font-semibold">Dashboard Access:</span> After logging in, you’ll be redirected to the agency dashboard.</li>
                    <li><span className="font-semibold">Company Profile Setup:</span> Add company details, including name, industry, and logo.</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Posting a Job</h2>
                <ul className="list-disc ml-5 list-inside space-y-2 text-gray-700">
                    <li>Navigate to <span className="font-semibold">"Post New Job"</span> in the agency dashboard.</li>
                    <li>Fill in job details such as:
                        <ul className="list-circle list-inside ml-4 space-y-1 text-gray-600">
                            <li>Job Title, Company Name, Job Description, Location, Salary Range, Deadline, Opening</li>
                            
                        </ul>
                    </li>
                    <li>Click <span className="font-semibold">"Submit"</span> to publish the job listing.</li>
                </ul>
            </div>

            {/* Right Section */}
            <div className="flex-1 p-8  shadow-2xl rounded-xl bg-gradient-to-r from-sky-50 to-green-50 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Managing Applicants</h2>
                <ul className="list-disc ml-5 list-inside space-y-2 text-gray-700">
                    <li>Go to <span className="font-semibold">"View Applicants"</span> under the job posting section.</li>
                    <li>Check the list of applicants for each job.</li>
                    <li>Review resumes and filter suitable candidates.</li>
                    <li>Update the application status (<span className="text-blue-600">Applied, Shortlisted, Interview, Rejected</span>, etc.).</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Optimizing Your Job Postings</h2>
                <ul className="list-disc ml-5 list-inside space-y-2 text-gray-700">
                    <li>Write <span className="font-semibold">clear and detailed</span> job descriptions.</li>
                    <li>Use <span className="font-semibold">relevant keywords</span> to attract the right candidates.</li>
                    <li>Keep track of <span className="font-semibold">applicant engagement</span> to improve future postings.</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Next Steps</h2>
                <p className="text-gray-600 mb-4">Now that you've set up your agency account and learned how to post and manage jobs, explore other features like:</p>
                <ul className="list-disc ml-5 list-inside space-y-2 text-gray-700">
                    <li>Job analytics and reports</li>
                    <li>Automated notifications for applicants</li>
                    <li>Collaboration tools for hiring teams</li>
                </ul>
            </div>
        </div>
    );
};

export default HowtoStart;
