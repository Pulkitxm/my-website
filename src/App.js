import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import AOS from 'aos';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
function App() {
  useEffect(() => {
    document.title = "Siddhant Shah";
    AOS.init();
  }, [])
  return (
    <div className="App">
      <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Homepage/>
    </div>
    </div>
  );
}

export default App;
