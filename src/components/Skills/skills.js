import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"
import Frontend from "./skillset/Fontend/Frontend.js"
import Backend from "./skillset/Backend/Backend.js"

import PythonLogo from '../../assets/skills/python.svg';
import PyTorch from '../../assets/skills/PyTorch.svg'
import javascript from '../../assets/skills/javascript.svg'
import reactIcon from '../../assets/skills/react.svg'
import tailwind from '../../assets/skills/tailwind.svg'
import git from "../../assets/skills/git.svg"
import OpenCV from '../../assets/skills/OpenCV.svg'

export default function Skills() {
  const settings = {
    centerMode: true,
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
    ]
  };

  return (
    <div id="skills" className="mt-4 py-0.5 mb-2">
      <h1 className="text-4xl font-bold">Skills</h1>
      <p className="text-2xl text-gray-400">Here are some of my skills</p>

      <div className="my-4">
        <Slider {...settings}>
          <SkillCard name="Python" experience="3 years" img={PythonLogo} />
          <SkillCard name="PyTorch" experience="1 year" img={PyTorch} />
          <SkillCard name="OpenCV" experience="1 year" img={OpenCV} />
          <SkillCard name="JavaScript" experience="1 year" img={javascript} />
          <SkillCard name="react" experience="1 year" img={reactIcon} />
          <SkillCard name="TailWind" img={tailwind} />
          <SkillCard name="Git" experience="1 year" img={git} />
        </Slider>

        <div className='mt-10'>
          <Frontend />
        </div>
        <div className='mt-10'>
          <Backend />
        </div>
      </div>
    </div>
  );
}
