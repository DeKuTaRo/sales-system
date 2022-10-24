import React from 'react';
import Logo from '../../assests/images/logo.png';
import { FiSearch } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';
import { FaShare, FaCheckSquare, FaRegBell, FaAlignLeft } from 'react-icons/fa';
import { ImClock } from 'react-icons/im';

function Headers() {
    return (
        <div className="header block h-16 z-50">
            <div className="p-4 float-left text-zinc-300 cursor-pointer leading-7">
                <FaAlignLeft />
            </div>
            <div className="float-left py-2.5 px-4 h-16 text-center">
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <div className="mr-6 h-16 float-right">
                <ul className="h-16">
                    <li className="inline-block w-80">
                        <input
                            placeholder="Search here"
                            className="bg-transparent py-1.5 px-3 h-16 w-full text-white text-sm border-0 rounded-none focus:border-0 focus:bg-black/[0.2]"
                        />
                    </li>
                    <li className="inline-block relative">
                        <button className="rounded-none h-16 ml-4 text-xl text-white/[0.5] font-medium absolute -top-10">
                            <FiSearch className="inline-block" />
                        </button>
                    </li>
                    <li className="inline-block ml-11 text-white">Customer area</li>
                    <li className="inline-block ml-11 text-white">
                        <a href="/">
                            <BsPersonCircle />
                        </a>
                    </li>
                    <li className="inline-block ml-11 text-white">
                        <a href="/">
                            <FaShare />
                        </a>
                    </li>
                    <li className="inline-block ml-11 text-white">
                        <a href="/">
                            <FaCheckSquare />
                        </a>
                    </li>
                    <li className="inline-block ml-11 text-white">
                        <a href="/">
                            <ImClock />
                        </a>
                    </li>
                    <li className="inline-block ml-11 mr-2 text-white">
                        <a href="/">
                            <FaRegBell />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Headers;
