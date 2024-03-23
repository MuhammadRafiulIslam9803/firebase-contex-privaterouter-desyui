import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../userContext/UserContext';
import { FaUser } from "react-icons/fa6";

const Header = () => {
    const {user , logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut=()=>{
        logOut()
        navigate('/login')
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between">
                <div>
                <button className="btn btn-ghost text-xl">RafiUI</button>
                <Link className="btn btn-ghost text-xl" to='/home'>Home</Link>
                <Link className="btn btn-ghost text-xl" to='/product'>Product</Link>
                <Link className="btn btn-ghost text-xl" to='/about'>About</Link>
                </div>
                <div>
                {
                    user?.uid ?  
                    <div className='flex justify-between align-middle'>
                        <div>
                        <p>Welcome {user.displayName} <small onClick={handleLogOut}
                        ><Link className="btn btn-ghost text-xl" to='/logout'>Logout</Link>
                        </small></p>
                        </div>
                        <div>
                        {
                            user?.photoURL ?
                            <Link to="userDetails"><img className=" h-14 w-12 rounded" src={user.photoURL}  alt="" /></Link>
                            : 
                            <FaUser/>
                        }
                        </div>
                    </div>
                    :
                     <div>
                        <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
                        <Link className="btn btn-ghost text-xl" to='/registretion'>Registration</Link>
                     </div>
                 }
                
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Header;