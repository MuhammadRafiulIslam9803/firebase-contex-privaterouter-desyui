import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../userContext/UserContext';

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
                    user?.email ?  
                    <div>
                        <p>Welcome {user.email} <small onClick={handleLogOut}><Link className="btn btn-ghost text-xl" to='/logout'>Logout</Link></small></p>
                        
                    </div>
                    :
                     <div>
                        <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
                        <Link className="btn btn-ghost text-xl" to='/registretion'>Registration</Link>
                     </div>
                 }
                
                </div>
            </div>
        </div>
    );
};

export default Header;