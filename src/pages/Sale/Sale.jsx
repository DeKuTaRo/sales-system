import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Sale/Menu/Menu';
import Navbar from '../../components/Sale/Navbar/Navbar';
import Bill from '../../components/Sale/Bill/Bill';
import SearchBox from '../../components/SearchBox/SearchBox.component';
import './Sale.scss';

function Sale() {
    const [BillItems, setBillItems] = useState([]);

    const emptyBill = () => {
        setBillItems([]);
    };

    const addItems = (product) => {
        setBillItems([...BillItems, product]);
    };

    const removeProduct = (item) => {
        let newArray = BillItems;
        newArray.splice(
            newArray.findIndex((a) => a.name === item.name),
            1,
        );
        setBillItems([...newArray]);
    };

    return (
        <div className="app">
            <Navbar />
            <div className="grid grid-cols-2 gap-2">
                <div className="grid grid-rows-2 gap-2">
                    <div>
                        <SearchBox />
                    </div>

                    <div>
                        {' '}
                        <Menu addItems={addItems} />
                    </div>
                </div>
                {/* <Bill products={BillItems} empty={emptyBill} remove={removeProduct} /> */}
                <Menu addItems={addItems} />
                {/* <SearchBox /> */}
            </div>
        </div>
    );
}
export default Sale;
