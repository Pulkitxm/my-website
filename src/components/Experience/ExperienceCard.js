import IotIot from "../../assets/Experiences/IoTIOT_in.png"
const ExperienceCard = (args) => {
return(
<div class="flex flex-col md:flex-row grow ">
  <div class="items-center md:w-1/3 border-4 ">
    <img src={IotIot} className="inline h-44"/>
  </div>
  <div class=" md:w-2/3 border-4">
    <h4 className="md:text-5xl mb-2">IoTIoT.in</h4>
<ul className="text-justify">
<li>Conducted experiments with Convolutional Neural Networks (CNNs) to create a facial recoginition system
that is cost efficient and requires as less as 15 data points of the face.</li>
<li>Used TensorFlow, Keras, NumPy and other libraries based in Python and interfaced it with the startup’s ShunyaOS on Raspberry Pi, reached accuracy levels of about 91%.</li>
</ul>
  </div>
</div>

);
}
export default ExperienceCard;