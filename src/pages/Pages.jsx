import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './Account/Account';
import AccountAdd from './Account/AccountAdd';
import AccountDetails from './Account/AccountDetails';
import AccountMe from './Account/AccountMe';
import Expenes from './Expenes/Expenes';
import Login from './Login/Login';
import PageNotFound from './PageNotFound/PageNotFound';
import Products from './Products/Products';
import ProductsAdd from './Products/ProductsAdd';
import ProductsDetails from './Products/ProductsDetails';

function Pages() {
    // const location = useLocation();

    return (
        <Routes>
            <Route path="/account" element={<Account />} />
            <Route path="/accountAdd" element={<AccountAdd />} />
            <Route path="/accountDetails/:id" element={<AccountDetails />} />
            <Route path="/account/me" element={<AccountMe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productsAdd" element={<ProductsAdd />} />
            <Route path="/products/:barcode" element={<ProductsDetails />} />
            <Route path="/expenes" element={<Expenes />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Pages;
