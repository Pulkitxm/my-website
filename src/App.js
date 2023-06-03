
import './App.css';
import {useEffect} from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import './components/branding.css';
// import curve from './assets/curve-hr.svg';

// import Skills from './components/Skills.js';
import Education from './components/Education/Education.js';
// import Experience from './components/Experience/Experience';
import Projects from './components/Projects/projects';

import {BrowserRouter, Routes, Route } from "react-router-dom";

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
      <Navbar/>
      <div className=" bg-slate-100 dark:bg-dark-900 dark:text-white ">
      
                <Routes>
                  
      <Route index element={<Homepage />}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/projects' element={<Projects/>} />
      <Route path="/*" element={<h1>Not found</h1>}/>
      </Routes>
      Note: This website is a work in progress. The source code will be available as a template for anyone to use once it's complete.
    </div>
    </div>
  );
}

export default App;
