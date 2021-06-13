import React from 'react';
import TotalProducts from '../TotalProducts/TotalProducts';

const Home = () => {
    return (
        <div className="container">
            <br />
            <div className="d-flex justify-content-center">
                <input className="form-control" type="text" placeholder="Search...." />
                <button className="btn btn-primary"> Search</button>
            </div>
            <TotalProducts></TotalProducts>
        </div>
    );
};

export default Home;