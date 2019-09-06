import React from 'react';
import './App.css';
import Header from "./header";
import Main from "./main";
import Skills from "./skills";
import Projects from "./projects";
import Contacts from "./contacts";
import Footer from "./footer";
import Particles, {IParticlesParams as styles} from 'react-particles-js';
import { Link, animateScroll as scroll } from "react-scroll";

const particlesOptions = {
    "particles": {
        "number": {
            "value": 160,
                "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
                "random": true,
                "anim": {
                "speed": 4,
                    "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                    "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                    "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
            },
            "repulse": {
                "distance": 400,
                    "duration": 4
            }
        }
    }
};

function App() {
    return (
        <div className="App">
            <Particles params={particlesOptions} className='particles'/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
/*https://scotch.io/tutorials/implementing-smooth-scrolling-in-react*/
