import React from 'react';
import '../styles/Links.css';
import imgA from '../images/resumeicon.jpg';
import imgB from '../images/github.png';
import imgC from '../images/linkedin.webp';



const Links = () => {
  const links = [
    { name: 'My Resume', url: 'https://drive.google.com/file/d/1rqipaJw3EI7NB_ZVJ-em_4taG_vB7gYb/view?usp=sharing', icon: imgA },
    { name: 'GitHub', url: 'https://github.com/nasrinakhatun23', icon: imgB },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nasrina-khatun-b15b7b301/', icon: imgC },
   
  ];

  return (
    <div className="links">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link-button">
          <img src={link.icon} alt={link.name} className="link-icon" />
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};


export default Links;
