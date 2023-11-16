import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./Auth.css";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  console.log(loading);

  const [isSignUp, setIsSIgnUp] = useState(false);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmPass: "",
    username: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmPass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmPass: "",
      username: "",
    });
  };
  return (
    <div className="auth">
      <div className="row p-5">
        <div className="">
          <div className="container">
            <div className="text-center">
              <h1 className="brandlogo">Social-Net</h1>
            </div>

            <div className="d-flex justify-content-center ">
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <h2
                    className="mt-2 text-center"
                    style={{ color: "rgb(255, 240, 206)", fontSize: "30px" }}
                  >
                    {isSignUp ? "Sign Up" : "Login"}
                  </h2>
                  <div className="form-row d-flex text-center">
                    {isSignUp && (
                      <>
                        <div className="form-group col mx-1">
                          <label htmlFor="firstname"></label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            required
                            onChange={handleChange}
                            value={data.firstname}
                            placeholder="Firstname"
                          />
                        </div>
                        <div className="form-group col mx-1">
                          <label htmlFor="lastname"></label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastname"
                            required
                            onChange={handleChange}
                            value={data.lastname}
                            placeholder="Lastname"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="form-group  mx-auto text-center w-50">
                    <label htmlFor="username"></label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      required
                      onChange={handleChange}
                      value={data.username}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-row d-flex text-center">
                    <div className="form-group col mx-1 ">
                      <label htmlFor="password"></label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        required
                        onChange={handleChange}
                        value={data.password}
                        placeholder="Password"
                      />
                    </div>
                    {isSignUp && (
                      <div className="form-group col mx-1">
                        <label htmlFor="confirmPassword"></label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          name="confirmPass"
                          required
                          onChange={handleChange}
                          value={data.confirmPass}
                          placeholder="Confirm Password"
                        />
                      </div>
                    )}
                  </div>
                  <div className=" d-flex justify-content-center">
                    <span style={{ display: confirmPass ? "none" : "block" }}>
                      *Confirm Password is not same
                    </span>
                    <button
                      type="submit"
                      className="btn mt-3"
                      style={{ width: "130px", background: "rgb(3, 201, 136)" }}
                    >
                      {loading ? "loading..." : isSignUp ? "Sign Up" : "Login"}
                    </button>
                  </div>
                </form>
                <div className="mt-3 text-center">
                  <span
                    onClick={() => {
                      setIsSIgnUp((prev) => !prev);
                      resetForm();
                    }}
                    style={{ cursor: "pointer" }}
                    className="text-secondary"
                  >
                    {isSignUp
                      ? "Already have an Account?...Login"
                      : "Don't have an account? SignUp"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
