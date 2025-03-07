import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Message = () => {
    const countries = [
        { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/320px-Flag_of_Bangladesh.svg.png" },
        { code: "IN", name: "India", dialCode: "+91", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png" },
        { code: "CN", name: "China", dialCode: "+86", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_China.svg/320px-Flag_of_China.svg.png" },
        { code: "JP", name: "Japan", dialCode: "+81", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/320px-Flag_of_Japan.svg.png" },
        { code: "PK", name: "Pakistan", dialCode: "+92", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/320px-Flag_of_Pakistan.svg.png" },
        { code: "ID", name: "Indonesia", dialCode: "+62", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/320px-Flag_of_Indonesia.svg.png" },
        { code: "PH", name: "Philippines", dialCode: "+63", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/320px-Flag_of_the_Philippines.svg.png" },
        { code: "VN", name: "Vietnam", dialCode: "+84", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/320px-Flag_of_Vietnam.svg.png" },
        { code: "TH", name: "Thailand", dialCode: "+66", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/320px-Flag_of_Thailand.svg.png" },
        { code: "MY", name: "Malaysia", dialCode: "+60", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/320px-Flag_of_Malaysia.svg.png" },
        { code: "SG", name: "Singapore", dialCode: "+65", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/320px-Flag_of_Singapore.svg.png" },
        { code: "KR", name: "South Korea", dialCode: "+82", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/320px-Flag_of_South_Korea.svg.png" },
        { code: "LK", name: "Sri Lanka", dialCode: "+94", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/320px-Flag_of_Sri_Lanka.svg.png" },
        { code: "MM", name: "Myanmar", dialCode: "+95", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/320px-Flag_of_Myanmar.svg.png" },
        { code: "AF", name: "Afghanistan", dialCode: "+93", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/320px-Flag_of_Afghanistan.svg.png" },
        { code: "IR", name: "Iran", dialCode: "+98", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/320px-Flag_of_Iran.svg.png" },
        { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png" },
        { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/320px-Flag_of_the_United_Arab_Emirates.svg.png" },
        { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/320px-Flag_of_Bangladesh.svg.png" },
        { code: "IQ", name: "Iraq", dialCode: "+964", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/320px-Flag_of_Iraq.svg.png" },
        { code: "KG", name: "Kyrgyzstan", dialCode: "+996", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/320px-Flag_of_Kyrgyzstan.svg.png" },
        { code: "KZ", name: "Kazakhstan", dialCode: "+7", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/320px-Flag_of_Kazakhstan.svg.png" },
        { code: "UZ", name: "Uzbekistan", dialCode: "+998", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/320px-Flag_of_Uzbekistan.svg.png" },
        { code: "NP", name: "Nepal", dialCode: "+977", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/320px-Flag_of_Nepal.svg.png" }
    ];


    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    return (
        <div className="bg-[#D9D9D9] h-[627px] pt-[49px] mx-[25px] mb-[100px] rounded-[20px]">
            <div className="mb-[61px] w-[509px] h-[517px] rounded-[20px] bg-white ml-[41px]">
                <h2 className="text-[20px] roboto font-normal text-[#232323] text-center pt-9">
                    Send us a Message
                </h2>
                <div className="mx-[46px] mt-[21px] space-y-6">
                    <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="w-[417px] h-[52px] rounded-[5px] roboto text-[14px] font-normal text-[#72737C] border border-[#0000003B] p-3 pl-[26px]"
                    />
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="w-[417px] h-[52px] rounded-[5px] roboto text-[14px] font-normal text-[#72737C] border border-[#0000003B] p-3 pl-[26px] mt-3"
                    />
                    <input
                        type="text"
                        placeholder="Message"
                        className="w-[417px] h-[72px] rounded-[5px] roboto text-[14px] font-normal text-[#72737C] border border-[#0000003B] p-3 pl-[26px] mt-3"
                    />
                    <div className="flex items-center border border-gray-300 p-3 rounded-lg relative mt-3 w-[417px] h-[52px]">
                        <div className="flex items-center cursor-pointer">
                            <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-6 h-4 mr-2" />
                            <span className="text-lg"><IoMdArrowDropdown /></span>
                            <span className="text-[#72737C] roboto text-[14px] font-normal">{selectedCountry.dialCode}</span>
                            <select
                                onChange={(e) => {
                                    const country = countries.find(c => c.code === e.target.value);
                                    setSelectedCountry(country);
                                }}
                                value={selectedCountry.code}
                                className="absolute left-10 bg-transparent border-none outline-none cursor-pointer w-10 opacity-0"
                            >
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Enter Your Phone Number"
                                className=" ml-12 w-full outline-none text-[#72737C] roboto text-[14px] font-normal"
                            />
                        </div>

                    </div>
                   <div className="flex justify-center">
                   <input type="submit" className="btn text-[19px] roboto px-4 py-1 w-[121px] h-[51px] font-normal bg-[#0275D8] text-white rounded-[16px]" />
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Message;