import React from "react";
import '../Premieres/Premieres.css';
import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';


export default function Premieres() {
 
    return (
        <div className="fondo">
            <NavBar/>
            <h1 className="estrenos">NEXT RELEASES ...
            <p>Upcoming releases</p>
            <p>in our virtual cinema</p>
            </h1>
            <NavLink exact to="/home">
                <span className="add-1">
                   HOME
                </span>
                </NavLink>
        <div className="caja-movie">
            <section>
            <img src="https://www.elseptimoarte.net/carteles/341/la_gran_juventud_97490.jpg"/>
            <img src="https://www.elseptimoarte.net/carteles/341/la_sirenita_97114.jpg"/>
            <img src="https://www.elseptimoarte.net/carteles/341/fast_and_furious_10_97112.jpg"/>
            <img src="https://www.elseptimoarte.net/carteles/341/spider-man_cruzando_el_multiverso_97688.jpg"/>
            </section>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nftfxMGqSNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8LECfkm4fJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4TOpS3cdb3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b3_1cyJRaQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="copy">
        <hr></hr>
            <p className="text">www.cine.net. || Todos los derechos reservados 2023 || Francisco Jesus Sanabria</p>
            <a href="https://github.com/FranSanabri" target="_blank"><FontAwesomeIcon className="icon1" icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/francisco-jesus-sanabria-07b189236/" target="_blank"><FontAwesomeIcon className="icon1" icon={faLinkedin} /></a>
            <a href="https://instagram.com/fran.sanabria?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><FontAwesomeIcon className="icon1" icon={faInstagram}/></a>
        </div>
        </div>

    );
}