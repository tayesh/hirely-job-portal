import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Swal from "sweetalert2";
import { UserContext } from "../AuthContext/UserContext";
import axios from "axios";

const Courses = () => {
    const [activeTab, setActiveTab] = useState("Popular Courses");
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("http://localhost:5000/courses");
                if (!response.ok) throw new Error("Failed to fetch courses");
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const isNewCourse = (course) => {
        const currentDate = new Date();
        const courseDate = new Date(course.datePosted);
        const timeDifference = currentDate - courseDate;
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        return daysDifference <= 7;
    };

    const filteredCourses =
        activeTab === "Popular Courses"
            ? [...courses].sort((a, b) => b.learners - a.learners).slice(0, 10)
            : activeTab === "New Courses"
                ? [...courses].filter(isNewCourse)
                : [];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCreatePayment = async (course) => {
        if (!user) {
            Swal.fire({
                title: 'Login Required',
                text: 'You need to be logged in to take this course.',
                icon: 'warning',
                confirmButtonText: 'Login',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/create-payment', {
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                course: course.title,
                category: course.category,
                amount: course.price,
                currency: 'BDT'
            });

            const redirectUrl = response.data.paymentUrl;

            if (redirectUrl) {
                window.location.replace(redirectUrl);
            }
        } catch (error) {
            console.error('Error creating payment:', error);
            Swal.fire({
                title: 'Error',
                text: 'Failed to create payment. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    if (loading) return <p className="text-center text-[18px] text-gray-500">Loading courses...</p>;
    if (error) return <p className="text-center text-[18px] text-red-500">Error: {error}</p>;

    return (
        <div className="mx-14 mb-[42px]">
            <div className="flex items-center justify-between mx-12 mb-8">
                <a className="btn btn-ghost text-[28px] nunito">Courses</a>
                {["Popular Courses", "New Courses"].map((tab) => (
                    <a
                        key={tab}
                        className={`text-[20px] roboto cursor-pointer relative ${activeTab === tab
                                ? "text-[#0091C7] font-normal after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-1/2 after:h-[3px] after:bg-[#0091C7] after:-translate-x-1/2 after:rounded-full"
                                : "text-black"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </a>
                ))}
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{ delay: 1600, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <SwiperSlide key={course._id}>
                            <div className="card bg-base-200 shadow-xl">
                                <figure>
                                    <img src={course.image} alt={course.title} className="w-full h-[180px]" />
                                </figure>
                                <div className="absolute right-0 top-2">
                                    <p className="bg-[#D9D9D9] roboto text-[#000000] text-[9px] w-[90px] h-[32px] flex items-center pl-2">
                                        {course.category}
                                    </p>
                                </div>
                                <div className="card-body">
                                    <p className="text-[#1B232E] roboto text-[14px]">{course.title}</p>
                                    <div className="flex justify-between mx-8">
                                        <p className="text-[#747C82] text-[12px] roboto">{course.duration}</p>
                                        <p className="text-[#747C82] text-[12px] roboto">{course.learners} learners</p>
                                    </div>
                                    <div className="flex justify-between gap-2">
                                        <button
                                            className="btn font-normal rounded-md text-[14px] roboto border-[#747C82] bg-white"
                                            onClick={() => {
                                                navigate(`/more-info/${course._id}`, { state: { course } });
                                                scrollToTop();
                                            }}
                                        >
                                            More Info
                                        </button>
                                        <button
                                            onClick={() => handleCreatePayment(course)}
                                            className="btn font-normal rounded-md text-[14px] roboto text-white bg-[#009B5D]"
                                        >
                                            Take This Course
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-center text-[18px] text-gray-500">No courses found</p>
                )}
            </Swiper>
        </div>
    );
};

export default Courses;