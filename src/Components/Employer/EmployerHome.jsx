import EmployeeBanner from "./EmployeeBanner";
import Pricing from "./Pricing";
import Process from "./Process";
import Recuirement from "./Recuirement";
import WhyUS from "./WhyUS";

const EmployerHome = () => {
    return (
        <div>
            <EmployeeBanner></EmployeeBanner>
            <WhyUS></WhyUS>
            <Process></Process>
            <Recuirement></Recuirement>
            <Pricing></Pricing>
        </div>
    );
};

export default EmployerHome;