import logo from './logo.svg';
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
  }, [])
  return (
    <div className="App dark">
      <div className="px-6 lg:px-20 xl:px-36 bg-slate-100 dark:bg-dark-900 dark:text-white ">
      <Navbar />
      <Homepage/>
    </div>
    </div>
  );
}

export default App;
