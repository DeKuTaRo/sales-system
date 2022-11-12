import React from 'react';

const SearchBox = () => {
    return (
        <div className="flex w-full py-2 h-5">
            <input
                type="search"
                className="flex-auto w-64 h-10 rounded-sm outline-none px-2 bg-slate-400 text-gray-500 placeholder:text-black"
                placeholder="Search box"
            ></input>
            <button className="bg-blue-100  flex-auto w-32 h-10 rounded-sm hover:bg-blue-200">Enter</button>
        </div>
    );
};

export default SearchBox;
