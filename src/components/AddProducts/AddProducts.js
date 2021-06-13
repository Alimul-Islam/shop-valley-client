import React, { useState } from 'react';
import Sidebar from './../Sidebar/Sidebar';
import { useHistory } from 'react-router';

const AddProducts = () => {
    const [product, setProduct] = useState({})
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/addProducts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                alert('Your Product is successfully added')
                history.replace('/')
            })
    }



    const handleOnBlur = (e) => {
        const newProduct = product;
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h5 className="m-5 ">Add Product</h5>
                    <form onSubmit={handleSubmit}>
                        <input type="text " className="form-control" onBlur={handleOnBlur} name="name" placeholder="Product Name" required></input>
                        <br /> <br />
                        <input type="text " className="form-control" onBlur={handleOnBlur} name="wight" placeholder="Enter Wight" required></input>
                        <br /><br />
                        <input type=" text" className="form-control" onBlur={handleOnBlur} name="price" placeholder="Price (TK)" required></input>
                        <br /><br />
                        <input type="text " className="form-control" onBlur={handleOnBlur} name="img" placeholder="Photo URL" required></input>
                        <br /> <br />
                        <button className="btn btn-success" >save </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProducts;