import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../userContext/UserContext';

const UserDetails = () => {
    const {user} = useContext(AuthContext)
    const [name ,setName] = useState(user.displayName)
    const myRef = useRef(user.displayName)
    const handleUserDetails =(event)=>{
        event.preventDefault()
        const name =myRef.current.value
        // const name = event.target.name.value;
        // setName(name)
        // handleChangleName()
        console.log(name)
    }
    // const handleChangleName=(event)=>{
    //     // event.preventDefault()
    //     const name = event.target.value;
    //     setName(name)
    // }
    
    return (
        <div>
            <form onSubmit={handleUserDetails} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" readOnly defaultValue={user.email} name='email' placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" ref={myRef}  defaultValue={name} name='name' placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" readOnly defaultValue={user.photoURL} name='photoURL' placeholder="your profile picture link" className="input input-bordered" required />
              </div>
              
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Change name</button>
              </div>
              {/* {
                success && <p>Registretion Successfully</p>
              } */}
            </form>
        </div>
    );
};

export default UserDetails;