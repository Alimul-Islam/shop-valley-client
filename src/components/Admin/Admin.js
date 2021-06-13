import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './../Sidebar/Sidebar';
import SingleProduct from './../SingleProduct/SingleProduct'

const Admin = () => {
    const [myProduct, setMyProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/productOrdered')
            .then(res => res.json())
            .then(data => setMyProduct(data))

    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <div className="m-5 "><h5>Manage Product</h5></div>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Wight</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myProduct.map(pro => <SingleProduct pro={pro} ></SingleProduct>)
                            }
                        </tbody>
                    </table>


                </div>
            </div>

        </div>
    );
};

export default Admin;