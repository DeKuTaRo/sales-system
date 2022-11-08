import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';
import { FaShare, FaCheckSquare, FaRegBell } from 'react-icons/fa';
import { ImClock } from 'react-icons/im';

function Headers() {
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
                    <p className="px-4">Customer area</p>
                    <a href="/" className="px-4">
                        <BsPersonCircle />
                    </a>
                    <a href="/" className="px-4">
                        <FaShare />
                    </a>
                    <a href="/" className="px-4">
                        <FaCheckSquare />
                    </a>
                    <a href="/" className="px-4">
                        <ImClock />
                    </a>
                    <a href="/" className="px-4">
                        <FaRegBell />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Headers;
