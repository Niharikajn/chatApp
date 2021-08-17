import React from 'react'
import { GoogleOutlined, FacebookOutlined, ColumnHeightOutlined } from '@ant-design/icons';
// import { Card, CardActions, Button, makeStyles, Typography, IconButton } from '@material-ui/core';
import "firebase/app";
import {auth} from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
    //const classes = useStyles();
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to chat!!</h2>

                <div className="login-button google" 
                onClick={() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> sign in with google
                </div>

                <br></br>
                <br></br>

                <div className="login-button facebook">
                    <FacebookOutlined /> sign in with facebook
                </div>
            </div>
        </div>
    )
}
export default Login;
