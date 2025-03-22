const Cancel = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold text-yellow-600 mb-4">Payment Cancelled</h1>
                <p className="text-gray-700">Your payment was cancelled.</p>
            </div>
        </div>
    );
};

export default Cancel;