import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contents from './Contents/Contents';
import Expenes from './Expenes/Expenes';
import Products from './Products/Products';

function Pages() {
    // const location = useLocation();

    return (
        <Routes>
            <Route path="/" element={<Contents />} />
            <Route path="/products" element={<Products />} />
            <Route path="/expenes" element={<Expenes />} />
        </Routes>
    );
}

export default Pages;
