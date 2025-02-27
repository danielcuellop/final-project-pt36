import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useform";
import { Context } from "../store/appContext";


export const Login = () => {
    const { store, actions } = useContext(Context)

    const [inputValues, handleInputChange] = useForm({
        email: "",
        password: ""
    })

    const [error, setError] = useState("");

    const { email, password } = inputValues;
    const navigate = useNavigate()

    const loginUserRequest = async () => {
        actions.login({ email, password, navigate })
    }
    return (
        <section className="vh-100" style={{ backgroundColor: "green" }} >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                <span className="h1 fw-bold mb-0">Logo</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example17" className="form-control form-control-lg" name="email" value={email} onChange={handleInputChange} />
                                                <label className="form-label" for="form2Example17" >Email address</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" name="password" value={password} onChange={handleInputChange} />
                                                <label className="form-label" for="form2Example27" >Password</label>
                                            </div>
                                            {error !== "" && <div>{error}</div>}
                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="button" onClick={loginUserRequest}>Login</button>
                                            </div>

                                            <a className="small text-muted" href="#!">Forgot password?</a>

                                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account?
                                                <Link to="/signup">
                                                    <a href="#!"
                                                        style={{ color: "#393f81" }}>Register here</a>
                                                </Link>
                                            </p>

                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted">Privacy policy</a>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


}