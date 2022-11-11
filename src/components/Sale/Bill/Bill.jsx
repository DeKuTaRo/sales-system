import React from 'react';
import './Bill.scss';

function Bill({ products, empty, remove }) {
    var total = products.reduce((amount, item) => amount + parseInt(item.price), 0);

    const handleEmptyBill = () => {
        empty();
    };

    const handlePrint = () => {
        window.print();
    };

    const handleDeleteProduct = (item) => {
        remove(item);
    };
    return (
        <div className="bill">
            <div className="bill__information">
                <div className="cafe">
                    <h3 className="cafe__name">BILL DETAIL</h3>
                    <p>Staff Name</p>
                    <p>Time</p>
                    <p className="cafe__number">888-888-8888</p>
                    <p className="invoice__number">Invoice #5080</p>
                </div>
                <div className="bill__table">
                    <table>
                        <thead>
                            <tr>
                                <th className="items__description">Description</th>
                                <th className="items__qty">Qty</th>
                                <th className="items__price">Price</th>
                                <th className="remove-icon">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((item, index) => (
                                <tr key={index}>
                                    <td className="items__description">{item.name}</td>
                                    <td>1</td>
                                    <td>{item.price}</td>
                                    <td onClick={() => handleDeleteProduct(item)} className="remove-icon">
                                        ❌
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="subtotal">
                    <hr />
                    <div className="subtotal__price">Subtotal: </div>
                    <hr />
                </div>
                <div className="discount">
                    <hr />
                    <div className="discount__price">Discount: </div>
                    <hr />
                </div>
                <div className="Change_Due">
                    <hr />
                    <div className="changeDue_price">change Due: </div>
                    <hr />
                </div>
                <div className="total">
                    <hr />
                    <div className="total__price">Total: </div>
                    <hr />
                </div>
            </div>
            <div className="bill__actions">
                <button onClick={() => handlePrint()}>💳</button>
                <button onClick={() => handleEmptyBill()}>🗑️</button>
            </div>
        </div>
    );
}

export default Bill;
