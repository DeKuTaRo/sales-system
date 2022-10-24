import React from 'react';
import { FaPowerOff, FaGavel, FaUserAlt, FaFileAlt, FaTty, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebars() {
    return (
        <div className="w-64">
            <ul className="bg-[#626f80] pb-4">
                <li className="flex items-center ml-4 text-white text-lg font-medium pt-4">
                    <FaGavel />
                    <p className="ml-4 mr-4">Welcome Tuan</p>
                    <FaPowerOff />
                </li>
                <li className="flex items-center ml-4 text-white text-lg font-medium pt-4">
                    <FaUserAlt />
                    <Link to={'/'}>
                        <p className="ml-4"> Nhân viên</p>
                    </Link>
                </li>
                <li className="flex items-center ml-4 text-white text-lg font-medium pt-4">
                    <FaTasks />
                    <Link to={'/products/'}>
                        <p className="ml-4"> Sản phẩm</p>
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
                    <p className="ml-4">Nhà cung cấp</p>
                </li>
            </ul>
        </div>
    );
}

export default Sidebars;
