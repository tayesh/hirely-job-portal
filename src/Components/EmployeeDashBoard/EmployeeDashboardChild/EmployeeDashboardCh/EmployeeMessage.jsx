const EmployeeMessage = () => {
    return (
        <div className="mt-6 mx-12">
            <div className="shadow-2xl border-2 border-gray-400 rounded-xl">
                <div className="pt-12 pl-8">
                    <h2 className=" text-[32px] font-semibold  text-black">Messages</h2>
                </div>
                <div className="divider"></div>
                <div className="flex justify-center items-center">
                <img src="https://i.ibb.co.com/HDLzFmFN/notfound.png" alt="" />
                </div>
                <p className="text-center mb-16 text-[36px] font-semibold  text-black">No Result Found!</p>
            </div>
        </div>
    );
};

export default EmployeeMessage;