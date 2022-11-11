import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Sale/Menu/Menu';
import Navbar from '../../components/Sale/Navbar/Navbar';
import Bill from '../../components/Sale/Bill/Bill';
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
            <div className="pos">
                <Bill products={BillItems} empty={emptyBill} remove={removeProduct} />
                <Menu addItems={addItems} />
            </div>
        </div>
    );
}
export default Sale;