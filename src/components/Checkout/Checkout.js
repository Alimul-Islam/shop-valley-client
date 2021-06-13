import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



const Checkout = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const user = JSON.parse(localStorage.getItem('user'));
    const [OrderData, setOrderData] = useState({
        email: user.email
    })

    // const handleDateChange = (e) => {
    //     const newOrderData = OrderData;
    //     newOrderData.date = e.target.value;
    //     setOrderData(newOrderData);
    // }

    const handleSubmit = () => {

        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(OrderData)

        })
            .then(res => res.json())
            .then(data => console.log(data))


        // console.log(OrderData)

        alert("Order Placed Successfully")

        // e.preventDefault();
    }
    useEffect(() => {
        fetch(`http://localhost:4000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                const newOrderData = { ...OrderData }
                newOrderData.productName = data.name;
                newOrderData.productPrice = data.price
                setOrderData(newOrderData);

            })

    }, [id])

    return (
        <div className="container">
            <div className=' d-flex justify-content-center m-5'>
                <div className="form-control " >
                    <h3>Checkout</h3>
                    <input type="text" name="Description" placeholder="Product Name" value={product.name} ></input>
                    <br /><br />
                    <input type="text" name="Price" placeholder="Price" value={product.price} tk ></input>
                    <br /><br />
                    {/* <input type="date" name="date" onchange={handleDateChange} ></input>
                    <br /> */}
                    <br />
                    <Link to="/home">
                        <button onClick={handleSubmit} className="btn btn-success"> Place order</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;