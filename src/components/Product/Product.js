import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const product = props.product;
    const { _id, name, img, price } = product;

    return (
        <div className="col-md-4 mb-3">
            <div className="m-3 shadow rounded p-3 h-90 mb-5 ms-5 me-5"  >
                <img className="img-fluid" src={img} alt=""></img>
                <h6>{name}</h6>
                <Link to={`checkout/${_id}`}>
                    <div className="div">
                        <h5>{price}</h5>
                        <button>buy now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Product;