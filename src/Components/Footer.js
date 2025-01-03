import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Utkarsh Harshe</h4>
      <h4>Copyright &copy; 2024 URH</h4>
      <div className='footerLinks'>
        <a href="https://github.com/UtkarshRH" target='_top'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/utkarsh-r-harshe/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:utkarshharshe06@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/UtkarshRH/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer