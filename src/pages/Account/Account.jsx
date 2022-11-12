import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaFilter, FaSearch, FaPlus, FaUpload, FaUserAlt } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import Headers from '../../components/Headers/Headers';
import Sidebars from '../../components/Sidebars/Sidebars';

function Account() {
    const [details, setDetails] = useState([]);

    const token = localStorage.getItem('token');

    const fetchDetails = async () => {
        const data = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/account/get-all?token=${token}`);
        const detailData = await data.json();

        setDetails(detailData.result.data);
    };

    useEffect(() => {
        fetchDetails();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="w-full">
            <div className="flex">
                <Sidebars />
                <div className="w-full p-4">
                    <Headers />
                    <div className="p-5 mb-2.5 flex items-center justify-between">
                        <div>
                            <button className="text-white bg-blue-600 text-sm border-[1px] border-solid border-transparent py-1.5 px-3 rounded-md inline-block font-normal uppercase hover:text-white hover:bg-blue-700">
                                <Link to={'/accountAdd/'}>
                                    <p className="flex items-center">
                                        <FaPlus className="pr-1" />
                                        New account
                                    </p>
                                </Link>
                            </button>
                            <button className="text-white bg-blue-600 text-sm border-[1px] border-solid border-transparent py-1.5 px-3 rounded-md inline-block font-normal ml-4 uppercase hover:text-white hover:bg-blue-700">
                                <p className="flex items-center">
                                    <FaUpload className="pr-1" />
                                    import account
                                </p>
                            </button>
                            <button className="text-black bg-white text-sm border-[1px] border-solid border-transparent py-1.5 px-3 rounded-md inline-block font-normal ml-4 uppercase hover:text-black hover:bg-slate-50">
                                <p className="flex items-center">
                                    <FaUserAlt className="pr-1" />
                                    contacts
                                </p>
                            </button>
                        </div>
                        <div>
                            <button className="bg-[#f1f5f7] p-4 hover:text-[#415164] hover:bg-[#e1e4e6]">
                                <FaFilter />
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border-[1px] border-solid border-[#dce1ef] rounded p-5 mb-2.5">
                        <div className="max-h-[67rem] overflow-hidden">
                            <table className="w-full mt-2.5 text-[#008ece]">
                                <thead>
                                    <tr className="text-left bg-[#f6f8fa]">
                                        <th className="bg-[#ebf5ff]">Email</th>
                                        <th>Full Name</th>
                                        <th>Phone</th>
                                        <th>Role</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.map((detail) => (
                                        // console.log(detail),
                                        <tr key={detail._id}>
                                            <td>
                                                <Link to={'/employee/' + detail.id}>
                                                    <p className="hover:text-[#004b6d] pb-3 pt-2">{detail.email}</p>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/employee/' + detail.id}>
                                                    <p className="hover:text-[#004b6d] pb-3 pt-2">{detail.fullName}</p>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/employee/' + detail.id}>
                                                    <p className="hover:text-[#004b6d] pb-3 pt-2">
                                                        {detail.phoneNumber}
                                                    </p>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/employee/' + detail.id}>
                                                    <p className="hover:text-[#004b6d] pb-3 pt-2">{detail.role}</p>
                                                </Link>
                                            </td>
                                            <td>
                                                <MdDelete
                                                    onClick={async () => {
                                                        // console.log(detail.userCode);

                                                        const url = await fetch(
                                                            `http://localhost:3000/api/v1/account/disable?token=${token}&userCode=${detail.userCode}`,
                                                        );
                                                        const detailData = await url.json();
                                                        console.log(detailData);
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
