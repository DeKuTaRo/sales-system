import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebars from '../../components/Sidebars/Sidebars';

function ProductsDetails() {
    const [details, setDetails] = useState([]);

    let params = useParams();

    const token = localStorage.getItem('token');
    const fetchDetails = async () => {
        const data = await fetch(
            `http://localhost:3000/api/v1/product/get-detail?token=${token}&barcode=${params.barcode}`,
        );
        const detailData = await data.json();

        setDetails(detailData.result.data);
        console.log(detailData.result.data);
    };

    useEffect(() => {
        fetchDetails();
        // eslint-disable-next-line
    }, [params.id]);
    return (
        <div className="w-full">
            <div className="flex">
                <Sidebars />
                <div className="w-full p-4">
                    <div className="bg-[#f9fafc] p-4 text-[#656565] font-normal text-lg rounded-t">
                        <h2>Details</h2>
                    </div>
                    <div className="bg-white text-black">
                        <div className="flex">
                            <p className="p-3">Customer Details</p>
                            <p className="p-3">Billing & shopping</p>
                            <p className="p-3">Customer Admins</p>
                        </div>
                        <div className="mt-4">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-3">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="fullName"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Barcode
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="fullName"
                                            value={details.barcode}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Created At
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            id="email"
                                            value={details.createdAt}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Department
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            id="email"
                                            value={details.department}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Product Name
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            id="email"
                                            value={details.productName}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Updated At
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            id="email"
                                            value={details.updatedAt}
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
                                            Quantity
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="phone"
                                            value={details.quantity}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="role"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Supplier Code
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="role"
                                            value={details.supplierCode}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="role"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Supplier Name
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="role"
                                            value={details.supplierName}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="role"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Unit Cost
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="role"
                                            value={details.unitCost}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="role"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Unit of Measure
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="role"
                                            value={details.unitOfMeasure}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsDetails;
