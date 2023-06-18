
import React, {useEffect, useState} from 'react';
import profile from '../assets/n.jpg'
import "./Homepage.css";
import SocialLinks from './SocialLinks';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Skills from '../components/Skills';
import TypeWriter from '../TypeWriter';
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
        
        <div id="home" className={`flex w-full h-screen gap-5 items-center justify-center relative flex-col md:flex-row  `}>
            
            <div className='w-16 md:w-32 lg:w-48'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" className='rounded-full' src={profile} onLoad={() => setLoaded(false)}/>
            </div> 
            
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
            <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
                <div className=" flex flex-col w-full mt-8">
                <p className="text-4xl text-gray-400">Hi, I'm</p>
                <h1 className="text-6xl font-bold">Siddhant Shah</h1>
                 <h4 className='text-4xl '>and I write  <TypeWriter/>
                    
                    </h4>
                </div>
                {/* <div className='md:absolute md:left-0 md:top-1/3'>  Removing this so that it comes right under write, and then that makes sense even if the css is not injected, which is common in most devices 
                I am unable to solve the CSS issue. */ }
                    <SocialLinks/>
                    
                {/* </div> */}
                
            </div>
        </div>
        <div id='Resume'>
        <Education/>
        <Experience/>
        <Skills/>
        </div>
        </>
    )
}