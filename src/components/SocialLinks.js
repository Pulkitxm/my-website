import social from './socialData.json';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn, faMedium } from "@fortawesome/free-brands-svg-icons";
const SocialLinks = () => {

    // return(
    //     <div>
    //         {
    //             social.links.map(
    //                 (value,index) => (
    //                     <div>
    //                         {value.WebsiteName}
    //                     </div>
    //                 )
    //             )
    //         }
    //     </div>
    // );
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