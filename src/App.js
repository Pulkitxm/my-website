
import './App.css';
import {useEffect} from 'react'
import AOS from 'aos';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import './components/branding.css'

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
      <div className="px-6 lg:px-20 xl:px-36 bg-slate-100 dark:bg-dark-900 dark:text-white dark:">
      <Navbar />
      <Homepage/>
    </div>
    </div>
  );
}

export default App;
