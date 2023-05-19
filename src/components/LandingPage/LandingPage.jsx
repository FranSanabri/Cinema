import React from "react";
import { Link } from 'react-router-dom';
import '../LandingPage/LandingPage.css';

export default function LandingPage() {
 
    return (
        <div className="box">
            <div className="container">
            <img className="logo-10" src="https://imagensemoldes.com.br/wp-content/uploads/2020/06/Movie-Logo-Cinema-PNG.png" />
                <h1 className="welcomeMessage">welcome to the best movies</h1>
                <span className="loveMessage">Here you can search for movies virtually as if you were in a theater!</span>
                <button className="homeRedirect"><Link to="/home">Know about the movies</Link></button>
            </div>
        </div>

    );
}