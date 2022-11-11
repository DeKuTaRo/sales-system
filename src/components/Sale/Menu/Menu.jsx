import React from 'react';
import './Menu.scss';
import Product from '../Product/Product';
import SearchBox from '../../SearchBox/SearchBox.component';
import axios from 'axios';
function Menu({ addItems }) {
    const clickHandler = (product) => {
        addItems(product);
    };
    const token = localStorage.getItem('token');

    const getAllProduct = async () => {
        const data = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/get-all?token=${token}`);
        const detailData = await data.json();

        // setDetails(detailData.result.data);
        // console.log(detailData.result.data);
    };
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
