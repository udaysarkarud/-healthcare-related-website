import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuthContext from '../../hook/useAuthContext';

const Login = () => {
    const { handelGoogleSignIn, handelEmailPasswordLogin, setIsLoading } = useAuthContext()

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handelSigninFromGoogle = () => {
        handelGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        handelEmailPasswordLogin(email, password);
    };
    return (
        <section className="hero-banner">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="form-signin  bg-light rounded-3">
                    <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>

                    {errors.email && <span>Your email is required</span>}
                    <input type="email" placeholder="Your Email" {...register("email", { required: true })} className="form-control" />

                    {errors.password && <span>Your Password required</span>}
                    <input type="password" placeholder="Type Password" {...register("password", { required: true, minLength: 8 })} className="form-control" />



                    <div className="checkbox mb-3  text-center">
                        Don't Have Account? <Link to="/register">Singup Now</Link>
                    </div>
                    <div className="text-center d-flex justify-content-evenly">
                        <button className="btn btn-lg btn-outline-secondary custom-btn-reverse" type="submit">Sign in</button>

                        <button className="btn btn-lg btn-outline-secondary custom-btn" onClick={handelSigninFromGoogle}><i className="bi bi-google"></i> Sign in</button>

                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;