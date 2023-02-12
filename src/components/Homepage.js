
import React, {useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
// import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import profile from '../assets/0.5x/Asset 1@0.5x.png'
import text_writer from './text_writer';
import "./Homepage.css"

export default function Homepage()  {
    const [loaded, setLoaded] = useState(true);
    const lines = ["programs.","blogs.","poems.", "stories."]
    text_writer();
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
        <div id="home" className={`flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center relative `}>
        
            <div className='w-16 md:w-32 lg:w-48'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" className='rounded-full' src={profile} onLoad={() => setLoaded(false)}/>
            </div> 
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
            
            <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
                <div className=" flex flex-col w-full mt-8">
                <p className="text-4xl text-gray-400">Hi, I'm</p>
                <h1 className="text-6xl font-bold">Siddhant Shah</h1>
                 <h4 className='text-4xl '>and I write <span
                    className="txt-rotate"
                    data-period="200"
                    data-rotate={lines}
                    ></span></h4>
                </div>
            </div>
        </div>
        </>
    )
}