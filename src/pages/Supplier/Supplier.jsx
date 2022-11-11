import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaSearch, FaPlus, FaUpload } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';

import Sidebars from '../../components/Sidebars/Sidebars';
import Headers from '../../components/Headers/Headers';

function Supplier() {
    const [details, setDetails] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    const token = localStorage.getItem('token');

    const fetchDetails = async () => {
        const data = await fetch(`http://localhost:3000/api/v1/supplier/get-all?token=${token}`);
        const detailData = await data.json();
        const arrayItems = detailData.result.data;

        setDetails(arrayItems);
        const supplierData = arrayItems.map((item) => item.supplier);
        setSuppliers(supplierData);
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
                                <Link to={'/supplierAdd/'}>
                                    <p className="flex items-center">
                                        <FaPlus className="pr-1" />
                                        New supplier
                                    </p>
                                </Link>
                            </button>
                            <button className="text-white bg-blue-600 text-sm border-[1px] border-solid border-transparent py-1.5 px-3 rounded-md inline-block font-normal ml-4 uppercase hover:text-white hover:bg-blue-700">
                                <p className="flex items-center">
                                    <FaUpload className="pr-1" />
                                    import supplier
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
                            <table className="w-full mt-8 text-[#008ece]">
                                <thead>
                                    <tr className="text-left bg-[#f6f8fa]">
                                        <th>SupplierCode</th>
                                        <th className="bg-[#ebf5ff]">SupplierName</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {suppliers.map((supplier) => (
                                        <tr key={supplier._id}>
                                            <td>
                                                <Link to={'/supplierDetail/' + supplier.supplierCode}>
                                                    {supplier.supplierCode}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/supplierDetail/' + supplier.supplierCode}>
                                                    <p className="hover:text-[#004b6d] pb-3 pt-2">
                                                        {supplier.supplierName}
                                                    </p>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/supplierDetail/' + supplier.supplierCode}>
                                                    <p className="hover:text-[#004b6d] pb-3 pt-2">{supplier.address}</p>
                                                </Link>
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

export default Supplier;
