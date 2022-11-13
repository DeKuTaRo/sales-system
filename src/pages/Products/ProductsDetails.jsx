import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebars from '../../components/Sidebars/Sidebars';
import { toast } from 'react-toastify';

function ProductsDetails() {
    const [details, setDetails] = useState([]);
    const [unitCost, setUnitCost] = useState('');
    const [quantity, setQuantity] = useState('');

    let params = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const dataUpdateQuantity = {
        barcode: params.barcode,
        quantity: quantity,
    };

    const dataUpdatePrice = {
        barcode: params.barcode,
        unitCost: unitCost,
    };

    const fetchDetails = async () => {
        const data = await fetch(
            `${process.env.REACT_APP_BASE_URL}/api/v1/product/get-detail?token=${token}&barcode=${params.barcode}`,
        );
        const detailData = await data.json();

        setDetails(detailData.result.data);
    };

    useEffect(() => {
        fetchDetails();
        return () => {};

        // eslint-disable-next-line
    }, [params.barcode]);

    const handleUpdateQuantity = (e) => {
        e.preventDefault();
        axios
            .put(`${process.env.REACT_APP_BASE_URL}/api/v1/product/update-quantity?token=${token}`, dataUpdateQuantity)
            .then((res) => {
                console.log(res);
                toast.success(res.data.msg.en, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            })
            .catch((err) => {
                console.error(err);
                toast.error(err, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            });
    };

    const handleUpdatePrice = (e) => {
        e.preventDefault();
        axios
            .put(`${process.env.REACT_APP_BASE_URL}/api/v1/product/update-price?token=${token}`, dataUpdatePrice)
            .then((res) => {
                console.log(res);
                toast.success(res.data.msg.en, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            })
            .catch((err) => {
                console.error(err);
                toast.error(err, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            });
    };

    const handleDeleteProduct = (e) => {
        e.preventDefault();
        axios
            .delete(`${process.env.REACT_APP_BASE_URL}/api/v1/product/delete/${params.barcode}?token=${token}`)
            .then((res) => {
                console.log(res);
                toast.success(res.data.msg.en, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
                navigate(`/products`);
            })
            .catch((err) => {
                console.error(err);
                toast.error(err, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            });
    };

    return (
        <div className="w-full">
            <div className="flex">
                <Sidebars />
                <div className="w-full p-4">
                    <div className="bg-[#f9fafc] p-4 text-[#656565] font-normal text-lg rounded-t">
                        <h2>Details</h2>
                    </div>
                    <div className="bg-white text-black">
                        <form>
                            <div className="mt-4">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-3">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="barCode"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Barcode
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="barCode"
                                                defaultValue={details.barcode}
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                                // onChange={(e) => setBarcode(e.target.value)}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="createdAt"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Created At
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="createdAt"
                                                defaultValue={details.createdAt}
                                                readOnly
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="department"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Department
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="department"
                                                defaultValue={details.department}
                                                readOnly
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="productName"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Product Name
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="productName"
                                                defaultValue={details.productName}
                                                readOnly
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="updatedAt"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Updated At
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="updatedAt"
                                                defaultValue={details.updatedAt}
                                                readOnly
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-3">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="quantity"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Quantity
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="quantity"
                                                defaultValue={details.quantity}
                                                onChange={(e) => setQuantity(e.target.value)}
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="supplierCode"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Supplier Code
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="supplierCode"
                                                defaultValue={details.supplierCode}
                                                readOnly
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="supplierName"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Supplier Name
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="supplierName"
                                                defaultValue={details.supplierName}
                                                readOnly
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="unitCost"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Unit Cost
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="unitCost"
                                                defaultValue={details.unitCost}
                                                onChange={(e) => setUnitCost(e.target.value)}
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="unitOfMeasure"
                                                className="font-normal text-sm text-[#2d2d2d] inline-block mb-2"
                                            >
                                                Unit of Measure
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="unitOfMeasure"
                                                defaultValue={details.unitOfMeasure}
                                                readOnly
                                                className="border-[1px] border-solid border-[#bfcbd9] text-[#494949] text-sm h-14 block w-full py-[6px] px-[12px] bg-white rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 text-right">
                                <button
                                    className="p-3 mx-2 text-white bg-[#03a9f4] text-lg border-[1px] border-solid border-transparent py-1.5 rounded-md inline-block font-normal uppercase hover:text-white hover:bg-[#0286c2]"
                                    onClick={handleUpdatePrice}
                                >
                                    Update Price
                                </button>
                                <button
                                    className="p-3 mx-2 text-white bg-[#03a9f4] text-lg border-[1px] border-solid border-transparent py-1.5 rounded-md inline-block font-normal uppercase hover:text-white hover:bg-[#0286c2]"
                                    onClick={handleUpdateQuantity}
                                >
                                    Update Quantity
                                </button>
                                <button
                                    className="p-3 mx-2 text-white bg-red-500 text-lg border-[1px] border-solid border-transparent py-1.5 rounded-md inline-block font-normal uppercase hover:text-white hover:bg-red-700"
                                    onClick={handleDeleteProduct}
                                >
                                    Delete
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsDetails;
