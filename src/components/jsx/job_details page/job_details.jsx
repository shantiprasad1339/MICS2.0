import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import gif1 from '../../images/gif/animation.gif'
import b_det from '../../images/vactor/b_details.png'
import { Footer } from '../footer/footer'
import Jobs_slider from './jobs_slider'

function Job_details() {
    const viewlinks = [
        {
            links: "Web Development (13)"
        },
        {
            links: "Seo (94)"
        },
        {
            links: "Social Media Marketing(21)"
        },
        {
            links: "Digital Marketing (108)"
        },
        {
            links: "Tips and Strategies (58)"
        },
        {
            links: "Develop Content Writing(5)"
        },
        {
            links: "YouTube (130)"
        },
        {
            links: "Facebook(50)"
        },
        {
            links: "Instagram (80)"
        },
        {
            links: "Twitter (61)"
        },
        {
            links: "LinkedIn (90)"
        },
        {
            links: "Fact & News (130)"
        },
        {
            links: "Web Design (25)"
        }, 
        {
            links: "PPC (220)"
        },
        {
            links: "Content Marketing (20)"
        },
        {
            links: "Website Development (60)"
        },
        {
            links: "Graphic Design (60)"
        },
        {
            links: "IT Solutionst (30)"
        },

    ]
    return (
        <>
            <Navbar />
            <section className="job_details_area">
                <div className="container">
                    <div className="row">
                        <div class="col-xl-12">
                            <span class="linkspan" >
                                <Link to="/">Home</Link>
                                <Link to="/job">/Jobs</Link>
                                <Link to="/job-details">/ Job Details</Link>
                            </span></div>

                        <div className="col-xxl-9 col-xl-12 mt-3">
                            <div className="job_details_box_1">
                                <div className="main_headding">
                                    <h5><i class="fa-solid fa-circle-info"></i> <span></span> Business Development Executive</h5>
                                </div>
                                <div className="hide">
                                    <div className="jd_box">
                                        <div className="jd_box_inner">
                                            <div className="content">
                                                <h5>Business Development Executive</h5>
                                                <span>AHITechno</span>
                                                <h4> <i class="fa-solid fa-star"></i> <span>4.5  (1000 reviews)</span></h4>
                                                <div className="box">
                                                    <i class="fa-solid fa-house"></i>
                                                    <span>work From Home</span>
                                                </div>
                                                <div className="box">
                                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                                    <span>2 months ago</span>
                                                </div>
                                                <div className="box-2">
                                                    <span>Share Now</span>
                                                    <img src={gif1} alt="" />
                                                </div>
                                            </div>
                                            <img src={b_det} className='girl_img' />
                                        </div>
                                        <div className="jd_box_inner_1 ">
                                            <ul>
                                                <li>
                                                    <span>1.</span>
                                                    <div className="content">
                                                        <h4>Experience</h4>
                                                        <p>0 Year - 1 Year</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>2.</span>
                                                    <div className="content">
                                                        <h4> Location</h4>
                                                        <p>Jaipur</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>3.</span>
                                                    <div className="content">
                                                        <h4>Salary</h4>
                                                        <p>15000 to 20000</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="jd_box_1">
                                        <button>Apply Now</button>
                                        <div className="jd_show">
                                            <span><i class="fa-solid fa-angle-left"></i>
                                                <i class="fa-solid fa-angle-left"></i>
                                                <i class="fa-solid fa-angle-left"></i>
                                                <i class="fa-solid fa-angle-left"></i></span>
                                            <span>Click To Apply Now This Post</span>
                                        </div>
                                    </div>
                                    <div className="job_details_headding">
                                        <div className="headding_scroll">
                                            <h4>Business Development Executive</h4>
                                            <h4>Business Development Executive</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="jb_details">
                                    <h4><span>Job</span> Description</h4>
                                    <p>Analysing market trends Tracking business performance Allocating and managing the company’s resources Creating actionable business strategies Identifying profitable business opportunities Nurturing relationships with clients</p>

                                    <div className="box pt-2">
                                        <h6>
                                            Required <span>skill:</span>
                                        </h6>

                                        <ul>
                                            <li>
                                                Fluent English
                                            </li>
                                            <li>
                                                Better Communication Skills
                                            </li>
                                            <li>Team Work</li>
                                            <li>Situation Handlings Skills</li>
                                        </ul>
                                    </div>
                                    <div className="box pt-2">
                                        <h6>
                                            <span>Respons</span>ibility :
                                               
                                        </h6>

                                        <ul>
                                            <li>
                                                Analysing market trends
                                            </li>
                                            <li>
                                                Allocating and managing the company’s resources
                                            </li>
                                            <li>Identifying profitable business opportunities</li>
                                            <li>Tracking business performance</li>
                                            <li>Creating actionable business strategies</li>
                                            <li>Nurturing relationships with clients</li>
                                        </ul>
                                    </div>


                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="box pt-2">
                                                <h6>
                                                    <span>Role </span> :
                                                </h6>

                                                <ul>
                                                    <li>Flutter Developer
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="box pt-2">
                                                <h6>
                                                    <span>Industry Type </span> :
                                                </h6>

                                                <ul>
                                                    <li>IT Services & Consulting
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="box pt-2">
                                                <h6>
                                                    <span>Employment Type </span> :
                                                </h6>

                                                <ul>
                                                    <li>Business Development Executive
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="box pt-2">
                                                <h6>
                                                    <span>Role Category </span> :
                                                </h6>

                                                <ul>
                                                    <li>Flutter Developer
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="box pt-2">
                                                <h6>
                                                    <span>Educatione </span> :
                                                </h6>

                                                <ul>
                                                    <li>UG
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="box pt-2">
                                                <h6>
                                                    <span>Key skill </span> :
                                                </h6>

                                                <ul>
                                                    <li>Salesmanship
                                                    </li>
                                                    <li>
                                                        Negotiation
                                                    </li>
                                                    <li>
                                                        Closing Deals
                                                    </li>
                                                    <li>Networking</li>
                                                    <li>Customer Relationship Management (CRM)</li>
                                                    <li>
                                                        Interpersonal Skills
                                                    </li>
                                                    <li>Industry Knowledge</li>
                                                    <li>Competitive Analysis</li>
                                                    <li>Market Research</li>
                                                    <li>Strategic Planning</li>
                                                    <li>Profit and Loss Management</li>
                                                    <li>Cost-Benefit Analysis </li>

                                                </ul>
                                            </div>
                                            <div className="box pt-2">
                                                <h6>
                                                    <span>Number of openings </span> :
                                                </h6>

                                                <ul>
                                                    <li>5
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="box pt-2">
                                                <h6>
                                                    <span>Job activity</span> :
                                                </h6>

                                                <ul>
                                                    <li>2 months ago
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                </div>



                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-12 mt-3">
                            <div className="recent_view">
                                <h4>Recent View Job</h4>
                                <ul>
                                    {viewlinks.map((viewlinksdata, dd1) => (
                                        <>
                                            <li><Link to=""><span><i class="fa-solid fa-angles-right"></i></span> {viewlinksdata.links}</Link></li>
                                        </>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="job_slider">
                <div className="container">
                      <div className="row">
                        <div className="col-xl-12 text-center">
                        <div class="inter_area_inner"><h3>Similar Jobs</h3><p>Kickstart your career with valuable internship opportunities at MICS</p></div>
                        </div>
                        <div className="col-xl-12 pt-4">
                              <Jobs_slider />
                        </div>
                      </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export { Job_details }




