import React from "react";
import { Link } from "react-router";


const Register = () => {

    const handleRegister= e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass, name)
    }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <p className="">
                Already have an account? please {" "}
                <Link className="underline" to="/login">
                   Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
