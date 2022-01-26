import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import logo from '../../assets/tcs-twotter.jpg'
import './about.css'
function AboutCard() {
  return (
   
    <div className="container" >
      <div className="card" >
        <div className="image"  >
          <img href = "#" src ={logo}/>
        </div>
        <div className="content" >
          <h1 style={{fontWeight:"bold", display:"flex",alignItems: 'start'}}>System Engineer</h1>
          <h5 style={{display:"flex",alignItems: 'start', fontStyle:'italic'}}> Sept 2019-Present</h5>
        <ul >
            <li >
                Working as UI devloper.
            </li>
            <li>
            Collaborates with frontend team.
            </li>
            <li>
            Building things on React,redux.
            </li>
        </ul>
        </div>
      </div>    
    </div>
 
  );
}

export default AboutCard;