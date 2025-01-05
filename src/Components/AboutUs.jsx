import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const AboutUs = () => {
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

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />

      </div>
    </>
  )
}

export default AboutUs