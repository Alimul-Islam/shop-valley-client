import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation, useParams } from 'react-router';
import './Login.css';
import { Link } from 'react-router-dom';

if (!firebase.app.Length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    // const { _id } = useParams();
    const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState();
    let { from } = location.state || { from: { pathname: "/" } }

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(GoogleAuthProvider)
            .then((result) => {
                const user = result.user;
                const loggedInUser = { name: user.displayName, email: user.email };
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from);
                // history.replace('checkout')
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        <div className="container">
            <div className="text-center">
                {/* <Link to={`checkout/${_id}`}> */}
                <button onClick={handleGoogleSignIn} className="btn btn-primary login_btn ">Continue with Google</button>
                {/* </Link> */}
                <p>{error}</p>
            </div>
        </div>
    );
};

export default Login;