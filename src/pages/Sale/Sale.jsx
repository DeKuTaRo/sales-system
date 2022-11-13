import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Sale/Menu/Menu';
import Navbar from '../../components/Sale/Navbar/Navbar';
import Bill from '../../components/Sale/Bill/Bill';
import SearchBox from '../../components/SearchBox/SearchBox.component';
import './Sale.scss';
import Infor from '../../components/Sale/Infor/infor';
import Pay from '../../components/Sale/Pay/Pay';
import axios from 'axios';
import { toast } from 'react-toastify';

function Sale() {
    // const [BillItems, setBillItems] = useState([]);

    // const emptyBill = () => {
    //     setBillItems([]);
    // };

    // const addItems = (product) => {
    //     setBillItems([...BillItems, product]);
    // };

    // const removeProduct = (item) => {
    //     let newArray = BillItems;
    //     newArray.splice(
    //         newArray.findIndex((a) => a.name === item.name),
    //         1,
    //     );
    //     setBillItems([...newArray]);
    // };

    const token = localStorage.getItem('token');
    const [transactionID , setTransactionID ] = useState('');
    const handleGetOrder = async () => {
        await axios
            .post(`${process.env.REACT_APP_BASE_URL}/api/v1/transaction/tran?token=${token}`)
            .then((res) => {
                if (res.data.status) {
                    setTransactionID(res.data.transaction.transactionID);
                    toast.success(res.data.msg.vn, {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                } else {
                    toast.warning(res.data.msg.vn, {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            })
            .catch((err) => {
                toast.error(err.response.data.msg.vn, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            });
    }

    const handleNewOrder = async () => {
        await axios
            .post(`${process.env.REACT_APP_BASE_URL}/api/v1/transaction/new?token=${token}`)
            .then((res) => {
                if (res.data.status) {
                    setTransId(res.data.transaction.transactionID);
                    toast.success(res.data.msg.vn, {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                } else {
                    toast.warning(res.data.msg.vn, {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            })
            .catch((err) => {
                toast.error(err.response.data.msg.vn, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            });
    };
    return (
        <div className="app">
            <Navbar />
            <div className="m-4 grid grid-cols-2 gap-2">
                <div className="pos relative">
                    <SearchBox />

                    <Menu />
                    <div className="absolute bottom-4 w left-20 flex w-full">
                        <button
                            onClick={handleNewOrder}
                            className="w-1/3 h-8 bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 leading-4 text-white rounded mr-2"
                        >
                            New order
                        </button>
                        <button className="w-1/3 h-8 bg-red-600 p-2 shadow-lg shadow-red-500/50 leading-4 text-white rounded">
                            Cancel odder
                        </button>
                    </div>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-2">
                    <Infor />

                    <Pay />
                </div>

                {/* <Bill products={BillItems} empty={emptyBill} remove={removeProduct} /> */}
            </div>
        </div>
    );
}
export default Sale;
