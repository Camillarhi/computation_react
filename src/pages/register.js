import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import NavBar from '../component/navBar';
import axiosService from '../services/axiosService';
import { successMessage } from '../utils/hotToast';

export default function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
    });
    const password = watch("password", "");

    const registerUser = async (data) => {
        const response = await axiosService.Auth.register(data)
        if (response?.data?.message) {
            successMessage("regitered successfully")
            navigate("/");
        }
    }

    return (
        <>
            <NavBar />
            <section className="vh-99">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong mt-5" style={{ borderRadius: '1rem' }}>
                                <form onSubmit={handleSubmit(registerUser)}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Register</h3>
                                        <div className="form-outline mb-4">
                                            <div className="row">
                                                <div className="col">
                                                    {errors?.name && (
                                                        <span className="text-danger font-weight-bold p-mr-6 error-msg">
                                                            <p>{errors.name.message}</p>
                                                        </span>
                                                    )}
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                        {...register("name", {
                                                            required: "Please enter your name",
                                                        })}
                                                    />
                                                    <label className="form-label" htmlFor="typeEmailX-2">Name</label>
                                                </div>
                                                <div className="col">
                                                    {errors?.email && (
                                                        <span className="text-danger font-weight-bold p-mr-6 error-msg">
                                                            <p>{errors.email.message}</p>
                                                        </span>
                                                    )}
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        {...register("email", {
                                                            required: "Please enter your email",
                                                        })}
                                                    />
                                                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <div className="row">
                                                <div className="col">
                                                    {errors?.password && (
                                                        <span className="text-danger font-weight-bold p-mr-6 error-msg">
                                                            <p>{errors.password.message}</p>
                                                        </span>
                                                    )}
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        name="password"
                                                        {...register("password", {
                                                            required: "Please enter your password",
                                                        })}
                                                    />
                                                    <label className="form-label" htmlFor="typeEmailX-2">Password</label>
                                                </div>
                                                <div className="col">
                                                    {errors?.confirmPassword && (
                                                        <span className="text-danger font-weight-bold p-mr-6 error-msg">
                                                            <p>{errors.confirmPassword.message}</p>
                                                        </span>
                                                    )}
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        {...register("confirmPassword", {
                                                            required: "Please confirm password",
                                                            validate: (value) =>
                                                                value === password || "Passwords does not match",
                                                        })}
                                                    />
                                                    <label className="form-label" htmlFor="typeEmailX-2">Confirm Password</label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Checkbox */}
                                        <button className="btn btn-primary btn-lg btn-block" type='submit'>Submit</button>
                                        <hr className="my-4" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
