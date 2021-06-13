import React from 'react';
import { useHistory } from 'react-router';

const SingleProduct = (props) => {
    const pro = props.pro;
    const { _id, productName, productPrice, wight } = pro;
    const history = useHistory()
    const handleDelete = () => {
        fetch(`http://localhost:4000/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('Product deleted successfully')
                history.replace('/');
            });
    }
    return (
        <tr>
            <td>{productName}</td>
            <td>{wight}</td>
            <td>{productPrice}</td>
            <td><button onClick={handleDelete} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default SingleProduct;