import React, { useEffect } from 'react';
import Product from '../Product/Product';
import SearchBox from '../../SearchBox/SearchBox.component';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { AiOutlineUserAdd } from 'react-icons/ai';
function Infor({ addItems }) {
    const clickHandler = (product) => {
        addItems(product);
    };
    const token = localStorage.getItem('token');
    const [listProduct, setListProduct] = useState([]);
    const getAllProduct = async () => {
        const data = await axios
            .get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/get-all?token=${token}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.data.result.data;
                }
            })
            .catch((err) => console.log(err));
        setListProduct(data);
    };

    useEffect(() => {
        getAllProduct();
    }, []);
    return (
        <div className="bg-white rounded-md ">
            <div className="flex justify-around pt-4">
                <h1 className="font-bold inline">
                    Date<span className="font-normal">:11/11/21</span>
                </h1>
                <h1 className="font-bold inline">
                    Time<span className="font-normal">:11/11/21</span>
                </h1>
            </div>
            <div className="flex justify-center pt-4 items-center">
                <button className="w-10 h-10 bg-green-400 flex justify-center items-center hover:bg-green-600">
                    <AiOutlineUserAdd />
                </button>
                <input
                    type="search"
                    className="h-10 p-2  border-[1px] border-solid border-black ring-offset-slate-50"
                    placeholder="Type phonenumber"
                />
            </div>

            <ul className="pt-4 text-center">
                <li>
                    <span className="font-bold text-right">CODE</span>:<span className="pl-4 text-left">CKRHNKL</span>
                </li>

                <li>
                    <span className="font-bold">Sale person</span>:<span className="pl-4 ">CKRHNKL</span>
                </li>
                <li>
                    <span className="font-bold">Customer</span>:<span className="pl-4">CKRHNKL</span>
                </li>
                <li>
                    <span className="font-bold">Point</span>:<span className="pl-4">CKRHNKL</span>
                </li>
                <li>
                    <span className="font-bold">Allow point</span>:<span className="pl-4">CKRHNKL</span>
                </li>
            </ul>
        </div>
    );
}

export default Infor;
