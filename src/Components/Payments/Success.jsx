const Success = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
                <p className="text-gray-700">Thank you for your payment.</p>
            </div>
        </div>
    );
};

export default Success;