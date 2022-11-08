import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebars from '../../components/Sidebars/Sidebars';

function ProductsAdd() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const infoEmployee = {
        name: name,
        email: email,
        phone: phone,
        role: role,
    };

    console.log(process.env.ADMIN_TOKEN);

    const handleSubmit = (e) => {
        // const { name, email, phone, role } = infoEmployee;
        console.log(infoEmployee);
        e.preventDefault();
    };
    useEffect(() => {
        axios
            .post(`http://localhost:3000/api/v1/account/register?token=${process.env.ADMIN_TOKEN}`, infoEmployee)
            .then(() => console.log('User Created'))
            .catch((err) => {
                console.error(err);
            });
    });

    return (
        <div className="w-full">
            <div className="flex">
                <Sidebars />
                <div className="w-full p-4">
                    <div className="bg-[#f9fafc] p-4 text-[#656565] font-normal text-lg rounded-t">
                        <h2>Profile</h2>
                    </div>
                    <div className="bg-white text-black">
                        <div className="flex">
                            <p className="p-3">Customer Details</p>
                            <p className="p-3">Billing & shopping</p>
                            <p className="p-3">Customer Admins</p>
                        </div>
                        <div className="mt-4">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-3">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="fullName"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Full Name
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="fullName"
                                                placeholder="Name"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
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
                                                    setPhone(e.target.value);
                                                }}
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
                                                placeholder="Role"
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                onChange={(e) => {
                                                    setRole(e.target.value);
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
