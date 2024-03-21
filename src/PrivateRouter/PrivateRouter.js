import React, { useContext } from 'react';
import { AuthContext } from '../userContext/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user ,loding } =useContext(AuthContext)
    if(loding){
        return <div>loding...</div>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;