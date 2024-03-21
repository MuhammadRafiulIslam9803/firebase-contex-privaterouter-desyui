import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const Mian = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Mian;