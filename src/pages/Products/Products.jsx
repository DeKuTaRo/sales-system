import React from 'react';
import { useEffect, useState } from 'react';

import { FaFilter, FaSearch } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';

function Products() {
    const [details, setDetails] = useState([]);

    const fetchDetails = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const detailData = await data.json();

        setDetails(detailData);
        // console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <div className="pt-2.5 px-6 pb-6 w-full">
            <div className="bg-white border-[1px] border-solid border-[#dce1ef] rounded p-5 mb-2.5 flex items-center justify-between">
                <div>
                    <button className="text-white bg-[#03a9f4] text-lg border-[1px] border-solid border-transparent py-1.5 px-3 rounded-md inline-block font-normal uppercase hover:text-white hover:bg-[#0286c2]">
                        <a href="/">New products</a>
                    </button>
                    <button className="text-white bg-[#03a9f4] text-lg border-[1px] border-solid border-transparent py-1.5 px-3 rounded-md inline-block font-normal ml-4 uppercase hover:text-white hover:bg-[#0286c2]">
                        <a href="/">import customer</a>
                    </button>
                </div>
                <div>
                    <button className="bg-[#f1f5f7] p-4 hover:text-[#415164] hover:bg-[#e1e4e6]">
                        <FaFilter />
                    </button>
                </div>
            </div>
            <div className="bg-white border-[1px] border-solid border-[#dce1ef] rounded p-5 mb-2.5">
                <h3 className="font-normal text-xl">Products Summary</h3>
                <div className="grid grid-cols-6 gap-6 text-[#464646]">
                    <div className="border-r-[1px] border-solid border-[#f0f0f0]">
                        <h3 className="mb-2.5 mt-5 text-2xl font-medium">11</h3>
                        <span>Total Customers</span>
                    </div>
                    <div className="border-r-[1px] border-solid border-[#f0f0f0]">
                        <h3 className="mb-2.5 mt-5 text-2xl font-medium">11</h3>
                        <span className="text-[#84c529]">Active Customers</span>
                    </div>
                    <div className="border-r-[1px] border-solid border-[#f0f0f0]">
                        <h3 className="mb-2.5 mt-5 text-2xl font-medium">11</h3>
                        <span className="text-[#fc2d42]">Inactive Customers</span>
                    </div>
                    <div className="border-r-[1px] border-solid border-[#f0f0f0]">
                        <h3 className="mb-2.5 mt-5 text-2xl font-medium">11</h3>
                        <span className="text-[#03a9f4]">Active Contacts</span>
                    </div>
                    <div className="border-r-[1px] border-solid border-[#f0f0f0]">
                        <h3 className="mb-2.5 mt-5 text-2xl font-medium">11</h3>
                        <span className="text-[#fc2d42]">Inactive Contacts</span>
                    </div>
                    <div>
                        <h3 className="mb-2.5 mt-5 text-2xl font-medium">11</h3>
                        <span className="text-[#777] border-b-[1px] border-dashed border-[#bbb] pb-0.5">
                            Contacts Logged In Today
                        </span>
                    </div>
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
                <div>
                    <table className="w-full mt-8 text-[#008ece]">
                        <thead>
                            <tr className="text-left bg-[#f6f8fa]">
                                <th>
                                    <input type="checkbox" name="" />
                                </th>
                                <th>#</th>
                                <th className="bg-[#ebf5ff]">Name</th>
                                <th>Primary contact</th>
                                <th>Primary email</th>
                                <th>Phone</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((detail) => (
                                <tr key={detail.id}>
                                    <td>
                                        <input type="checkbox" name="" />
                                    </td>
                                    <td>{detail.id}</td>
                                    <td>
                                        <a href="/" className="hover:text-[#004b6d] pb-3 pt-2">
                                            {detail.name}
                                        </a>
                                        <div className="flex items-center">
                                            <a
                                                href="/"
                                                className="text-sm border-r-[1px] border-solid border-[#f0f0f0] pr-2 py-[1px] hover:text-[#004b6d]"
                                            >
                                                View
                                            </a>
                                            <a
                                                href="/"
                                                className="mx-2 text-sm border-r-[1px] border-solid border-[#f0f0f0] px-2 py-[1px] hover:text-[#004b6d]"
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="/"
                                                className="text-sm px-2 py-[1px] text-[#fc2d42] hover:text-[#843534]"
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="/" className="hover:text-[#004b6d]">
                                            {detail.username}
                                        </a>
                                    </td>
                                    <td>
                                        <a href="/" className="hover:text-[#004b6d]">
                                            {detail.email}
                                        </a>
                                    </td>
                                    <td>
                                        <a href="/" className="hover:text-[#004b6d]">
                                            {detail.phone}
                                        </a>
                                    </td>
                                    <td>
                                        <a href="/" className="hover:text-[#004b6d]">
                                            {detail.website}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Products;
