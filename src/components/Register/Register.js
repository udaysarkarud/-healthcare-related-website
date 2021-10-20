import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation, Link } from 'react-router-dom';
import useAuthContext from '../../hook/useAuthContext';

const Register = () => {
    const { handelGoogleSignIn, handelEmailPasswordRegister, singupError, setSingupError, setIsLoading } = useAuthContext();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handelRedirect = () => {
        history.push(redirect_url)
    }

    const handelSigninFromGoogle = () => {
        handelGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
            }).catch((error) => {
                setSingupError(error.code)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const onSubmit = data => {
        const { name, email, password } = data;
        handelEmailPasswordRegister(name, email, password, handelRedirect);
    };
    return (
        <section className="hero-banner">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="form-signin  bg-light rounded-3">
                    <h2 className="h4 mb-4 font-weight-normal text-center fw-bold">{
                        singupError ? singupError.substr(10) : 'Register your account'
                    }</h2>

                    {errors.name && <span>Your name is required</span>}
                    <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="form-control" autoComplete="off" />


                    {errors.email && <span>Your email is required</span>}
                    <input type="email" placeholder="Your Email" {...register("email", { required: true })} className="form-control" autoComplete="off" />



                    {errors.password && <span>8 character Password required</span>}
                    <input type="password" placeholder="Type Password" {...register("password", { required: true, minLength: 8 })} className="form-control" autoComplete="off" />



                    <div className="checkbox mb-3  text-center">
                        Already Have An Account? <Link to="/login">Just Singin</Link>
                    </div>
                    <div className="text-center d-flex justify-content-evenly">
                        <button className="btn btn-lg btn-outline-secondary custom-btn-reverse" type="submit">Sign up</button>

                        <button className="btn btn-lg btn-outline-secondary custom-btn" onClick={handelSigninFromGoogle} type="button"><i className="bi bi-google"></i> Sign up</button>

                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;