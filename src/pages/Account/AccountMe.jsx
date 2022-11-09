import React from 'react';
import { useEffect, useState } from 'react';
import Sidebars from '../../components/Sidebars/Sidebars';

function AccountMe() {
    const [details, setDetails] = useState([]);

    const fetchDetails = async () => {
        const data = await fetch(`http://localhost:3000/api/v1/account/me?token=${process.env.REACT_APP_ADMIN_TOKEN}`);
        const detailData = await data.json();

        setDetails(detailData.data);
        // console.log(detailData.data);
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
                                            htmlFor="createdAt"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Created At
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="createdAt"
                                            value={details.createdAt}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Email
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            id="email"
                                            value={details.email}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="fullName"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            FullName
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            id="fullName"
                                            value={details.fullName}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastLogin"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Last Login
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            id="lastLogin"
                                            value={details.lastLogin}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phoneNumber"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Phone Number
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            id="phoneNumber"
                                            value={details.phoneNumber}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                </div>

                                <div className="p-3">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="preSalary"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Pre Salary
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="preSalary"
                                            value={details.preSalary}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="role"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Role
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="role"
                                            value={details.role}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="updatedAt"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Updated At
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="updatedAt"
                                            value={details.updatedAt}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="userCode"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            User Code
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="userCode"
                                            value={details.userCode}
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

export default AccountMe;
