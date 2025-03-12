import React from 'react';

const KeySkills = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-x-20 gap-y-5'>
                
                <div >
                    <p className='pl-1 text-sm mb-1'>Skills <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Select Skills"
                        className="input input-bordered w-full"
                    />
                </div>
                
                <div >
                    <p className='pl-1 text-sm mb-1'>Number of Years <span className='text-red-700'>*</span></p>
                    <input
                        type="text"
                        name="JobTitle"
                        placeholder="Number of Years"
                        className="input input-bordered w-full"
                    />
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

export default KeySkills;