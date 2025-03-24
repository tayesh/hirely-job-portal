import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { GrDocumentUpload } from 'react-icons/gr';
import { UserContext } from '../../AuthContext/UserContext';
import Swal from 'sweetalert2';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import * as pdfjsLib from 'pdfjs-dist';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const CreateCV = () => {
    const [cvUrl, setCvUrl] = useState(null);
    const [pdfLoading, setPdfLoading] = useState(false);
    const [pdfError, setPdfError] = useState(null);
    const { user } = useContext(UserContext);
    
    // Initialize plugins
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // Fetch CV URL from the backend
    const fetchCV = useCallback(async () => {
        try {
            if (user?.email) {
                const response = await fetch(`http://localhost:5000/get-cv/${user.email}`);
                if (response.ok) {
                    const data = await response.json();
                    const fullUrl = data.cvUrl.startsWith('http') 
                        ? data.cvUrl 
                        : `http://localhost:5000${data.cvUrl}`;
                    setCvUrl(fullUrl);
                } else if (response.status === 404) {
                    setCvUrl(null);
                }
            }
        } catch (error) {
            console.error('Error fetching CV:', error);
            setPdfError('Failed to load CV');
        }
    }, [user]);

    useEffect(() => {
        fetchCV();
    }, [fetchCV]);

    // Handle file upload
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('email', user.email);

        try {
            setPdfLoading(true);
            const response = await fetch('http://localhost:5000/upload-cv', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                const fullUrl = data.cvUrl.startsWith('http') 
                    ? data.cvUrl 
                    : `http://localhost:5000${data.cvUrl}`;
                setCvUrl(fullUrl);
                Swal.fire({
                    icon: 'success',
                    title: 'CV uploaded successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                throw new Error('Failed to upload CV');
            }
        } catch (error) {
            console.error('Error uploading CV:', error);
            Swal.fire({
                icon: 'error',
                title: 'Upload failed',
                text: error.message || 'An error occurred while uploading your CV.',
            });
        } finally {
            setPdfLoading(false);
        }
    }, [user.email, fetchCV]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'application/pdf',
        maxFiles: 1,
        disabled: pdfLoading,
    });

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
                    <div
                        {...getRootProps()}
                        className={`w-[350px] h-[68px] flex justify-center items-center rounded-full text-xl bg-[#E5F5FF] text-[#0079C1] cursor-pointer ${pdfLoading ? 'opacity-50' : ''}`}
                    >
                        <input {...getInputProps()} />
                        <GrDocumentUpload className="mr-2" />
                        <p>{pdfLoading ? 'Uploading...' : 'Upload Resume'}</p>
                    </div>
                    <p className='text-xl text-gray-400 mt-5'>Supported Format: PDF up to 10 MB</p>
                </div>
            </div>

            <h2 className='text-2xl font-semibold px-10 mt-[113px]'>Uploaded resume</h2>
            <div className='border-2 min-h-[400px] flex flex-col items-center justify-center py-5 rounded-xl mt-5 shadow-md'>
                {pdfError ? (
                    <div className="text-red-500 text-center">
                        <p>{pdfError}</p>
                        <button 
                            onClick={fetchCV}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Retry
                        </button>
                    </div>
                ) : cvUrl ? (
                    <div className="w-full h-[600px]">
                        <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`}>
                            <Viewer
                                fileUrl={cvUrl}
                                plugins={[defaultLayoutPluginInstance]}
                                onLoadError={(error) => {
                                    console.error('PDF load error:', error);
                                    setPdfError('Failed to load PDF document');
                                }}
                                renderError={() => (
                                    <div className="text-red-500">
                                        Failed to load PDF. Please try again.
                                    </div>
                                )}
                            />
                        </Worker>
                    </div>
                ) : (
                    <>
                        <img
                            className='w-[164px] mb-10'
                            src='https://i.ibb.co/gMZ22ykb/image.png'
                            alt='No CV uploaded'
                        />
                        <p className='text-[#DB1616] text-2xl font-semibold mb-5'>
                            You have not uploaded any resume
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default CreateCV;