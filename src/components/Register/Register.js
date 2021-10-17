import React from 'react';
import { useForm } from "react-hook-form";
import useAuthContext from '../../hook/useAuthContext';

const Register = () => {
    const { handelEmailPasswordRegister } = useAuthContext();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { name, email, password } = data;
        handelEmailPasswordRegister(name, email, password);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Your Name" {...register("name", { required: true })} />
                {errors.name && <span><br />Your name is required</span>}
                <br /><br />
                <input type="email" placeholder="Your Email" {...register("email", { required: true })} />
                {errors.email && <span><br />Your email is required</span>}
                <br /><br />
                <input type="password" placeholder="Type Password" {...register("password", { required: true, minLength: 8 })} />
                {errors.password && <span><br />8 character Password required</span>}
                <br /><br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;