import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import "./styles.css";

const Auth = ({handleChange,formData,loadUser}) => {

  const navigate = useNavigate();



  const handleSubmitRegister =async (e) => {
    e.preventDefault();
  const user = await axios.post("http://localhost:4000/auth/register",{
    email: formData.email,
    password: formData.password,
    name: formData.name,
    entries: formData.entries
  });
  // Verify the user here and set the formData accordingly
  if (user.data) {
    // Redirect to the FaceInputField component
   loadUser(user.data)
      navigate("/");
    
  } else {
    // Handle error
    console.log(user.data.error);
  }
}

  const handleSubmit = async(e) => {
    e.preventDefault();
  const user =  await axios.post("http://localhost:4000/auth/login",{
    email:formData.email,
    password: formData.password,
    entries:formData.entries,
    name:formData.name
   }) 
    if (user.data.id) {
      console.log(user.data)
      loadUser(user.data)
      navigate("/");
    } else {
      // Handle error
      console.log(user.data.error);
    }
  };

  return (
    <div className="section">
      <div ame="container  md:w-32 lg:w-48">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3 text-blue-200">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                      
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <p className="">{false?"CARE: Username and password are case sensitive.":""}</p>

                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              autoComplete="off"
                              onChange={handleChange}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="password" 
                              className="form-style"
                              placeholder="Your Password"
                              autoComplete="off"
                              onChange={handleChange}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="btn mt-4" type="submit">
                            submit
                          </button>
                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" className="link">
                              Forgot your password?
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <form onSubmit={handleSubmitRegister}>
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-style"
                              placeholder="Your Full Name"
                              autoComplete="off"
                              onChange={handleChange}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              autoComplete="off"
                              onChange={handleChange}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              className="form-style"
                              placeholder="Your Password"
                              autoComplete="off"
                              onChange={handleChange}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="btn mt-4" type="submit">
                            submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
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
