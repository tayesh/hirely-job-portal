import React from 'react';

const Education = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-x-20 gap-y-5'>
                <div>
                    <p className='pl-1 text-sm mb-1'>Degree <span className='text-red-700'>*</span></p>
                    <select
                        name="Degree"
                        className="select select-bordered w-full text-gray-400"
                    >
                        <option disabled selected>
                            Ex: Bachelor’s
                        </option>
                        <option>Bachelor</option>
                        <option>Diploma</option>
                        <option>HSC</option>
                        <option>Master</option>
                        <option>MBBS</option>
                        <option>PDGHRM</option>
                        <option>PHD</option>
                        <option>PHR</option>
                        <option>SPHR</option>
                        <option>SSC</option>
                    </select>
                </div>
                <div >
                    <p className='pl-1 text-sm mb-1'>University or Institute Name <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Enter Institute Name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <p className='pl-1 text-sm mb-1'>Degree <span className='text-red-700'>*</span></p>
                    <select
                        name="Degree"
                        className="select select-bordered w-full text-gray-400"
                    >
                        <option disabled selected>
                            Ex: {new Date().getFullYear()} {/* Dynamically display the current year as an example */}
                        </option>
                        {Array.from({ length: new Date().getFullYear() - 1949 }, (_, index) => {
                            const year = 1950 + index;
                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div >
                    <p className='pl-1 text-sm mb-1'>Grade <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="A, A+.."
                        className="input input-bordered w-full"
                    />
                </div>
                <div >
                    <p className='pl-1 text-sm mb-1'>Field of Study <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="e.g., Mathematics"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="currentlyStudying"
                        name="currentlyStudying"
                        className="checkbox checkbox-sm rounded-none shadow-md"
                    />
                    <label htmlFor="currentlyStudying" className="text-sm text-gray-700">
                        Currently Studying
                    </label>
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

export default Education;