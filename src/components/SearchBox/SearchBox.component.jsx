import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { toast } from 'react-toastify';

const SearchBox = () => {
    const [barcode, setBarcode] = useState('');
    const getDetailHandler = (e) => {
        setBarcode(e.target.value);
    };
    const submitHandler = () => {
        //     axios
        //         .post(`${process.env.REACT_APP_BASE_URL}/api/v1/account/login`, data)
        //         .then((res) => {})
        //         .catch((err) => {
        //             toast.error(err.response.data.msg.vn, {
        //                 position: 'top-right',
        //                 autoClose: 5000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 theme: 'light',
        //             });
        //         });
    };

    return (
        <div className="flex w-full py-2">
            <input
                type="search"
                className="flex-auto w-10/12 h-10 rounded-sm outline-none px-2 bg-slate-400 text-gray-500 placeholder:text-black"
                placeholder="Enter barcode"
                onChange={(e) => {
                    getDetailHandler(e);
                }}
            ></input>
            <button onClick={submitHandler} className="bg-blue-100  flex-auto w-2/12 h-10 rounded-sm hover:bg-blue-200">
                Enter
            </button>
        </div>
    );
};

export default SearchBox;
