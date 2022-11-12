import React from 'react';
import { FaPowerOff, FaGavel, FaUserAlt, FaFileAlt, FaTty, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assests/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Sidebars() {
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        localStorage.removeItem('token');
        toast.success('LogOut successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
        navigate(`/login/`);
    };

    return (
        <div className="w-64">
            <ul className="bg-[#1e293b] pb-4 h-screen">
                <li className="flex items-center ml-4 text-white text-lg font-medium pt-4">
                    <Link to={'/'}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </li>
                <li className="flex items-center ml-4 text-white text-lg font-medium pt-4">
                    <FaGavel />
                    <p className="ml-4 mr-4">Welcome Châu</p>
                    <FaPowerOff onClick={handleLogOut} className="cursor-pointer" />
                </li>
                <li className="flex items-center ml-4 text-white text-lg font-medium pt-4">
                    <FaUserAlt />
                    <Link to={'/account'}>
                        <p className="ml-4"> Account User</p>
                    </Link>
                </li>
                <li className="flex items-center ml-4 text-white text-lg font-medium pt-4">
                    <FaTasks />
                    <Link to={'/products/'}>
                        <p className="ml-4"> Products</p>
                    </Link>
                </li>
                <li className="flex items-center ml-4 text-white text-lg font-medium pt-4">
                    <FaFileAlt />
                    <Link to={'/expenes/'}>
                        <p className="ml-4"> Doanh thu</p>
                    </Link>
                </li>
                <li className="flex items-center ml-4 text-white text-lg font-medium pt-4">
                    <FaTty />
                    <Link to={'/supplier/'}>
                        <p className="ml-4">Supplier</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebars;
