import React from 'react';
// import Lottie from "lottie-react";
// import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { MdLocalCafe } from "react-icons/md";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Utkarsh Harshe</b></h1>
          <Typed />
        </div>

        <img
          className="illustration"
          src={'https://my-porfolio-liart-delta.vercel.app/static/media/PassportRem.a7f1f561c349a21ab404.png'}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            As a dedicated Software Developer with expertise in the <b>MERN stack</b> and <b>Java</b>,
            I specialize in crafting efficient and scalable web applications. My professional experience includes optimizing application
            load times, enhancing team collaboration, and delivering solutions that reduce bugs and improve performance.<br /><br />
            I am proficient in <b>React</b>, <b>Node.js</b>, <b>Java</b>, and database management with <b>MongoDB</b>, and have hands-on experience
            building real-time applications and backend infrastructures. I also enjoy staying updated with modern frameworks like <b>Hibernate </b>
            and <b>Spring Boot</b>, which I plan to explore further.<br /><br />
            Outside of work, I’m passionate about <b>learning new technologies</b>, swimming, and reading—accompanied, of course, by a good cup of
            <b> chaii</b> <MdLocalCafe style={{ scale: "1.5", rotate: "15deg" }} />.
          </p>
        </div>

        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home