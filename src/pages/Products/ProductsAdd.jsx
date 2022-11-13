import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Sidebars from '../../components/Sidebars/Sidebars';
import { toast } from 'react-toastify';

function ProductsAdd() {
    const [barcode, setBarcode] = useState('');
    const [productName, setProductName] = useState('');
    const [UOM, setUOM] = useState('');
    const [department, setDepartment] = useState('');
    const [supplierCode, setSupplierCode] = useState('');
    const [unitCost, setUnitCost] = useState('');
    const [quantity, setQuantity] = useState('');

    const token = localStorage.getItem('token');

    const handleSubmit = (e) => {
        e.preventDefault();
        const infoProduct = {
            barcode: barcode,
            productName: productName,
            UOM: UOM,
            department: department,
            supplierCode: supplierCode,
            unitCost: unitCost,
            quantity: quantity,
        };
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/api/v1/product/register?token=${token}`, infoProduct)
            .then((res) => {
                console.log(res);
                toast.success(res.data.msg.en, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            })
            .catch((err) => {
                console.error(err);
                toast.error(err, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            });
    };

    return (
        <div className="w-full">
            <div className="flex">
                <Sidebars />
                <div className="w-full p-4">
                    <div className="bg-[#f9fafc] p-4 text-[#656565] font-normal text-lg rounded-t">
                        <h2>Products Add</h2>
                    </div>
                    <div className="bg-white text-black">
                        <div className="mt-4">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-3">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="barCode"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Barcode
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="barCode"
                                                placeholder="Barcode"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setBarcode(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="productName"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                ProductName
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="productName"
                                                placeholder="ProductName"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setProductName(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="unitOfMeasure"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Unit of Measure
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="unitOfMeasure"
                                                placeholder="GOI ... HOP ... "
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setUOM(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="department"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Department
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="department"
                                                placeholder="Department"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setDepartment(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="p-3">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="supplierCode"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                SupplierCode
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="supplierCode"
                                                placeholder="Supplier Code"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setSupplierCode(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="unitCost"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Unit Cost
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="unitCost"
                                                placeholder="Unit Cost"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setUnitCost(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="quantity"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Quantity
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="quantity"
                                                placeholder="Quantity"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setQuantity(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 text-right">
                                    <button className="p-3 text-white bg-[#03a9f4] text-lg border-[1px] border-solid border-transparent py-1.5 rounded-md inline-block font-normal uppercase hover:text-white hover:bg-[#0286c2]">
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsAdd;
