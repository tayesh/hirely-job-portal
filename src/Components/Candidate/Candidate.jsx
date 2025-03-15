import { useEffect, useState } from "react";

const Candidate = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((users) => {
        const candidates = users.filter((user) => user.userRoll === "Candidate");

        if (candidates.length > 0) {
          let randomId = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit random ID
          const updatedCandidates = candidates.map((user, index) => ({
            ...user,
            idNumber: randomId + index, // Increase ID for each user
          }));

          setData(updatedCandidates);
        }
      })
      .catch((error) => console.error("Error fetching candidates:", error));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Summary Section */}
      <div className="flex gap-[72px] mb-16 mt-9 justify-center">
        {[
          { label: "Applied Candidate", count: 22 },
          { label: "Selected Candidate", count: 11 },
          { label: "Applicant Shortlist", count: 11 },
        ].map((item, index) => (
          <div key={index} className="flex px-6 gap-3 shadow-lg rounded-md">
            <img src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" className="h-10" />
            <div>
              <p className="poppins text-[20px] font-normal text-black">{item.label}</p>
              <p className="poppins text-[20px] font-normal text-[#0079C1]">{item.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-[#DCEFFF] ">
            <tr>
              {["SL NO.", "ID Number", "Applicant Name", "Passport No.", "Mobile No.", "Deposit", "Refund", "Updated"].map((heading, i) => (
                <th key={i} className="text-black text-center border-r border-white font-normal text-[20px] poppins">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="text-black text-[16px] poppins">{index + 1}</td>
                <td className="text-black text-[16px] poppins">{item.idNumber}</td>
                <td className="text-black text-[16px] poppins">{item.name}</td>
                <td className="text-black text-[16px] poppins">{item.passport || "362809"}</td>
                <td className="text-black text-[16px] poppins">{item.phoneNumber}</td>
                <td className="text-black text-[16px] poppins">৳1000</td>
                <td className="text-black text-[16px] poppins">৳00</td>
                <td className="text-black text-[16px] poppins">
                  <input type="checkbox" checked={item.updated} readOnly />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Candidate;
