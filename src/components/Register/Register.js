import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuthContext from '../../hook/useAuthContext';

const Register = () => {
    const { handelGoogleSignIn, handelEmailPasswordRegister } = useAuthContext();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { name, email, password } = data;
        handelEmailPasswordRegister(name, email, password);
    };
    return (
        <section className="hero-banner">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="form-signin  bg-light rounded-3">
                    <h1 className="h3 mb-3 font-weight-normal text-center">Please Sign Up</h1>

                    {errors.name && <span>Your name is required</span>}
                    <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="form-control" />


                    {errors.email && <span>Your email is required</span>}
                    <input type="email" placeholder="Your Email" {...register("email", { required: true })} className="form-control" />



                    {errors.password && <span>8 character Password required</span>}
                    <input type="password" placeholder="Type Password" {...register("password", { required: true, minLength: 8 })} className="form-control" />



                    <div className="checkbox mb-3  text-center">
                        Already Have An Account? <Link to="/login">Just Singin</Link>
                    </div>
                    <div className="text-center d-flex justify-content-evenly">
                        <button className="btn btn-lg btn-outline-secondary custom-btn-reverse" type="submit">Sign up</button>

                        <button className="btn btn-lg btn-outline-secondary custom-btn" onClick={handelGoogleSignIn}><i className="bi bi-google"></i> Sign up</button>

                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;