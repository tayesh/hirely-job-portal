import { useEffect, useState } from "react";
import { BsBan } from "react-icons/bs";
import Swal from "sweetalert2";

const AdminAllCand = () => {
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://hirely-job-portal-server.vercel.app/users")
            .then((response) => response.json())
            .then((data) => {
                const filteredCandidates = data.filter(user => user.userRoll === "Candidate");
                setCandidates(filteredCandidates);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id, email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, ban the Candidate!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hirely-job-portal-server.vercel.app/users/${id}?email=${email}`, {
                    method: "DELETE",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setCandidates(candidates.filter(candidate => candidate._id !== id));
                            Swal.fire("The Candidate has been banned.", "success");
                        } else {
                            Swal.fire("Error!", "Failed to ban the Candidate.", "error");
                        }
                    })
                    .catch((error) => {
                        console.error("Error banning Candidate:", error);
                        Swal.fire("Error!", "Something went wrong.", "error");
                    });
            }
        });
    };

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl text-center my-8 font-bold ">All Candidates</h2>
            <div className="overflow-x-auto mx-12">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-sky-300 text-left">
                            <th className="py-2 px-4 border">Sl No.</th>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Phone Number</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((candidate, index) => (
                            <tr key={candidate._id} className="border">
                                <td className="py-2 px-4 border">{index + 1}</td>
                                <td className="py-2 px-4 border">{candidate.name}</td>
                                <td className="py-2 px-4 border">{candidate.phoneNumber}</td>
                                <td className="py-2 px-4 border">{candidate.email}</td>
                                <td className="py-2 px-4 border">
                                    <button 
                                        onClick={() => handleDelete(candidate._id, candidate.email)} 
                                        className="bg-red-400 flex gap-2 items-center text-white px-3 py-1 rounded hover:bg-red-700">
                                        Ban The Candidate<BsBan />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminAllCand;
