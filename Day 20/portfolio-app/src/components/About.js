import React from "react";
import { Figma } from 'lucide-react';
import { FaHtml5, FaCss3Alt} from 'react-icons/fa';
import { DiJavascript1, DiPython } from 'react-icons/di'; 

const About = () =>{
    return (
    <div className="about-container">
        <h2>About</h2>
        <div className="about-container1">
            <div className="profile-pic">
            <img src="" alt="my profile"/>
            </div>
            <div className="me">  
                <p>A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised 
                    over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in 
                    intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into 
                    innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes 
                    a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier.</p>
                <button className="cv-button">Download CV</button>
            </div>
         
        </div>
        <div className="about-container2">
            <div className="about-icons">
            <DiPython size={30} color="#fff" /> 
    
            </div>
            <div className="about-icons">
            <DiJavascript1 size={30} color="#fff" /> 
               
            </div>
            <div className="about-icons">
            <FaHtml5 size={30} color="white" />
              
            </div>
            <div className="about-icons">
            <FaCss3Alt size={30} color="white" />
              
            </div>
            <div className="about-icons">
            <Figma  size={30} />
            </div>
        </div>
    </div>)
}

export default About;