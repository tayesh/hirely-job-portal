import React from 'react';

const Faqcom = () => {
    return (
        <div className="max-w-4xl my-12 mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-center mb-6">FAQ for Companies</h2>
            <div className="space-y-4">
                <div className="collapse collapse-arrow border-b">
                    <input type="radio" name="faq" id="question1" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:text-blue-500">
                        What is Hirely for Companies?
                    </div>
                    <div className="collapse-content">
                        <p>Hirely is a platform designed to help companies and agencies post job openings, manage applicants, and streamline the recruitment process.</p>
                    </div>
                </div>
                
                <div className="collapse collapse-arrow border-b">
                    <input type="radio" name="faq" id="question2" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:text-blue-500">
                        How do I post a job on Hirely?
                    </div>
                    <div className="collapse-content">
                        <p>To post a job, log in, go to the "Post a Job" section, fill out the job details, and click "Submit" to publish the listing.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow border-b">
                    <input type="radio" name="faq" id="question3" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:text-blue-500">
                        Can I post multiple job listings?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can post as many jobs as you want. Hirely allows unlimited job listings for companies.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow border-b">
                    <input type="radio" name="faq" id="question4" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:text-blue-500">
                        How do I manage applicants?
                    </div>
                    <div className="collapse-content">
                        <p>You can manage applicants from your Applicant Dashboard, where you can view applications, schedule interviews, and update the application status.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow border-b">
                    <input type="radio" name="faq" id="question5" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:text-blue-500">
                        How do I change the status of an application?
                    </div>
                    <div className="collapse-content">
                        <p>You can update the status of an applicant's application directly from the Applicant Dashboard by selecting a status like "Under Review," "Rejected," or "Hired."</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow border-b">
                    <input type="radio" name="faq" id="question6" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:text-blue-500">
                        Can I delete or edit job listings?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can edit or delete your job postings at any time from the job listing management section.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow border-b">
                    <input type="radio" name="faq" id="question7" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:text-blue-500">
                        How do I track job listing performance?
                    </div>
                    <div className="collapse-content">
                        <p>Hirely offers analytics to track the number of views, applicants, and overall performance of your job listings.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow border-b">
                    <input type="radio" name="faq" id="question8" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:text-blue-500">
                        How do I manage my company profile?
                    </div>
                    <div className="collapse-content">
                        <p>Manage your company profile by visiting the "Company Profile" section, where you can update company details, logo, and job preferences.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow border-b">
                    <input type="radio" name="faq" id="question9" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:text-blue-500">
                        Is there a fee to post jobs on Hirely?
                    </div>
                    <div className="collapse-content">
                        <p>Hirely offers both free and premium job posting options. The free option has limited features, while the premium option offers enhanced visibility and analytics.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow border-b">
                    <input type="radio" name="faq" id="question10" className="peer" />
                    <div className="collapse-title text-xl font-medium peer-checked:text-blue-500">
                        How can I contact Hirely support?
                    </div>
                    <div className="collapse-content">
                        <p>You can contact support via email at [support@hirely.com](mailto:support@hirely.com), or use the live chat feature on the website for quick assistance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqcom;
