import React from "react";
import { Link } from "react-router";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass)
    }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" name="email" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <p className="">new to this website? please <Link className="underline" to="/register">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
