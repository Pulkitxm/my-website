
const ExperienceCard = (args) => {
return(
<div class="flex flex-col md:flex-row grow ">
  
  <div class=" md:w-3/4">
    <h4 className="md:text-4xl mb-2 inline">{args.CompanyName}</h4>
<ul className="text-justify">
{args.Points.map((value) =>
{
    return (<li>{value}</li>)
}
)}
</ul>
  </div>
  <div class="items-center  md:w-1/4 m-4 ">
    <img src={args.Logo} className="inline w-40 h-40"/>
  </div>
</div>

);
}
export default ExperienceCard;