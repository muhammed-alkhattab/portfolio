import React, {  useState } from 'react'
import { Link } from "react-router-dom";
import Education from './Education';
import Skills from './Skills.js';
import Achievement from './Achievment';
import Experience from "./Experience"

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
       <div class="flex justify-between items-center text-center py-20 flex-col lg:flex-row">
      <h2 className='  uppercase font-titleFont text-md font-bold md:text-3xl'>+1 Experience in FrontEnd Developer Using React JS</h2>
      <Link to='/Mohammad_Alkhattab_CV_2.pdf' className=' md:mt-2 sm:mt-4  text-white text-lg font-bold uppercase rounded-lg cursor-pointer bg-gray-800 p-2.5 px-2 hover:bg-black hover:text-blue-700 ' download={true}>Download my CV</Link>
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 cursor-pointer items-center">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi ` }
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
     
 
    </section>
  );
}

export default Resume