import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';
import { SiMongodb, SiJavascript, SiPostman, SiTailwindcss, SiBootstrap, SiFigma, SiVercel, SiSpringboot, SiNpm } from 'react-icons/si';
import { DiCss3, DiHtml5 } from 'react-icons/di';

const About = () => {
  // Skill icons mapped with their names
  const mySkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node", icon: <FaNodeJs /> },
    { name: "Express", icon: <FaNodeJs /> }, // Using Node.js icon for Express
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML", icon: <DiHtml5 /> },
    { name: "CSS", icon: <DiCss3 /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "NPM", icon: <SiNpm /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Java", icon: <FaJava /> },
    { name: "SpringBoot", icon: <SiSpringboot /> },
  ];

  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hello! I'm <b>Utkarsh Rajendra Harshe</b>, a dedicated <b>MERN stack developer</b> with a knack for building efficient and scalable web solutions. I hail from Sakoli, Maharashtra, and hold a <b>Bachelor's degree in Computer Science and Engineering</b> from KDK College of Engineering, Nagpur.<br /><br />
            Currently, I'm part of <b>SmartLeaven Technology Pvt. Ltd.</b>, where I specialize in React and Node.js, contributing to faster load times and seamless user experiences. My passion lies in solving complex challenges, optimizing performance, and delivering clean, reusable code that drives impactful results.<br /><br />
            Beyond coding, I'm a <b>swimmer, cricket enthusiast, and book lover</b>, always on the lookout for inspiration and growth. I believe in continuous learning and am always eager to collaborate on exciting projects that make a difference. Feel free to reach out—let's innovate together!
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        {mySkills.map((skill, index) => (
          <div key={index} className="skill-icon">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
