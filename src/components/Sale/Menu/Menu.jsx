import React from 'react';
import './Menu.scss';
import Product from '../Product/Product';
import SearchBox from '../../SearchBox/SearchBox.component';
import axios from 'axios';
import { useState } from 'react'
function Menu({ addItems }) {
    const clickHandler = (product) => {
        addItems(product);
    };
    const token = localStorage.getItem('token');
    const [listProduct, setListProduct] = useState([])
    const getAllProduct = async () => {
        const data = await axios
            .get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/get-all?token=${token}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.data.result.data
                }
            })
            .catch(err => console.log(err))
        // const detailData = await data.json();

        // setDetails(detailData.result.data);
        // console.log(detailData.result.data);
        setListProduct(data)
    };

    getAllProduct()
    // console.log(listProduct)
    return (
        <div className="menu">

            <SearchBox />
            {/* {ProductsData.map((product, index) => {
                return (
                    <button key={index} onClick={() => clickHandler(product)}>
                        <Product key={index} img={product.img} name={product.name} price={product.price} />
                    </button>
                );
            })} */}
        </div>
    );
}

export default Menu;
