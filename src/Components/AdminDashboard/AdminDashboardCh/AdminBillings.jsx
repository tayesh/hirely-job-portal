import { useEffect, useState } from "react";

const AdminBillings = () => {
    const [billings, setBillings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => setBillings(data))
            .catch(error => console.error('Error fetching billings:', error));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-4xl text-center font-semibold my-8">All Payments</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full px-4 border-collapse border rounded-md border-gray-300">
                    <thead>
                        <tr className="bg-sky-200">
                            <th className="border border-gray-300 px-4 py-2">Sl No.</th>
                            <th className="border border-gray-300 px-4 py-2">Candidate Name</th>
                            <th className="border border-gray-300 px-4 py-2">Candidate Email</th>
                            {/* <th className="border border-gray-300 px-4 py-2">Candidate Phone</th> */}
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Amount</th>
                            <th className="border border-gray-300 px-4 py-2">Transaction Id</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {billings.length > 0 ? (
                            billings.map((billing, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border border-gray-300 px-4 py-2">{index+1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{billing.cus_name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{billing.cus_email}</td>
                                    {/* <td className="border border-gray-300 px-4 py-2">{billing.cus_phone}</td> */}
                                    <td className="border border-gray-300 px-4 py-2">{billing.product_name}</td>
                                    <td className="border border-gray-300 px-4 py-2">${billing.amount}</td>
                                    <td className="border border-gray-300 px-4 py-2">${billing.paymentId}</td>
                                    <td className="border border-gray-300 px-4 py-2">{billing.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="border border-gray-300 px-4 py-2 text-center">No billing data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminBillings;
