import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import NavBar from '../component/navBar';
import axiosService from '../services/axiosService';

export default function Home() {
    const [display, setDisplay] = useState(0);
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const calculate = async (data) => {
        console.log({ data })
        let response;
        if (data?.operator === '+') {
            response = await axiosService.Compute.add(data)
        } else if (data?.operator === "-") {
            response = await axiosService.Compute.substract(data)
        } else if (data?.operator === "/") {
            response = await axiosService.Compute.divide(data)
        } else if (data?.operator === "*") {
            response = await axiosService.Compute.multiply(data)
        } else if (data?.operator === "%") {
            response = await axiosService.Compute.modulus(data)
        } else if (data?.operator === "√") {
            response = await axiosService.Compute.root(data)
        } else {
            return;
        }
        setDisplay(response?.data);
        setValue("firstInput", response?.data);
        setValue("secondInput", 0);
    };

    return (
        <>
        <NavBar />
        <section className="vh-99">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card mt-5 shadow-2-strong" style={{ borderRadius: '1rem' }}>
                            <form onSubmit={handleSubmit(calculate)}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">{display}</h3>
                                    <div className="form-outline mb-4">
                                        {errors?.firstInput && (
                                            <span className="text-danger font-weight-bold p-mr-6 error-msg">
                                                <p>{errors.firstInput.message}</p>
                                            </span>
                                        )}
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="firstInput"
                                            defaultValue={display}
                                            name="firstInput"
                                            {...register("firstInput", {
                                                required: "Please enter a number",
                                            })}
                                        />
                                        <label className="form-label" htmlFor="typeEmailX-2">First Value</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        {errors?.password && (
                                            <span className="text-danger font-weight-bold p-mr-6 error-msg">
                                                <p>{errors.password.message}</p>
                                            </span>
                                        )}
                                        <select
                                            className='form-select'
                                            id="operator"
                                            name="operator"
                                            {...register("operator", {
                                                required: "Please choose an operator",
                                            })}>
                                            <option></option>
                                            <option value="+">+</option>
                                            <option value="-">-</option>
                                            <option value="/">/</option>
                                            <option value="*">*</option>
                                            <option value="%">%</option>
                                            <option value="√">√</option>

                                        </select>
                                        <label className="form-label" htmlFor="typePasswordX-2">Operator</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        {errors?.secondInput && (
                                            <span className="text-danger font-weight-bold p-mr-6 error-msg">
                                                <p>{errors.secondInput.message}</p>
                                            </span>
                                        )}
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="secondInput"
                                            name="secondInput"
                                            defaultValue={0}
                                            {...register("secondInput", {
                                                required: "Please enter a number",
                                            })}
                                        />
                                        <label className="form-label" htmlFor="typePasswordX-2">Second Value</label>
                                    </div>
                                    {/* Checkbox */}
                                    <div className='d-flex justify-content-around'>
                                        <button className="btn btn-danger btn-lg btn-block" onClick={() => { reset(); setDisplay(0) }}>Clear</button>
                                        <button className="btn btn-primary btn-lg btn-block" type='submit'>Calculate</button>
                                    </div>
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
