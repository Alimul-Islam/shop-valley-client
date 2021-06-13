import React, { useEffect, useState } from 'react';
// import fakeData from '../Fakedata/fakeData.json'
import Product from '../Product/Product';
const TotalProducts = () => {
    // const addAllProducts = () => {
    //     fetch('http://localhost:4000/addProducts', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(fakeData)

    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }

    const [productData, setProductData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProductData(data));
    }, [])


    return (
        <div>
            <div className="row">
                {/* <button onClick={addAllProducts}>add all</button> */}
                {
                    productData.map(e => <Product product={e}></Product>)
                }
            </div>
        </div>
    );
};

export default TotalProducts;