import React, { useEffect } from 'react';
import './Menu.scss';
import Product from '../Product/Product';
import SearchBox from '../../SearchBox/SearchBox.component';
import axios from 'axios';
import { useState } from 'react';

function Menu({ addItems }) {
    const clickHandler = (product) => {
        addItems(product);
    };
    const token = localStorage.getItem('token');
    const [listProduct, setListProduct] = useState([]);
    const getAllProduct = async () => {
        const data = await axios
            .get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/get-all?token=${token}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.data.result.data;
                }
            })
            .catch((err) => console.log(err));
        // const detailData = await data.json();

        // setDetails(detailData.result.data);
        // console.log(detailData.result.data);

        setListProduct(data);
    };

    useEffect(() => {
        getAllProduct();
    }, []);
    // console.log(listProduct)
    return (
        <div className="menu">
            <div className="bg-white rounded-md ">
                <table className="hover:table-fixed">
                    <tr>
                        <th>Product Id</th>
                        <th>Product</th>
                        <th>Product price</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                </table>
            </div>

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
