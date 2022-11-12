import React from 'react';
import { useState } from 'react';
import Sidebars from '../../components/Sidebars/Sidebars';
import { toast } from 'react-toastify';
import axios from 'axios';

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const dataChangePassword = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        repeatPassword: repeatPassword,
    };

    const token = localStorage.getItem('token');

    const handleChangePassword = (e) => {
        e.preventDefault();

        axios
            .put(`${process.env.REACT_APP_BASE_URL}/api/v1/account/change-password?token=${token}`, dataChangePassword)
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
                setOldPassword('');
                setNewPassword('');
                setRepeatPassword('');
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
                        <h2>Change Password</h2>
                    </div>
                    <div className="bg-white text-black">
                        <div className="mt-4">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-3">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="oldPassword"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Old password
                                        </label>
                                        <br />
                                        <input
                                            type="password"
                                            id="oldPassword"
                                            placeholder="Old password"
                                            onChange={(e) => setOldPassword(e.target.value)}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                </div>

                                <div className="p-3">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="newPassword"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            New Password
                                        </label>
                                        <br />
                                        <input
                                            type="password"
                                            id="newPassword"
                                            placeholder="New password"
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="repeatPassword"
                                            className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                        >
                                            Repeat Password
                                        </label>
                                        <br />
                                        <input
                                            type="password"
                                            id="repeatPassword"
                                            placeholder="Repeat Password"
                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 text-right">
                            <button
                                className="p-3 text-white bg-yellow-500 text-lg border-[1px] border-solid border-transparent py-1.5 rounded-md inline-block font-normal uppercase hover:text-white hover:bg-yellow-700"
                                onClick={handleChangePassword}
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

export default ChangePassword;
