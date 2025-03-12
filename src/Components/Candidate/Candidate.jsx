const Candidate = () => {
    const data = [
        { id: 1, idNumber: "362809", name: "Saikat Islam", passport: "362809", mobile: "01905209098", deposit: "৳1000", refund: "৳00", updated: true },
        { id: 2, idNumber: "362809", name: "Fabian Rokon", passport: "362809", mobile: "01905209098", deposit: "৳1000", refund: "৳00", updated: true },
      ];
    
    return (
        <div className="min-h-screen">
            <div className="flex gap-[72px] mb-16 mt-9 justify-center">
                <div className="flex px-6  gap-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-md">
                    <img src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" className="h-10" />
                    <div>
                        <p className="poppins text-[20px] font-normal text-[#000000]">Applied Candidate</p>
                        <p className="poppins text-[#0079C1] text-[20px] font-normal">22</p>
                    </div>
                </div>
                <div className="flex px-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] gap-3 rounded-md">
                    <img src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" className="h-10" />
                    <div>
                        <p className="poppins text-[20px] font-normal text-[#000000]">Selected Candidate</p>
                        <p className="poppins text-[20px] font-normal text-[#0079C1]">11</p>
                    </div>
                </div>
                <div className="flex px-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] gap-3 rounded-md">
                    <img src="https://i.ibb.co.com/gFwZV5rx/applicant.png" alt="" className="h-10" />
                    <div>
                        <p className="poppins text-[20px] font-normal text-[#000000]">Applicant Shortlist</p>
                        <p className="poppins text-[20px] font-normal text-[#0079C1]">11</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="overflow-x-auto">
      <table className="table ">
        <thead className="bg-[#0079C1]   ">
          <tr >
            <th className="text-white text-center border-r border-white font-normal text-[20px] poppins">SL NO.</th>
            <th className="text-white text-center border-r border-white font-normal text-[20px] poppins">ID Number</th>
            <th className="text-white text-center border-r border-white font-normal text-[20px] poppins">Applicant Name</th>
            <th className="text-white text-center border-r border-white font-normal text-[20px] poppins">Passport No.</th>
            <th className="text-white text-center border-r border-white font-normal text-[20px] poppins">Mobile No.</th>
            <th className="text-white text-center border-r border-white font-normal text-[20px] poppins">Deposit</th>
            <th className="text-white text-center border-r border-white font-normal text-[20px] poppins">Refund</th>
            <th className="text-white text-center border-r border-white font-normal text-[20px] poppins">Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="text-center">
              <td className="text-black text-center font-normal text-[16px] poppins">{index + 1}</td>
              <td className="text-black text-center font-normal text-[16px] poppins">{item.idNumber}</td>
              <td className="text-black text-center font-normal text-[16px] poppins">{item.name}</td>
              <td className="text-black text-center font-normal text-[16px] poppins">{item.passport}</td>
              <td className="text-black text-center font-normal text-[16px] poppins">{item.mobile}</td>
              <td className="text-black text-center font-normal text-[16px] poppins">{item.deposit}</td>
              <td className="text-black text-center font-normal text-[16px] poppins">{item.refund}</td>
              <td className="text-black text-center font-normal text-[16px] poppins">
                <input type="checkbox" checked={item.updated} readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </div>
        </div>
    );
};

export default Candidate;