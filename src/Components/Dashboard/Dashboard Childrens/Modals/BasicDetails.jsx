import React from 'react';

const BasicDetails = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-5'>
                <div>
                    <p className=' pl-1 text-sm mb-1'>Total Year Of Experience <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="1.5 Year"

                        className="input input-bordered "

                    />
                </div>
                <div>
                    <p className=' pl-1 text-sm mb-1'>Currency <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered text-gray-400"

                    >
                        <option disabled selected>
                            Dollar/Taka
                        </option>
                        <option>Dollar</option>
                        <option>Taka</option>
                    </select>
                </div>
                <div>
                    <p className=' pl-1 text-sm mb-1'>Present Salary<span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="10,000"

                        className="input input-bordered "

                    />
                </div>
                <div>
                    <p className=' pl-1 text-sm mb-1'>Expected Salary <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="50,000"

                        className="input input-bordered "

                    />
                </div>
                <div className='col-span-2'>
                    <p className=' pl-1 text-sm mb-1'>Employment Type <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered w-full text-gray-400"

                    >
                        <option disabled selected>
                            Full Time/Part Time
                        </option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                    </select>
                </div>
                <div className=''>
                    <p className=' pl-1 text-sm mb-1'>Salary Type <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered w-full text-gray-400"

                    >
                        <option disabled selected>
                            Monthly/Weekly
                        </option>
                        <option>Monthly</option>
                        <option>Weekly</option>
                    </select>
                </div>
                <div className=''>
                    <p className=' pl-1 text-sm mb-1'>Looking For Job Level <span className='text-red-700'>*</span></p>
                    <select
                        name="Skills"
                        className="select select-bordered w-full text-gray-400"

                    >
                        <option disabled selected>
                            Student/Senior
                        </option>
                        <option>Senior</option>
                        <option>Student</option>
                    </select>
                </div>
                <div className=' col-span-4 '>
                    <p className=' pl-1 text-sm mb-1 w-[80%] mx-auto'>Looking For Job Level <span className='text-red-700'>*</span></p>
                    <div className=' flex justify-center w-full'>
                        <textarea
                            placeholder="Bio"
                            className="textarea textarea-bordered textarea-md w-[80%]"></textarea>

                    </div>

                </div>

            </div>
            <div className='flex justify-center py-10 gap-5 mb-5'>
                
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="px-5 py-1 rounded-full border-2 border-[#0275D8]">Cancel</button>
                </form>
                <button className="px-5 py-1 rounded-full border-2 border-[#0275D8] bg-[#0275D8] text-white">Submit</button>


            </div>


        </div>
    );
};

export default BasicDetails;