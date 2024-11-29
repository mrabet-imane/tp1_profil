import React,{Component} from "react";
import img1 from "../../images/monProfil.png"
const Header=()=>{
    return (
        <header>
            <div class='photoProf'>
                <img src={img1} className="img1"/>
                <h5 className="myName">Imane M'rabet</h5>
            </div>
            <div className="container-title">
                <h1 className="titre">Bienvenue à votre espace privé</h1>
            </div>
        </header>
    )
}
export default Header;