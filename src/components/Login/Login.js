import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuthContext from '../../hook/useAuthContext';

const Login = () => {
    const { handelGoogleSignIn } = useAuthContext()

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handelSigninFromGoogle = () => {
        handelGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div>
            <h2>This is Login Compo</h2>
            <button onClick={handelSigninFromGoogle}>Google Sign-In</button>
        </div>
    );
};

export default Login;