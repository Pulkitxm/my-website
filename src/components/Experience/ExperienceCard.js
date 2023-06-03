
const ExperienceCard = (args) => {
return(
<div className="flex flex-col md:flex-row grow ">
  
  <div className=" md:w-3/4">
    <h4 className="text-xl md:text-4xl mb-2 inline">{args.CompanyName}</h4>
<ul className="text-justify">
{args.Points.map((value) =>
{
    return (<li>{value}</li>)
}
)}
</ul>
  </div>
  <div className="items-center  md:w-1/4 m-4 ">
    <img src={args.Logo} className="inline w-40 h-40"/>
  </div>
<span className=""></span>
</div>

);
}
export default ExperienceCard;