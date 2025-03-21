import React, { useState, useEffect, useContext } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { GrDocumentUpload } from 'react-icons/gr';
import { UserContext } from '../../AuthContext/UserContext';
import Swal from 'sweetalert2';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CreateCV = () => {
    const [cvUrl, setCvUrl] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchCV = async () => {
            try {
                if (user && user.email) {
                    const response = await fetch(`http://localhost:5000/get-cv/${user.email}`);
                    if (response.ok) {
                        const blob = await response.blob();
                        const fileUrl = URL.createObjectURL(blob);
                        setCvUrl(fileUrl);
                    } else {
                        console.error('No CV found for this user.');
                    }
                }
            } catch (error) {
                console.error('Error fetching CV:', error);
            }
        };

        fetchCV();
    }, [user]);

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('cv', file);
        formData.append('email', user.email);

        try {
            const response = await fetch('http://localhost:5000/upload-cv', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'CV uploaded successfully!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.reload();
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to upload CV.',
                    text: 'Please try again.',
                });
            }
        } catch (error) {
            console.error('Error uploading CV:', error);
            Swal.fire({
                icon: 'error',
                title: 'Failed to upload CV.',
                text: 'Please try again.',
            });
        }
    };

    return (
        <div className='px-24'>
            <div className='border-2 min-h-[50vh] py-5 rounded-xl mt-10 shadow-md'>
                <div className='px-10 mb-5'>
                    <h2 className='text-2xl font-semibold'>Upload Resume</h2>
                    <p className='text-base text-gray-400'>
                        Resume is the most important document recruiters look for. Recruiters generally do not <br />
                        look at profiles without resumes.
                    </p>
                </div>
                <hr className='mx-5' />

                <div className='min-h-[275px] flex flex-col mt-0 items-center justify-center'>
                    <label
                        htmlFor='resume-upload'
                        className='w-[350px] h-[68px] flex justify-center items-center rounded-full text-xl bg-[#E5F5FF] text-[#0079C1] cursor-pointer'
                    >
                        <GrDocumentUpload />
                        <p>Upload Resume</p>
                    </label>
                    <input
                        type='file'
                        id='resume-upload'
                        className='hidden'
                        accept='.pdf'
                        onChange={handleFileUpload}
                        required
                    />
                    <p className='text-xl text-gray-400 mt-5'>Supported Format: PDF up to 10 MB</p>
                </div>
            </div>

            <h2 className='text-2xl font-semibold px-10 mt-[113px]'>Uploaded resume</h2>
            <div className='border-2 min-h-[400px] flex flex-col items-center justify-center py-5 rounded-xl mt-5 shadow-md'>
                {cvUrl ? (
                    <div className="w-full flex justify-center">
                        <Document file={cvUrl} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                            ))}
                        </Document>
                    </div>
                ) : (
                    <>
                        <img
                            className='w-[164px] mb-10'
                            src='https://i.ibb.co/gMZ22ykb/image.png'
                            alt='No CV uploaded'
                        />
                        <p className='text-[#DB1616] text-2xl font-semibold mb-5'>You have not uploaded any resume</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default CreateCV;