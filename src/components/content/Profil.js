import React,{Component} from "react";
import img1 from "../../images/monProfil.png"
const Profil=()=>{
    return (
        <section>
           
            <div className="divPro" className="Style">
                <h4 className="TitrePro">Profil de stagiaire</h4>
                <div className="divProCon" >
                    
                        <img src={img1} className="img1"/>
                    <p>
                        ID:2005062200197 <br></br>
                        Groupe:DEVOFS202<br></br>
                        Nom:M'RABET Imane<br></br>
                    </p>
                </div>
            </div>
        <div className="Style">
            <h4>General information</h4>
            <table className="table">
                
                <tr>
                    <th>Roll</th>
                    <td>:</td>
                    <td>125</td>
                </tr>
                <tr>
                    <th>Academic year</th>
                    <td>:</td>
                    <td>2024</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>:</td>
                    <td>Female</td>
                </tr>
                <tr>
                    <th>Religion</th>
                    <td>:</td>
                    <td>Group</td>
                </tr>
                <tr>
                    <th>Blood</th>
                    <td>:</td>
                    <td>Blood</td>
                </tr>
            </table>
        </div>
        <div className="Style">
            <h4>Other information</h4>
            <p>
                lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum test lorem ipsum testlorem ipsum test
                lorem ipsum testlorem ipsum testlorem ipsum testlorem ipsum testlorem ipsum testlorem ipsum testlorem ipsum testlorem ipsum testlorem ipsum testlorem ipsum testlorem ipsum testlorem ipsum test
            </p>
        </div>
            
        </section>
    )
}
export default Profil