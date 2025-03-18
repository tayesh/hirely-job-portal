const PricingEmp = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-6 md:p-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">Flexible Pricing for Agencies</h1>
                <p className="text-gray-600 mt-2 text-lg">
                    Choose the perfect plan to streamline your hiring process.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                    <h2 className="text-2xl font-bold text-gray-700">Basic Plan</h2>
                    <p className="text-gray-500 mt-2">Perfect for startups and small agencies.</p>
                    <div className="text-3xl font-bold text-blue-600 mt-4">$0<span className="text-lg text-gray-500"> /mo</span></div>
                    <ul className="mt-4 space-y-2 text-gray-600">
                        <li>✅ Post up to 5 Jobs</li>
                        <li>✅ Manage 10 Applicants per job</li>
                        <li>✅ Basic applicant tracking</li>
                        <li>❌ No featured job postings</li>
                        <li>❌ No advanced analytics</li>
                    </ul>
                    {/* <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Get Started
                    </button> */}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-600">
                    <h2 className="text-2xl font-bold text-gray-700">Professional Plan</h2>
                    <p className="text-gray-500 mt-2">For growing agencies managing multiple jobs.</p>
                    <div className="text-3xl font-bold text-blue-600 mt-4">$49<span className="text-lg text-gray-500"> /mo</span></div>
                    <ul className="mt-4 space-y-2 text-gray-600">
                        <li>✅ Unlimited job postings</li>
                        <li>✅ Unlimited applicant management</li>
                        <li>✅ Advanced applicant tracking</li>
                        <li>✅ 1 Featured Job Posting per month</li>
                        <li>✅ Priority email support</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border">
                    <h2 className="text-2xl font-bold text-gray-700">Enterprise Plan</h2>
                    <p className="text-gray-500 mt-2">Custom solutions for high-volume hiring.</p>
                    <div className="text-3xl font-bold text-blue-600 mt-4">Custom</div>
                    <ul className="mt-4 space-y-2 text-gray-600">
                        <li>✅ Everything in Professional Plan</li>
                        <li>✅ Unlimited Featured Job Postings</li>
                        <li>✅ Custom branding for job listings</li>
                        <li>✅ Dedicated account manager</li>
                        <li>✅ API access for automation</li>
                    </ul>
                    {/* <button className="mt-6 w-full bg-gray-700 text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
                        Contact Sales
                    </button> */}
                </div>
            </div>

            <div className="flex justify-center">
                <div className="join join-vertical w-full max-w-3xl mx-auto mt-16">
                    <h2 className="text-4xl font-bold text-gray-700 text-center mb-12">Frequently Asked Questions</h2>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Can I cancel my subscription anytime?</div>
                        <div className="collapse-content">
                            <p>Yes, you can cancel your subscription at any time without extra charges.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">What happens if I exceed my job posting limit?</div>
                        <div className="collapse-content">
                            <p>You’ll need to upgrade or purchase additional job slots.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">Is there a free trial for premium plans?</div>
                        <div className="collapse-content">
                            <p>Yes! A 7-day free trial is available for the Professional Plan.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PricingEmp;
