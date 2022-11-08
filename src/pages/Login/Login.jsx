import React from 'react';
import LogoDark from '../../assests/images/logo_dark.png';

function Login() {
    return (
        <div className="m-auto max-w-md pt-24">
            <div className="text-center py-6 px-2.5">
                <img src={LogoDark} alt="Logo" className="mx-auto" />
            </div>
            <h1 className="text-neutral-800 font-semibold text-2xl my-5 text-center">Login</h1>
            <div className="rounded-sm bg-white mx-6 py-6 px-8">
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="font-normal text-sm text-[#2d2d2d] inline-block mb-2">
                            Email Address
                        </label>
                        <br />
                        <input
                            type="text"
                            id="email"
                            value=""
                            className="border-[1px] border-solid border-[#bfcbd9] text-black text-sm h-10 block w-full py-[6px] px-[12px] bg-white rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="font-normal text-sm text-[#2d2d2d] inline-block mb-2">
                            Password
                        </label>
                        <br />
                        <input
                            type="text"
                            id="password"
                            value=""
                            className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-10 block w-full py-[6px] px-[12px] bg-white rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label>
                            <input type="checkbox" id="remember" />
                            Remember me
                        </label>
                    </div>
                    <div className="mb-4">
                        <button
                            className="text-white bg-blue-600 block text-sm font-medium leading-5 py-1.5 px-3 border-[1px] border-blue-600 border-solid rounded w-full"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                    <div className="mb-4">
                        <a href="/" className="text-[#337ab7]">
                            Forgot password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
