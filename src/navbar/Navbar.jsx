import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () =>{
    return(
        <BrowserRouter>
        <nav className={s.navbar}>
            <NavLink exact to='/'>News</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/messages'>Messages</NavLink>
            <NavLink to='/music'>Music</NavLink>
        </nav>
        </BrowserRouter>
    );
}

export default Navbar;