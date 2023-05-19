import React from "react";
import NavBar from "../NavBar/NavBar"; 
import './Home.css' 
import Movies from "../ViewMoive/functions";
/*  import Card from "../Card/Card";  */


export default function Home({}) {
     return (
        <div className="homeContainer">
            <header>
            <NavBar />  
            </header>
            <h1 className="best">BEST MOVIES SO FAR</h1>
            <div className="slider">
            
            <img src="https://cps-static.rovicorp.com/2/Open/A24/Program/48859532/_derived_jpg_q90_310x470_m0/48859532_The_Whale_Poster_2x3_6_1673603713520_15.jpg"></img>
            <img src="https://www.dosismedia.com/wp-content/uploads/2022/09/los-fabelman-the-fabelmans-trail.jpg"></img>   
            <img src="https://img.theepochtimes.com/assets/uploads/2023/02/18/Ant-Man-and-The-Wasp-Quantumania-8-1200x1777.jpg"></img>
            <img src="https://i.kym-cdn.com/photos/images/facebook/002/489/170/4f5"></img>
            </div>
            <main className="movies-container"> 
               <Movies/>
            </main>
            
             
        </div>
    );
}