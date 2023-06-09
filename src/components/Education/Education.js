import React from "react";
import EducationCard from "./EducationCard";
import sppu from '../../assets/uop_logo.png';
import northeasternDark from '../../assets/NortheasternLogodark.svg';
import northeasternLight from '../../assets/NortheasternLogo.svg';

export default function Education() {
    if(localStorage.theme === 'light') {
        var northeastern = northeasternLight;
    }
    else {
        var northeastern = northeasternDark;
    }
    const northesatern_deets = {
        schoolname: "Northeastern University",
        schooldeets: `I am building on top of the strong research foundation from Pune University in the fields of Software Development and Artificial Intelligence. 
        Northeastern has given me the opportunity to explore topics across the field! from Advanced Algorithmic topics in Graph Theory to the foundational topics of Natural Language processing.
         I have taken a keen interest in Computer Vision as well (For which I had started a blogging series in Summer of 2022).`,
        timeframe: "September 2021 - May 2023"
    };
    const nbn_deets = {
        schoolname: "Savitribai Phule Pune University",
        schooldeets:`
        For every skill that imparts a high impact on the world, there's a steep learning curve. The curriculum at Savitribai Phule Pune University is aggressively aimed at buidling a strong 
        foundation that's broad enough to cover every skill conceivable for creating Engineers of today (read: tomorrow). I have had the good fortune to work on projects that have given me literal chills! 
        One of them being my work on Software Defined Networks under Prof. Bendale's guidance.
        `,
        timeframe:"August 2016 - May 2020"
    };

    return(<div className=" flex flex-col space-y-2">
    <EducationCard  logo={northeastern} schoolname={northesatern_deets.schoolname} schooldeets={northesatern_deets.schooldeets} timeframe={northesatern_deets.timeframe}/>
    <EducationCard  logo={sppu} schoolname={nbn_deets.schoolname} schooldeets={nbn_deets.schooldeets} timeframe={nbn_deets.timeframe}/>
    </div>
    );
}