import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Sidebars from '../../components/Sidebars/Sidebars';
// import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';

function AccountAdd() {
    const [userCode, setUserCode] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    // const navigate = useNavigate();

    const registerAccount = {
        userCode: userCode,
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        role: role,
    };

    const roleSelect = [
        {
            value: 'manager',
            label: 'manager',
        },
        {
            value: 'staff',
            label: 'staff',
        },
    ];

    const token = localStorage.getItem('token');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            userCode: registerAccount.userCode,
            fullName: registerAccount.fullName,
            email: registerAccount.email,
            phoneNumber: registerAccount.phoneNumber,
            password: registerAccount.password,
            role: registerAccount.role,
        };
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/register?token=${token}`, data)
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
                console.log(err);
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
        // navigate('/account');
    };
    return (
        <div className="w-full">
            <div className="flex">
                <Sidebars />
                <div className="w-full p-4">
                    <div className="bg-[#f9fafc] p-4 text-[#656565] font-normal text-lg rounded-t">
                        <h2>Register</h2>
                    </div>
                    <div className="bg-white text-black">
                        <div className="mt-4">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-3">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="userCode"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                UserCode
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="userCode"
                                                placeholder="UserCode"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setUserCode(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="fullName"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                FullName
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="fullName"
                                                placeholder="FullName"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setFullName(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-4">
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
                                                placeholder="Email"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="p-3">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="phone"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Phone
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="phone"
                                                placeholder="Phone"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setPhoneNumber(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="password"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Password
                                            </label>
                                            <br />
                                            <input
                                                type="password"
                                                id="password"
                                                placeholder="Password"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="role"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Role
                                            </label>
                                            <br />
                                            <Select
                                                placeholder="Select Role"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                value={roleSelect.find((obj) => obj.value === role)} // set selected value
                                                options={roleSelect} // set list of the data
                                                onChange={(e) => {
                                                    // console.log(e.value);
                                                    setRole(e.value);
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

export default AccountAdd;
