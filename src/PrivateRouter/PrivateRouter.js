import React, { useContext } from 'react';
import { AuthContext } from '../userContext/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user ,loding } =useContext(AuthContext)
    let location = useLocation();
    if(loding){
        return <div>loding...</div>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRouter;