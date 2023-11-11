
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/features/features';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className='max-w-screen-2xl mx-auto px-16'>
     <Navbar/>
     <Banner/>
     <Features/>
     <Projects/>
     <Resume/>
     <Contact/>
     <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © 2023. Developed by Mohammad Alkhattab. All rights reserved
      </p>
    </div>
     </div>
    </div>
  );
}

export default App;
