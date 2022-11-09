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
    const [userCode, setUserCode] = useState('');

    const fetchDetails = async () => {
        const data = await fetch(
            `http://localhost:3000/api/v1/account/get-all?token=${process.env.REACT_APP_ADMIN_TOKEN}`,
        );
        const detailData = await data.json();

        setDetails(detailData.result.data);
        // console.log(detailData.result.data);
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    const handleDisabled = (detail) => {
        // e.preventDefault();
        // setUserCode(details.userCode);
        console.log(detail      );
        // console.log(userCode);
        // const data = {
        //     userCode: registerAccount.userCode,
        //     fullName: registerAccount.fullName,
        //     email: registerAccount.email,
        //     phoneNumber: registerAccount.phoneNumber,
        //     password: registerAccount.password,
        //     role: registerAccount.role,
        // };
        // axios
        //     .post(`http://localhost:3000/api/v1/account/register?token=${process.env.REACT_APP_ADMIN_TOKEN}`, data)
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
        // navigate('/account');
    };

    // useEffect(() => {
    //     handleDisabled();
    // }, []);

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
                        <div className="flex items-center mt-2.5 mb-5">
                            <input id="exclude_inactive" type="checkbox" />
                            <label htmlFor="exclude_inactive" className="pl-1.5 inline-block align-middle">
                                Exclude Inactive Customers
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <select
                                    name="numbers"
                                    id="numbers"
                                    className="text-[#4e75ad] border-[1px] border-solid border-[#bfcbd9] rounded py-[5px] px-[10px] mr-3"
                                >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="all">all</option>
                                </select>
                                <button className="text-[#4e75ad] border-[1px] border-solid border-[#bfcbd9] rounded py-[5px] px-[10px]">
                                    Export
                                </button>
                                <button className="text-[#4e75ad] border-[1px] border-solid border-[#bfcbd9] rounded py-[5px] px-[10px]">
                                    Bulk actions
                                </button>
                                <button className="text-[#4e75ad] border-[1px] border-solid border-[#bfcbd9] rounded pt-[5px] px-[6px] pb-[10px] inline-block">
                                    <FiRefreshCw />
                                </button>
                            </div>
                            <div className="flex items-center">
                                <button className="bg-white py-[9px] px-2.5 border-[1px] border-solid border-[#bfcbd9] border-r-0 rounded-l hover:text-[#415164] hover:bg-[#e1e4e6]">
                                    <FaSearch />
                                </button>
                                <input
                                    placeholder="Search ..."
                                    name="search"
                                    className="text-[#4e75ad] border-[1px] border-solid border-[#bfcbd9] rounded rounded-l-none py-[5px] px-[10px] w-20 focus:w-40 focus:border-[#03a9f4] focus:border-[1px] focus:border-solid focus:rounded-l-none"
                                />
                            </div>
                        </div>
                        <div className="max-h-[67rem] overflow-hidden">
                            <table className="w-full mt-8 text-[#008ece]">
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
                                                <MdDelete onClick={handleDisabled(detail)} />
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
