import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaFilter, FaPlus, FaUpload, FaStore } from 'react-icons/fa';
import Sidebars from '../../components/Sidebars/Sidebars';
import Headers from '../../components/Headers/Headers';

function ProductsOufOfStock() {
    const [details, setDetails] = useState([]);

    const token = localStorage.getItem('token');

    const fetchDetails = async () => {
        const data = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/product/get-out-of-stock?token=${token}`);
        const detailData = await data.json();

        setDetails(detailData.result.data);
        // console.log(detailData.result.data);
    };

    useEffect(() => {
        fetchDetails();
        return () => {};

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
                                <Link to={'/productsAdd/'}>
                                    <p className="flex items-center">
                                        <FaPlus className="pr-1" />
                                        New product
                                    </p>
                                </Link>
                            </button>
                            <button className="text-white bg-blue-600 text-sm border-[1px] border-solid border-transparent py-1.5 px-3 rounded-md inline-block font-normal ml-4 uppercase hover:text-white hover:bg-blue-700">
                                <p className="flex items-center">
                                    <FaUpload className="pr-1" />
                                    import product
                                </p>
                            </button>
                            <button className="text-white bg-blue-600 text-sm border-[1px] border-solid border-transparent py-1.5 px-3 rounded-md inline-block font-normal ml-4 uppercase hover:text-white hover:bg-blue-700">
                                <Link to={'/productsOutOfStock/'}>
                                    <p className="flex items-center">
                                        <FaStore className="pr-1" />
                                        get-out-of-stock
                                    </p>
                                </Link>
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
                                        <th>Barcode</th>
                                        <th className="bg-[#ebf5ff]">Name</th>
                                        <th>Unit of Measure</th>
                                        <th>Cost</th>
                                        <th>Department</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.map((detail) => (
                                        <tr key={detail._id}>
                                            <td>{detail.barcode}</td>
                                            <td>
                                                <Link to={'/products/' + detail.barcode}>
                                                    <p className="hover:text-[#004b6d] pb-3 pt-2">
                                                        {detail.productName}
                                                    </p>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/products/' + detail.barcode}>
                                                    <p className="hover:text-[#004b6d] pb-3 pt-2">
                                                        {detail.unitOfMeasure}
                                                    </p>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/products/' + detail.barcode}>
                                                    <p className="hover:text-[#004b6d] pb-3 pt-2">{detail.unitCost}</p>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={'/products/' + detail.barcode}>
                                                    <p className="hover:text-[#004b6d] pb-3 pt-2">
                                                        {detail.department}
                                                    </p>
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

export default ProductsOufOfStock;
