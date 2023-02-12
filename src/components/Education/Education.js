import React from "react";
import EducationCard from "./EducationCard";
import northeastern from '../../assets/NortheasternLogo.svg'
import sppu from '../../assets/SPPU_logo.jpeg'
export default function Education() {
    const northesatern_deets = {
        schoolname: "Northeastern University",
        schooldeets: "I am studying Computer Science at the Khoury College of Computer Sciences.",
        timeframe: "September 2021 - May 2023"
    };
    const nbn_deets = {
        schoolname: "Savitribai Phule Pune University",
        schooldeets:`I spent 4 memorable years at Birla Institute of Technology and Science, a premier engineering college in picturesque Pilani! At BITS, I was the coordinator of the Department of Stage Controls, a body responsible for planning and logistics of Auditorium events during Oasis. I was also a member of ACM, BITS Pilani chapter, and the college football team.
        A few lines are not enough to show my gratitude, but I came here looking for Copper, and I found Gold.`,
        timeframe:"August 2016 - May 2020"
    };
    const n = 2; //number of education cards
    return(<div className=" grid gap-2 grid-rows ">
    <EducationCard  logo={northeastern} schoolname={northesatern_deets.schoolname} schooldeets={nbn_deets.schooldeets} timeframe={northesatern_deets.timeframe}/>
    <EducationCard flip="true" logo={sppu} schoolname={nbn_deets.schoolname} schooldeets={nbn_deets.schooldeets} timeframe={nbn_deets.timeframe}/>
    <EducationCard  logo={northeastern} schoolname={northesatern_deets.schoolname} schooldeets={northesatern_deets.schooldeets} timeframe={northesatern_deets.timeframe}/>
    </div>
    );
}