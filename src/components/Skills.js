import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import PythonLogo  from '../assets/skills/python.svg';
import PyTorch from '../assets/skills/PyTorch.svg'
import javascript from '../assets/skills/javascript.svg'
import reactIcon from '../assets/skills/react.svg'
import tailwind from '../assets/skills/tailwind.svg'
import git from "../assets/skills/git.svg"

export default function Skills(){
    const settings = {centerMode: true,
        infinite: true,
        
        autoplay: true,
        autoplaySpeed: 1200,
        arrows: false,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]};
    // const settings ={  dots: false,
    // infinite: true,
    // speed: 300,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    //   // You can unslick at a given breakpoint now by adding:
    //   // settings: "unslick"
    //   // instead of a settings object
    // ]};
    return (
        <div id="skills" className="mt-4">
            <h1 className="text-4xl font-bold">Skills</h1>
            <p className=" text-2xl text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
            <Slider {...settings}>
            <SkillCard name="Python" experience="3 years" img={PythonLogo}/>
            <SkillCard name="PyTorch" experience="1 year" img={PyTorch}/>
            <SkillCard name="JavaScript" experience="1 year" img={javascript}/>
            <SkillCard name="react" experience="1 year" img={reactIcon} />
            <SkillCard name="TailWind"  img={tailwind} />
            <SkillCard name="Git" experience="1 year" img={git} />

            </Slider>
            </div>
        </div>
    );
}

