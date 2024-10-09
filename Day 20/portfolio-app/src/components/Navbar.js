import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <p className='logo'>Logo</p>
            <div className="nav-tag">

                <NavLink 
                   to = '/'
                   className={({isActive}) => ( isActive? 'active-link': '')}
                   end
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/Services' 
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    Services
                </NavLink>
                <NavLink 
                    to='/About' 
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    About Me
                </NavLink>
                <NavLink 
                    to='/Project' 
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    Project
                </NavLink>
                <NavLink 
                    to='/Contact' 
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    Contact me
                </NavLink>
            </div>

            <button>Hire Me</button>
        </div>
    );
}

export default Navbar;
