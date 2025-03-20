import React from 'react';

const Refund = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                {/* Refund Policy Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">Refund Policy</h1>
                </div>

                {/* Refund Policy Content with Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Sections */}
                    <div className="space-y-8">
                        {/* Section 1 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">1. Eligibility for Refund</h2>
                            <p className="text-gray-600 mt-2">Refunds will be provided only under specific circumstances, such as:</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li><strong>Wrong Charges:</strong> If a user has been incorrectly charged for services not availed.</li>
                                <li><strong>Duplicate Transactions:</strong> If a user has been charged multiple times for the same service.</li>
                                <li><strong>Payment Failure:</strong> If a payment was charged but the service was not provided due to system errors or technical issues.</li>
                                <li><strong>Cancellations:</strong> If a service is canceled by Hirely or a job posting does not meet the agreed terms and conditions.</li>
                            </ul>
                            <p className="text-gray-600 mt-2">Refunds will not be issued for completed job postings or applicant interactions that have already been initiated.</p>
                        </section>

                        {/* Section 2 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">2. Refund Process</h2>
                            <p className="text-gray-600 mt-2">To request a refund, users must follow these steps:</p>
                            <ol className="list-decimal list-inside mt-2 text-gray-600">
                                <li>Contact Hirely Support within 7 days of the transaction, stating the reason for the refund request.</li>
                                <li>Provide the necessary details such as transaction ID, service name, and relevant documentation.</li>
                                <li>Our support team will review the request and determine eligibility for a refund.</li>
                                <li>If approved, the refund will be processed within 7-10 business days, via the same payment method used for the transaction.</li>
                            </ol>
                        </section>

                        {/* Section 3 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">3. Refund for Subscriptions</h2>
                            <p className="text-gray-600 mt-2">For users who have purchased a subscription:</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Refunds will only be granted for the first month within the first 7 days of activation.</li>
                                <li>After the first 7 days, subscriptions are non-refundable but can be canceled to stop future charges.</li>
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Additional Sections */}
                    <div className="space-y-8">
                        {/* Section 4 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">4. Partial Refunds</h2>
                            <p className="text-gray-600 mt-2">In certain cases, a partial refund may be issued if:</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>The service was partially used before the refund request was made.</li>
                                <li>A service was interrupted due to Hirely's fault.</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">5. Refund for Canceled Job Postings</h2>
                            <p className="text-gray-600 mt-2">If a job posting is canceled by Hirely:</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Full refunds are issued if the posting was never made live or was removed within 24 hours of posting.</li>
                                <li>Partial refunds may be issued if the job posting was live but canceled within 3 days of posting.</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">6. Refund Processing Time</h2>
                            <p className="text-gray-600 mt-2">Refund requests will be processed within 7-10 business days. The refund will be credited back to the original payment method used for the transaction.</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li><strong>Credit/Debit Cards:</strong> May take up to 10 business days.</li>
                                <li><strong>Bank Transfers:</strong> May take up to 10 business days.</li>
                                <li><strong>PayPal:</strong> Refunds typically take 5-7 business days.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Refund;
