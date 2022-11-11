import React from 'react';

function PageNotFound() {
    return (
        <div className="h-screen relative">
            <div className="w-full max-w-lg text-center leading-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-60">
                    <h3 className="text-base font-bold text-[#262626] tracking-[.1875em] relative">
                        Oops! Page Not Found
                    </h3>
                    <h1 className="text-[252px] font-black text-[#262626] -tracking-[0.1em] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full">
                        <span className="notFoundPage">4</span>
                        <span className="notFoundPage">0</span>
                        <span className="notFoundPage">4</span>
                    </h1>
                </div>
                <p className="text-xl font-normal text-black">We are sorry, but the page you request was not found.</p>
            </div>
        </div>
    );
}

export default PageNotFound;
