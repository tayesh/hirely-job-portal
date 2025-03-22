const Fail = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Failed</h1>
                <p className="text-gray-700">There was an issue processing your payment.</p>
            </div>
        </div>
    );
};

export default Fail;