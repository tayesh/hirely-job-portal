import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Explored from "./Explored";
import Featured from "./Featured";
import LiveJobs from "./LiveJobs";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <LiveJobs></LiveJobs>
           <Courses></Courses>
           <Featured></Featured>
           <Explored></Explored>
        </div>
    );
};

export default Home;