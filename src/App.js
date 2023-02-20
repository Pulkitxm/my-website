
import './App.css';
import {useEffect} from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import './components/branding.css';
import curve from './assets/curve-hr.svg';

import Skills from './components/Skills.js';
import Education from './components/Education/Education.js';
import Experience from './components/Experience/Experience';


function App() {
  useEffect(() => {
    document.title = "Siddhant Shah";
    AOS.init();
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
  }, [])
  localStorage.theme = "light";
  return (
    <div className="App">
      <div className="px-6 lg:px-20 xl:px-36 bg-slate-100 dark:bg-dark-900 dark:text-white ">
      <Navbar />
      <Homepage/>
      <img src={curve} className="w-full md:h-2 " alt="hr" />
        <h1 className='text-3xl md:text-5xl m-10 pb-10'>Education and Experiences</h1>
        <Education/>
        <img src={curve} className="w-full md:h-2 " alt="hr" />
        <Experience/>
        <Skills/>
      
    </div>
    </div>
  );
}

export default App;
