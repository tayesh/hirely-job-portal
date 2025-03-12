import { NavLink } from 'react-router-dom';

const EmployeeSideBarLink = ({object}) => {
    const {title,icon,path,w}=object
    return (
        <div className=' flex  items-center gap-4'>
            <img className='w-[35px]' src={icon} alt="" />
            <NavLink to={path} ><p className='text-xl'>{title}</p></NavLink>
        </div>
    );
};

export default EmployeeSideBarLink;
