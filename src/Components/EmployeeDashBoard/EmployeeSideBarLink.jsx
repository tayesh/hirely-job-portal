import { NavLink } from 'react-router-dom';

const EmployeeSideBarLink = ({object}) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const {title,icon,path,w}=object
    return (
        <div className=' flex  items-center gap-4'>
            <img className='w-[35px]' src={icon} alt="" />
            <NavLink onClick={scrollToTop} to={path} ><p className='text-xl'>{title}</p></NavLink>
        </div>
    );
};

export default EmployeeSideBarLink;
