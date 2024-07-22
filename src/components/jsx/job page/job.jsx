import React  from 'react';
 
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import { Job_post } from '../jobs/jobs';
import { Footer } from '../footer/footer';

 


function Job() {
    
    return (
        <>
            <Navbar /> 
            <section className="job_area">

                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <span className='linkspan'>
                                <Link to="/">Home</Link>
                                <Link to="/job">/Jobs</Link>

                            </span>
                        </div>
                        <div className="col-xl-5">
                            <Filter_box />
                        </div>
                        <div className="col-xl-7 my-auto">
                            <Job_post />
                            <div className="col-xl-12 text-center pt-4">
                <Link className="nav-link login-btn" to="#"> <span>View More</span> </Link>
                </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
          
          </>
    )
}

export { Job }



function Filter_box() {
    return (
        <>
            <div className="job_area_inner">
                <h3 className='mb-3'>Filters  <a  >clear all filters</a></h3>
                <div className="form_box mb-3">
                    <label htmlFor="">Keyword search</label>
                    <div className="form_box_inner">
                        <input type="text" name="" id="" placeholder='e.g. Javascript,php,React' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                </div>
                <div className="form_box mb-3">
                    <label htmlFor="">Location</label>
                    <div className="form_box_inner">
                        <input type="text" name="" id="" placeholder='e.g. Jaipur' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                </div>
                <div className="filter_box1">
                    <div className="filter_box1_inner">
                        <div className="box">
                            <input id="check" name="check" type="checkbox" value="yes" />
                            <label htmlFor="check">Work from home</label>
                        </div>
                        <div className="box">
                            <input id="check1" name="check" type="checkbox" value="yes" />
                            <label htmlFor="check1">Part-time</label>
                        </div>
                    </div>
                    <span className=' filterspan'>Desired minimum monthly stipend (₹)</span>
                    <div className="filter_box1_inner">
                        <div className="box">
                            <input id="check" name="check" type="checkbox" value="yes" />
                            <label htmlFor="check">0-2k</label>
                        </div>
                        <div className="box">
                            <input id="check2" name="check" type="checkbox" value="yes" />
                            <label htmlFor="check2">0-2k</label>
                        </div>
                        <div className="box">
                            <input id="check3" name="check" type="checkbox" value="yes" />
                            <label htmlFor="check3">0-2k</label>
                        </div>
                        <div className="box">
                            <input id="check4" name="check" type="checkbox" value="yes" />
                            <label htmlFor="check4">0-2k</label>
                        </div>
                    </div>
                   
                </div>
                <button>View more filters</button>
            </div>
        </>
    )

}
export { Filter_box } 
