import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Employee from './Employee/Employee';
import EmployeeAdd from './Employee/EmployeeAdd';
import EmployeeDetails from './Employee/EmployeeDetails';
import Expenes from './Expenes/Expenes';
import Login from './Login/Login';
import Products from './Products/Products';
import ProductsAdd from './Products/ProductsAdd';
import ProductsDetails from './Products/ProductsDetails';

function Pages() {
    // const location = useLocation();

    return (
        <Routes>
            <Route path="/employee" element={<Employee />} />
            <Route path="/employeeAdd" element={<EmployeeAdd />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productsAdd" element={<ProductsAdd />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/expenes" element={<Expenes />} />
        </Routes>
    );
}

export default Pages;
