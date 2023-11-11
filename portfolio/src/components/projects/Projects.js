import React from 'react'

import { movie, portfolio } from "../../assets/index";
import ProjectsCard from './ProjectCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-start items-center text-center py-20">
      <h2 className=' pl-10 uppercase font-titleFont text-3xl font-bold'>My projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MOVIE MIX"
          des=" Web Application Using React JS as Front-End and The Movie DB as Third Party Api , this Web App Shows All Movie And Details About it"
          src={movie}
        />
        <ProjectsCard
          title="Portfolio For Me"
          des="An introductory site that contains the experiences and skills that I know and a general overview of me as a web application developer"
          src={portfolio}
        />
       
      </div>
    </section>
  );
}

export default Projects