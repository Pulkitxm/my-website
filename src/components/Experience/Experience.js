import ExperienceCard from './ExperienceCard.js';


//Companies
import IotIot from "../../assets/Experiences/IoTIOT_in.png";
import Globant from "../../assets/Experiences/Globant.svg";

//Data About the Companies
import IoTIoT from "./IoTIoTPoints.json";
import GlobantPoints from "./Globant.json";


const Experience=()=> {
    return(
        <div className='flex flex-col my-10 gap-4'>
            <ExperienceCard Logo={IotIot} CompanyName = {IoTIoT['Company Name']} Points = {IoTIoT.Points}/>
            
            <ExperienceCard Logo={Globant} CompanyName = {GlobantPoints['Company Name']} Points = {GlobantPoints.Points}/>
        </div>
    )
}
export default Experience;