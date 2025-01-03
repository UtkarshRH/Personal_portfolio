import React from 'react';
import Skills from './Skills'; // Adjust the path as needed

const SkillsList = () => {
    const mySkills = [
        "Java",
        "SpringBoot",
        "Hibernate",
        "SQL",
        "HTML",
        "CSS",
        "Bootstrap",
        "TailwindCSS",
        "JavaScript",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Git",
        "GitHub",
        "NPM",
        "Figma",
        "Postman",
        "Vercel",
        "JQuery",
    ];

    return (
        <div className="SkillsContainer">
            {mySkills.map((skill, index) => (
                <Skills key={index} skill={skill} />
            ))}
        </div>
    );
};

export default SkillsList;
