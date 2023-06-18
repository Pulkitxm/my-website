import social from './socialData.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {  faGithub, faInstagram, faLinkedinIn, faMedium } from "@fortawesome/free-brands-svg-icons";
const SocialLinks = () => {

    /* need to use the map function to iterate over the social array and then display the icons */

    

    return (<div>
                
    {/* <ul className='flex flex-row m-7 justify-center items-center md:flex-col inset-0 gap-4'> */}
    <ul className='flex flex-row m-7 justify-center items-center inset-0 gap-4'>
        <li>
            <a href='https://linkedin.com/in/thesidshah' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
        </li>
       <li>
            <a href='https://github.com/thesidshah' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
       </li> 
        <li>
            <a href='https://siddhant-shah.medium.com/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faMedium} /></a>
        </li>
        <li>
        <a href='https://instagram.com/thebrainbubble' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
        </li>
        
    </ul>
</div>);
}
export default SocialLinks;