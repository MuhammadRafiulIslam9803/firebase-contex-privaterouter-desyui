import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../userContext/UserContext';

const REgistration = () => {
    const [success ,setSuccess] =useState(false)
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegisterbtn = (event) =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log( name ,email , password)

        createUser(email ,password).then(result => {
            const user = result.user;
            setSuccess(true)
            navigate('/login')
            console.log(user)
        })
        .catch((error) => {
            
            console.error( error.message)
            // ..
          });


    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
            <p className="py-6">Its a RafiUI . Here you got many product .
            Including underWare to Jacket .</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegisterbtn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
              </div>
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
                  <Link to="/login" className="label-text-alt link link-hover">Already have an Account?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
              {
                success && <p>Registretion Successfully</p>
              }
            </form>
          </div>
        </div>
      </div>
    );
};

export default REgistration;