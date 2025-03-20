import React from 'react';

const Faqcand = () => {
  return (
    <div className="min-h-screen  bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Frequently Asked Questions (FAQ)
        </h1>
        <div className="accordion">
          <div className="collapse collapse-arrow border-t-2 border-gray-300 rounded-md shadow-lg mb-4">
            <input type="radio" name="faq-accordion" id="faq1" defaultChecked />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              What is Hirely?
            </div>
            <div className="collapse-content px-4 py-3 bg-white rounded-md">
              <p>
                Hirely is a platform that connects job seekers with potential employers. Agencies can post job listings,
                and candidates can apply to those jobs, track their application status, and communicate with agencies.
              </p>
            </div>
          </div>
          
          <div className="collapse collapse-arrow border-t-2 border-gray-300 rounded-md shadow-lg mb-4">
            <input type="radio" name="faq-accordion" id="faq2" />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              How do I apply for a job?
            </div>
            <div className="collapse-content px-4 py-3 bg-white rounded-md">
              <p>
                To apply, simply create an account on Hirely, browse available job listings, and click "Apply" on the
                job that suits your skills. Fill out any necessary details, upload your resume, and submit your
                application.
              </p>
            </div>
          </div>
          
          <div className="collapse collapse-arrow border-t-2 border-gray-300 rounded-md shadow-lg mb-4">
            <input type="radio" name="faq-accordion" id="faq3" />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              Do I need an account to apply for a job?
            </div>
            <div className="collapse-content px-4 py-3 bg-white rounded-md">
              <p>
                Yes, you need to create an account on Hirely to apply for jobs. This helps track your applications and
                allows you to receive updates on your job status.
              </p>
            </div>
          </div>
          
          <div className="collapse collapse-arrow border-t-2 border-gray-300 rounded-md shadow-lg mb-4">
            <input type="radio" name="faq-accordion" id="faq4" />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              How do I check the status of my application?
            </div>
            <div className="collapse-content px-4 py-3 bg-white rounded-md">
              <p>
                After applying, you can log in to your account on Hirely and visit your application dashboard to see
                the current status of your applications, such as whether they are under review or if an interview is
                scheduled.
              </p>
            </div>
          </div>
          
          <div className="collapse collapse-arrow border-t-2 border-gray-300 rounded-md shadow-lg mb-4">
            <input type="radio" name="faq-accordion" id="faq5" />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              What happens after I apply for a job?
            </div>
            <div className="collapse-content px-4 py-3 bg-white rounded-md">
              <p>
                After applying, the agency or employer will review your application. If your profile matches the
                job requirements, they may contact you for an interview or ask for additional information.
              </p>
            </div>
          </div>
          
          <div className="collapse collapse-arrow border-t-2 border-gray-300 rounded-md shadow-lg mb-4">
            <input type="radio" name="faq-accordion" id="faq6" />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              Can I apply to multiple jobs?
            </div>
            <div className="collapse-content px-4 py-3 bg-white rounded-md">
              <p>
                Yes, you can apply to as many jobs as you like. Just make sure to customize your resume and cover
                letter to suit each specific job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqcand;
