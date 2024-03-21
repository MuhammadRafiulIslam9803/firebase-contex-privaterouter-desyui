import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../userContext/UserContext';

const Login = () => {
    const [invalidUser , setInvalidUser] =useState(false)

    const {logInUser} = useContext(AuthContext)
    const navigate  = useNavigate()

    const handleLoginbtn = (event) =>{
        event.preventDefault()
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email , password)

        logInUser(email , password).then(result =>{
            const user = result.user
            navigate('/login')
            console.log(user)
        })
        .catch(error =>{
            const errorMessage = error.message;
            setInvalidUser(errorMessage)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Its a RafiUI . Here you got many product .
            Including underWare to Jacket .</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginbtn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              {
                invalidUser && <p>Invalid user , Please <Link className=' text-emerald-600' to='/registretion'>Registration</Link> First</p>
              }
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;