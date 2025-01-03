// import React from 'react';
// import ProjectBox from './ProjectBox';
// import NewsletterImage from '../images/NewsletterImage.png';
// import RogfreeImage from '../images/RogfreeImage.png';
// import TindogImage from '../images/TindogImage.png';
// import WigglesImage from '../images/WigglesImage.png';

// const Projects = () => {
//   return (
//     <div>
//       <h1 className='projectHeading'>My <b>Projects</b></h1>
//       <div className='project'>
//         <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
//         <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
//         <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
//         <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
//       </div>

//     </div>
//   )
// }

// export default Projects

import React from 'react';
import { ReactTyped } from 'react-typed';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project comingSoonBox">
        <ReactTyped
          strings={[
            "✨ Soon we will be uploading our interesting projects here...",
            "🚀 We are under development!",
            "💻 Till then, feel free to check out our GitHub profile. The link is provided in the footer below!"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>
    </div>
  );
};

export default Projects;
