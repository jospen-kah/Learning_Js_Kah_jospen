import React from "react"
import { Facebook , Github , Linkedin, X} from 'lucide-react';





const Header = ()=>{
    return(
        <div className="header">
            <div className="intro">
                <p>Hi I am</p>
                <h4>KAH JOSPEN</h4>
                <h2>SOFTWARE ENGINEER</h2>
                <div className="Icons">
                    <a href="https://www.facebook.com/kah.jospenngum"><Facebook color="#ffffff" /></a>
                    <a href="https://github.com/jospen-kah"><Github color="#ffffff" /></a>
                    
                    <a href="https://www.linkedin.com/in/kah-jospen-ngum"><Linkedin color="#ffffff" /></a>
                    <a href="https://x.com/KahJospen"><X color="#ffffff" /></a>
                </div>
            
                <div className="Download">
                    <button>Hire Me</button>
                    <button className="cv-button">Download CV</button>
                </div>
                <div className="experience">
                    <p><span>1+</span><br/>Experience</p>
                    <p><span>5+</span><br/>Projects</p>
                    <p><span>10+</span><br/>Happy Clients</p>
                </div>
            </div>
            <div className="Image">
                <img src="./pp1.png"  alt="me" />
            </div>
        </div>
    )
}

export default Header