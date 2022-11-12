import React from 'react';
import { useEffect, useState } from 'react';
import Sidebars from '../../components/Sidebars/Sidebars';
import { toast } from 'react-toastify';
import axios from 'axios';

function AccountMe() {
    const [details, setDetails] = useState([]);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const dataUpdateInfo = {
        email: email,
        fullName: fullName,
        phoneNumber: phoneNumber,
    };

    const token = localStorage.getItem('token');

    const fetchDetails = async () => {
        const data = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/account/me?token=${token}`);
        const detailData = await data.json();

        setDetails(detailData.data);
        // console.log(detailData.data);
    };

    useEffect(() => {
        fetchDetails();
        // eslint-disable-next-line
    }, []);

    const handleUpdateInfo = (e) => {
        e.preventDefault();

        axios
            .put(`${process.env.REACT_APP_BASE_URL}/api/v1/account/update-me?token=${token}`, dataUpdateInfo)
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
                        <h2>Details Account</h2>
                    </div>
                    <div className="bg-white text-black">
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
                                            defaultValue={details.createdAt}
                                            readOnly
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
                                            defaultValue={details.email}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            defaultValue={details.fullName}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            onChange={(e) => setFullName(e.target.value)}
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
                                            defaultValue={details.lastLogin}
                                            readOnly
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
                                            defaultValue={details.phoneNumber}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                                            defaultValue={details.preSalary}
                                            readOnly
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
                                            defaultValue={details.role}
                                            readOnly
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
                                            defaultValue={details.updatedAt}
                                            readOnly
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
                                            defaultValue={details.userCode}
                                            readOnly
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 text-right">
                            <button
                                className="p-3 text-white bg-yellow-500 text-lg border-[1px] border-solid border-transparent py-1.5 rounded-md inline-block font-normal uppercase hover:text-white hover:bg-yellow-700"
                                onClick={handleUpdateInfo}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountMe;
