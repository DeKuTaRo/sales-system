import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebars from '../../components/Sidebars/Sidebars';

function SupplierDetail() {
    const [suppliers, setSuppliers] = useState([]);
    const [productsRefs, setProductsRefs] = useState([]);
    const [valueInput, setValueInput] = useState('');
    let params = useParams();
    // console.log(params);
    const token = localStorage.getItem('token');

    const fetchDetails = async () => {
        const data = await fetch(
            `http://localhost:3000/api/v1/supplier/get-detail?token=${token}&supplierCode=${params.id}`,
        );
        const detailData = await data.json();

        setSuppliers(detailData.result.supplier);
        setProductsRefs(detailData.result.productRefs.data);
    };

    useEffect(() => {
        fetchDetails();
        // eslint-disable-next-line
    }, [params.id]);

    // const handleChange = (e) => {
    //     setValueInput(e.target.value);
    // };

    return (
        <div className="w-full">
            <div className="flex">
                <Sidebars />
                <div className="w-full p-4">
                    <div className="bg-[#f9fafc] p-4 text-[#656565] font-normal text-lg rounded-t">
                        <h2>Details</h2>
                    </div>
                    <div className="bg-white text-black">
                        <div className="mt-4">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-3">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="fullName"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            SupplierCode
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="fullName"
                                            defaultValue={suppliers.supplierCode}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            // onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            SupplierName
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            id="email"
                                            defaultValue={suppliers.supplierName}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                </div>

                                <div className="p-3">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="phone"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Address
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="phone"
                                            defaultValue={suppliers.address}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 text-right">
                            <button className="p-3 text-white bg-[#03a9f4] text-lg border-[1px] border-solid border-transparent py-1.5 rounded-md inline-block font-normal uppercase hover:text-white hover:bg-[#0286c2]">
                                Save
                            </button>
                        </div>
                        <div>
                            <h3 className="p-4 uppercase text-xl">Danh sách các sản phẩm khác của nhà cung cấp</h3>
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
                                    {productsRefs.map((productsRef) => (
                                        <tr key={productsRef._id}>
                                            <td>{productsRef.barcode}</td>
                                            <td>
                                                <p className="hover:text-[#004b6d] pb-3 pt-2">
                                                    {productsRef.productName}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="hover:text-[#004b6d] pb-3 pt-2">
                                                    {productsRef.unitOfMeasure}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="hover:text-[#004b6d] pb-3 pt-2">{productsRef.unitCost}</p>
                                            </td>
                                            <td>
                                                <p className="hover:text-[#004b6d] pb-3 pt-2">
                                                    {productsRef.department}
                                                </p>
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

export default SupplierDetail;
