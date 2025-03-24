import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../AuthContext/UserContext';

const EmployeeBilling = () => {
    const [payments, setPayments] = useState([]);
    const { user } = useContext(UserContext); // Get the logged-in user from context
    const loggedInUserEmail = user?.email; // Extract the user's email

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch(`http://localhost:5000/payments?email=${loggedInUserEmail}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch payments');
                }
                const data = await response.json();
                setPayments(data);
            } catch (error) {
                console.error("Error fetching payments:", error);
            }
        };

        fetchPayments();
    }, [loggedInUserEmail]);

    // Filter payments based on the logged-in user's email
    const filteredPayments = payments.filter(payment => payment.cus_email === loggedInUserEmail);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-4xl text-center font-bold mb-8 text-gray-800">Billing Details</h2>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                                Sl No.
                            </th>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                                Payment ID
                            </th>
                            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredPayments.map((payment, index) => (
                            <tr key={payment.paymentId} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900">
                                    {payment.product_name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900">
                                    {payment.product_category}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900">
                                    {payment.amount} BDT
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900">
                                    {payment.paymentId}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-md">
                                    <span
                                        className={`px-2 py-1 rounded-full text-md font-semibold ${
                                            payment.status === 'Paid'
                                                ? 'bg-green-100 text-green-800'
                                                : payment.status === 'Pending'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {payment.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeBilling;