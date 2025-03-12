import React from 'react';
import { GrDocumentUpload } from "react-icons/gr";

const CreateCV = () => {
    return (
        <div className='px-24'>
            <div className='border-2 min-h-[50vh] py-5 rounded-xl mt-10 shadow-md'>
                <div className=' px-10 mb-5'>
                    <h2 className='text-2xl font-semibold'>Upload Resume</h2>
                    <p className='text-base text-gray-400'>Resume is the most important document recruiters look for. Recruiters generally do not <br /> look
                        at profiles without resumes.</p>
                </div>
                <hr className='mx-5' />
                <div className='min-h-[275px] flex flex-col items-center justify-center'>
                    <div className='w-[350px] h-[68px] flex justify-center items-center rounded-full text-xl bg-[#E5F5FF] text-[#0079C1]'>
                        <GrDocumentUpload />
                        <p>Uplaod Resume</p>
                    </div>
                    <p className='text-xl text-gray-400 mt-5'>
                    Supported Formats: doc, docx, pdf upto 10 MB
                    </p>

                </div>
            </div>
            <h2 className='text-2xl font-semibold px-10 mt-[113px]'>Uploaded resume</h2>
            <div className='border-2 min-h-[400px] flex flex-col items-center justify-end py-5 rounded-xl mt-5 shadow-md'>
                <img className='w-[164px] mb-10' src="https://i.ibb.co.com/gMZ22ykb/image.png" alt="" />
                <p className='text-[#DB1616] text-2xl font-semibold mb-5'>You have not uploaded any resume</p>

            </div>


        </div>
    );
};

export default CreateCV;