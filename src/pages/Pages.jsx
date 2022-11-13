import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './Account/Account';
import AccountAdd from './Account/AccountAdd';
import AccountDetails from './Account/AccountDetails';
import AccountMe from './Account/AccountMe';
import Expenes from './Expenes/Expenes';
import ChangePassword from './Login/ChangePassword';
import Login from './Login/Login';
import PageNotFound from './PageNotFound/PageNotFound';
import Products from './Products/Products';
import ProductsAdd from './Products/ProductsAdd';
import ProductsDetails from './Products/ProductsDetails';
import ProductsOufOfStock from './Products/ProductsOufOfStock';
import Sale from './Sale/Sale';
import Supplier from './Supplier/Supplier';
import SupplierAdd from './Supplier/SupplierAdd';
import SupplierDetail from './Supplier/SupplierDetail';

function Pages() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/account" element={<Account />} />
            <Route path="/accountAdd" element={<AccountAdd />} />
            <Route path="/accountDetails/:id" element={<AccountDetails />} />
            <Route path="/account/me" element={<AccountMe />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productsAdd" element={<ProductsAdd />} />
            <Route path="/products/:barcode" element={<ProductsDetails />} />
            <Route path="/productsOutOfStock" element={<ProductsOufOfStock />} />
            <Route path="/expenes" element={<Expenes />} />
            <Route path="/supplier" element={<Supplier />} />
            <Route path="/supplierAdd" element={<SupplierAdd />} />
            <Route path="/supplierDetail/:id" element={<SupplierDetail />} />
            {/* Sale route */}
            <Route path="/sale" element={<Sale />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Pages;
