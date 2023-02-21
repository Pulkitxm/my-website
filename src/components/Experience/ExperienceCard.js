import IotIot from "../../assets/Experiences/IoTIOT_in.png"
const ExperienceCard = (args) => {
return(
<div class="flex flex-col md:flex-row grow ">
  <div class="items-center md:w-1/3 border-4 ">
    <img src={IotIot} className="inline h-44"/>
  </div>
  <div class=" md:w-2/3 border-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
</div>

);
}
export default ExperienceCard;