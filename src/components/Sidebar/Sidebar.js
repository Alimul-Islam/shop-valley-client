import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="m-5 p-5 ">
            <Link to='/admin' ><h3>Manage Product</h3></Link>
            <Link to='/addProduct' ><h3>Add Product</h3></Link>
        </div>
    );
};

export default Sidebar;