import React from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css'
/* import SearchBar from "./SearchBar"; */

export default function NavBar() {
    return (
        <>
        <nav className="navbar">
            {/* <SearchBar/> */}
            <NavLink exact to="/premieres">
                <span className="add">
                   PREMIERES
                </span>
 </NavLink>
            <img className="logo-1" src="https://logos-download.com/wp-content/uploads/2018/08/Google_Play_logo_movies_tv.png" />
            {/* <NavLink exact to="/about">
                <span className="about">
                    About
                </span>

            </NavLink> */}
        </nav>
        </>
    )
}