import React from 'react'
import { useForm } from 'react-hook-form';

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
    });

    return (
        <section className="vh-100" style={{ backgroundColor: '#508bfc' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                            <form onSubmit={() => console.log("ok")}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Register</h3>
                                    <div className="form-outline mb-4">
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                                <label className="form-label" htmlFor="typeEmailX-2">Name</label>
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                                <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                                <label className="form-label" htmlFor="typeEmailX-2">Password</label>
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                                <label className="form-label" htmlFor="typeEmailX-2">Confirm Password</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Checkbox */}
                                    <button to="/home" className="btn btn-primary btn-lg btn-block" type='submit'>Submit</button>
                                    <hr className="my-4" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
