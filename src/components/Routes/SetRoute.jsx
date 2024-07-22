
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Home from "../jsx/home/Home";
  import '../css/style.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js' ;
import { Job } from "../jsx/job page/job.jsx"; 
import React, { useState, useEffect } from 'react';  
import Loading from "../loading/loading.jsx";
import { Navbar } from "react-bootstrap";
import { Position } from "../jsx/position/position.jsx";
import Contact from "../jsx/contact/contact.jsx";
import Login from "../jsx/login/login.jsx";
import Register from "../jsx/register/register.jsx";
import { Job_details } from "../jsx/job_details page/job_details.jsx";
 


function SetRoute() {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {

      setTimeout(() => {
          setIsLoading(false);
      }, 0);
  }, []);
  return (
    <>
     {isLoading ? (
      <>
      <div className="loaddd">
         <Loading />  
      
       <div class="ripple-1"></div>
       <div class="ripple-2"></div>
       <div class="ripple-3"></div>
      </div>
     
      </>
                
                
            ) : (
              
      <Router> 
        <Routes>
        <Route path="/" element={  <Home />}></Route>
        <Route path="/job" element={  <Job />}></Route>  
        <Route path="/position" element={  <Position />}></Route>  
        <Route path="/contact" element={  <Contact />}></Route>  
        <Route path="/signin" element={  <Login />}></Route>  
        <Route path="/signup" element={  <Register />}></Route>  
        <Route path="/job-details" element={  <Job_details />}></Route>   
        </Routes>
      </Router>
         )}
    </>

  );
};

export default SetRoute;




