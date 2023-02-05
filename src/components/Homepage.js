
import React, {useState} from 'react';
import logo from '../assets/wizardLogo.svg'; // Need to change this to some other image
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
// import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'
import "./Homepage.css"

export default function Homepage()  {
    const [loaded, setLoaded] = useState(true);

    return(
        <>
            {
            loaded ? 
            <div 
                className='fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center'
                >
                    Loading...
                </div>
                : null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" src={logo} onLoad={() => setLoaded(false)}/>
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className=" flex flex-col w-full mt-8">
                    <div className='typewriter w-min'>
                    <p className="text-xl text-gray-400">Hi, I'm</p>
                    <h1 className="text-2xl font-bold">Siddhant Shah</h1>
                    <p class="text-xl font-bold text-gray-300">Computer Science</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}