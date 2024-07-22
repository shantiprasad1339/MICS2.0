import React, { useLayoutEffect, useRef } from 'react';
 
import Navbar from '../navbar/Navbar'
import { Hero_area, Internships_area } from '../hero-area/hero_area'
import { Jobs, Roles_area } from '../jobs/jobs';
import { Blogs, Companies } from '../companies/companies';
import { Footer } from '../footer/footer'; 


function Home() {
  
  return (
 

      <>
      
          <Navbar /> 
          <Hero_area />
          <Internships_area />
          <Jobs />
          <Roles_area />
          <Companies />
          <Blogs />
          <Footer />
           
      </>


  
  )
}
export default Home