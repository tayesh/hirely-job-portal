import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../AuthContext/UserContext";

const TakenCourses = () => {
    const [taken, setTaken] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/taken?userEmail=${user.email}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Failed to fetch data");
                    }
                    return res.json();
                })
                .then((data) => {
                    setTaken(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching taken courses:", error);
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    return (
        <div className="p-8 bg-white border shadow-xl my-8 mx-4 rounded-md min-h-screen">
            <h2 className="text-5xl font-semibold text-center my-8 text-[#2c3e50]">
                Our Enrolled Courses
            </h2>

            {/* Loading State */}
            {loading && <p className="text-center text-lg text-blue-500">Loading courses...</p>}

            {/* Error State */}
            {error && <p className="text-center text-lg text-red-500">Error: {error}</p>}

            {/* Empty State */}
            {!loading && !error && taken.length === 0 && (
                <p className="text-center text-lg text-gray-500">No courses enrolled yet.</p>
            )}

            {/* Table Display */}
            {!loading && !error && taken.length > 0 && (
                <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#0091C7]">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-gray-300">
                                    Sl No.
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-gray-300">
                                    Course Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-gray-300">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-gray-300">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-gray-300">
                                    Payment ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Taken At
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {taken.map((course, index) => (
                                <tr key={course._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium border-r border-gray-200">
                                        {course.courseTitle}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
                                        {course.category}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
                                        {course.price} BDT
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
                                        {course.paymentId}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {new Date(course.takenAt).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TakenCourses;
