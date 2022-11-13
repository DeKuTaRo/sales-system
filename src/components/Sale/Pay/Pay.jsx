import React from 'react';
import Product from '../Product/Product';
import SearchBox from '../../SearchBox/SearchBox.component';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { AiOutlineUserAdd } from 'react-icons/ai';
function Pay({ addItems }) {
    // const clickHandler = (product) => {
    //     addItems(product);
    // };
    // const token = localStorage.getItem('token');
    // const [listProduct, setListProduct] = useState([]);
    // const getAllProduct = async () => {
    //     const data = await axios
    //         .get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/get-all?token=${token}`)
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 return res.data.result.data;
    //             }
    //         })
    //         .catch((err) => console.log(err));
    //     setListProduct(data);
    // };

    // getAllProduct();
    return (
        <div className="bg-white rounded-md ">
            <div className="flex justify-center">
                <form className="pt-4 grid grid-rows-5 grid-flow-col gap-5 ">
                    <input type="text" placeholder="Subtotal" className=" " />
                    <input type="text" placeholder="Discount" className=" " />
                    <input type="text" placeholder="Change DUe" className=" " />
                    <input type="text" placeholder="Total" className=" " />
                    <button className="w-full bg-blue-500 text-white rounded h-7">Pay</button>
                </form>
            </div>
        </div>
    );
}

export default Pay;
