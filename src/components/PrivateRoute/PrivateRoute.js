import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { userContext } from './../../App';


const PrivateRoute = ({ children, ...rest }) => {

    const user = JSON.parse(localStorage.getItem('user')) || {};

    return (

        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );


};

export default PrivateRoute;