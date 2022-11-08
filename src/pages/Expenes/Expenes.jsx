import React from 'react';
import { useEffect, useState } from 'react';

import { FaSearch, FaRegFilePdf, FaRegFileExcel } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import Sidebars from '../../components/Sidebars/Sidebars';

function Expenes() {
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
        <div className="w-full">
            <div className="flex">
                <Sidebars />
                <div className="w-full p-4">
                    <div className="bg-white border-[1px] border-solid border-[#dce1ef] rounded p-5 mb-2.5 flex items-center justify-between">
                        <div>
                            <button className="rounded text-[#415164] bg-[#f1f5f7] text-lg border-[1px] border-solid border-transparent py-1.5 px-3 inline-block font-normal uppercase hover:text-[#415164] hover:bg-[#e1e4e6]">
                                <a href="/">
                                    <FaRegFilePdf />
                                </a>
                            </button>
                            <button className="rounded text-[#415164] bg-[#f1f5f7] text-lg border-[1px] border-solid border-transparent py-1.5 px-3 inline-block font-normal ml-4 uppercase hover:text-[#415164] hover:bg-[#e1e4e6]">
                                <a href="/">
                                    <FaRegFileExcel />
                                </a>
                            </button>
                        </div>
                        <div>
                            <button className="rounded text-white bg-[#84c529] p-2 hover:text-white hover:bg-[#74b31b] hover:border-[#84c529]">
                                <a href="/">Detail Report</a>
                            </button>
                        </div>
                    </div>
                    <div className="bg-white border-[1px] border-solid border-[#dce1ef] rounded p-5 mb-2.5">
                        <div className="flex items-center mt-2.5 mb-5">
                            <input id="exclude_inactive" type="checkbox" />
                            <label htmlFor="exclude_inactive" className="pl-1.5 inline-block align-middle">
                                Exclude Billable Expenses
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
                            <table className="w-full mt-8">
                                <thead>
                                    <tr className="text-left text-white bg-[#323a45]">
                                        <th>Category</th>
                                        <th className="">January</th>
                                        <th className="">February</th>
                                        <th className="">March</th>
                                        <th className="">April</th>
                                        <th className="">May</th>
                                        <th className="">June</th>
                                        <th className="">July</th>
                                        <th className="">August</th>
                                        <th className="">September</th>
                                        <th className="">October</th>
                                        <th className="">November</th>
                                        <th className="">December</th>
                                        <th className="">Year(2022)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-black">
                                    {details.map((detail) => (
                                        <tr key={detail.id}>
                                            <td>{detail.name}</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
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

export default Expenes;
