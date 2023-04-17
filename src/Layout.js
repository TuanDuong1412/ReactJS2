import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import UserDetails from './components/ThucHanh/UserDetails';
import { redirect } from 'react-router-dom';
const Layout = () => {
    const UserDetails =()=>{
            navigate('./home')
    }
    const navigate = useNavigate();

    return (
        <div>
            <h2>Header Layout</h2>
            <Link to='/home'>home</Link>
            <br></br>
            <Link to="/about">About</Link>
            <br></br>
            <button onClick={UserDetails}>Go to home</button>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;