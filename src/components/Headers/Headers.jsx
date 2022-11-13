import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';
import { FaLock, FaUserAlt, FaTasks, FaTty } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AccountExample from '../../assests/files/account-example.xlsx';
import SupplierExample from '../../assests/files/supplier-example.xlsx';
import ProductExample from '../../assests/files/product-example.xlsx';

function Headers({ id, body }) {
    return (
        <div className=" bg-[#e3e8ee]">
            <div className="flex justify-between">
                <div className="relative">
                    <input
                        placeholder="Search here"
                        className="bg-transparent py-5 px-4 h-12 w-96 text-black text-sm border-0 rounded-sm"
                    />
                    <button className=" rounded-none h-16 text-xl text-neutral-600 font-medium absolute">
                        <FiSearch className="relative -left-7 -top-2" />
                    </button>
                </div>
                <div className="flex items-center">
                    <Tippy content="details-account" placement="bottom">
                        <Link to={'/account/me/'} className="px-3">
                            <BsPersonCircle />
                        </Link>
                    </Tippy>
                    <Tippy content="change-password" placement="bottom">
                        <Link to={`/changePassword/`} className="px-3">
                            <FaLock />
                        </Link>
                    </Tippy>
                    <Tippy content="account-excel-example" placement="bottom">
                        <a href={AccountExample} download="account-example.xlsx" className="px-3 cursor-pointer">
                            Account-Excel-Example
                            <FaUserAlt className="m-auto" />
                        </a>
                    </Tippy>
                    <Tippy content="supplier-excel-example" placement="bottom">
                        <a href={SupplierExample} download="supplier-example.xlsx" className="px-3 cursor-pointer">
                            Supplier-Excel-Example
                            <FaTasks className="m-auto" />
                        </a>
                    </Tippy>
                    <Tippy content="product-excel-example" placement="bottom">
                        <a href={ProductExample} download="product-example.xlsx" className="px-3 cursor-pointer">
                            Product-Excel-Example
                            <FaTty className="m-auto" />
                        </a>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Headers;
