import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebars from '../../components/Sidebars/Sidebars';
import { toast } from 'react-toastify';

function SupplierAdd() {
    const [supplierCode, setSupplierCode] = useState('');
    const [supplierName, setSupplierName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();
        const infoSupplier = {
            supplierCode: supplierCode,
            supplierName: supplierName,
            address: address,
            phoneNumber: phoneNumber,
        };
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/api/v1/supplier/register?token=${token}`, infoSupplier)
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
                navigate(`/supplier/`);
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
                        <h2>Profile</h2>
                    </div>
                    <div className="bg-white text-black">
                        <div className="mt-4">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-2">
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
                                                placeholder="SupplierCode"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setSupplierCode(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="supplierName"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                SupplierName
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="supplierName"
                                                placeholder="SupplierName"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setSupplierName(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="p-3">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="address"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Address
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="address"
                                                placeholder="Address"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setAddress(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="phoneNumber"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                PhoneNumber
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="phoneNumber"
                                                placeholder="PhoneNumber"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setPhoneNumber(e.target.value);
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

export default SupplierAdd;
