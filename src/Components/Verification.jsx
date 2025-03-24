import { useContext, useState } from "react";
import { UserContext } from "./AuthContext/UserContext";
import { useNavigate } from "react-router-dom";

const Verification = () => {
    const { user } = useContext(UserContext);

    const nav = useNavigate();
    const [formData, setFormData] = useState({
        nidNumber: '',
        drivingLicense: '',
        passportId: '',
        image: null,
        imageUrl: '',
        password: '',
        agreedToTerms: false
    });
    const [isUploading, setIsUploading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        });
    };

    const uploadImageToImgBB = async (imageFile) => {
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=1bd43b51970f772c727eeb303938d6b9', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                return data.data.url;
            }
            throw new Error('Image upload failed');
        } catch (error) {
            console.error('Image upload error:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.agreedToTerms) {
            alert('You must agree to the terms and conditions');
            return;
        }

        if (!formData.image) {
            alert('Please upload an image of your document');
            return;
        }

        setIsUploading(true);

        try {
            // First upload the image to ImgBB
            const imageUrl = await uploadImageToImgBB(formData.image);

            // Then send all verification data to your backend
            const response = await fetch('http://localhost:5000/verify-account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nidNumber: formData.nidNumber,
                    drivingLicense: formData.drivingLicense,
                    passportId: formData.passportId,
                    documentUrl: imageUrl,
                    password: formData.password,
                    email: user.email,
                    phoneNumber: user.phoneNumber
                })
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Verification submitted:', result);
                await Swal.fire({
                    title: 'Success!',
                    text: 'Verification submitted successfully! Pending for Admin Approval',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 3000,  // Auto close after 3 seconds
                    timerProgressBar: true
                });                // Optionally reset form
                setFormData({
                    nidNumber: '',
                    drivingLicense: '',
                    passportId: '',
                    image: null,
                    imageUrl: '',
                    password: '',
                    agreedToTerms: false
                });
                if (user && user.userRoll === "AGENCY") {
                    nav("/employeehome");
                } else {
                    nav("/");
                }
            } else {
                console.error('Verification error:', result.message);
                alert(`Verification failed: ${result.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during verification');
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="flex justify-center py-12 items-center min-h-screen bg-gray-200">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-sm space-y-4">
                <h2 className="text-2xl my-5 font-semibold text-center text-blue-500">Verify Your Account</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">NID Number</label>
                            <input
                                type="text"
                                name="nidNumber"
                                value={formData.nidNumber}
                                onChange={handleChange}
                                placeholder="Enter Your NID Number"
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Driving License</label>
                            <input
                                type="text"
                                name="drivingLicense"
                                value={formData.drivingLicense}
                                onChange={handleChange}
                                placeholder="Enter Your Driving Licence"
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Passport ID</label>
                            <input
                                type="text"
                                name="passportId"
                                value={formData.passportId}
                                onChange={handleChange}
                                placeholder="Enter Your Passport ID"
                                className="border p-2 rounded w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Upload Document Image</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleChange}
                                className="border ml-2 p-2 rounded w-full"
                                required
                            />
                            {formData.image && (
                                <p className="text-sm text-green-600 mt-1">Image selected</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <div className="flex items-center border rounded">
                            <input
                                type="text"
                                value={user.phoneNumber}
                                readOnly
                                placeholder="Phone Number"
                                className="w-full p-2 outline-none"
                                required
                            />
                        </div>

                        <label className="block text-sm font-medium text-gray-700 mt-2">Email Address</label>
                        <input
                            type="email"
                            value={user.email}
                            readOnly
                            placeholder="Enter Your Email Address"
                            className="border p-2 rounded w-full mt-1"
                        />

                        <label className="block text-sm font-medium text-gray-700 mt-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter Your Password"
                            className="border p-2 rounded w-full mt-1"
                            required
                        />
                    </div>

                    <div className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            name="agreedToTerms"
                            checked={formData.agreedToTerms}
                            onChange={handleChange}
                            className="mr-2"
                            required
                        />
                        <span className="text-sm">By clicking "Verify Account", you confirm that you agree to our <a href="#" className="text-blue-500">Terms and Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.</span>
                    </div>

                    <div className="pb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white text-xl font-medium p-2 rounded mt-4 disabled:opacity-50"
                            disabled={isUploading}
                        >
                            {isUploading ? 'Uploading...' : 'Verify Account'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Verification;