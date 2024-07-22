import React from 'react'
import project_im_1 from '../../images/icons/project_m.png'
import { Link } from 'react-router-dom';
import round_1 from '../../images/icons/round_1.svg'

function Jobs() {
  const jobdata = [
    {
      hedding_1: "Hunt Jobs by Industry",
      p: "Navigate through job listings categorized by your chosen industry",

    },

  ]

  return (
    <>
      <section className="hujob_area">
        <div className="container">
          {jobdata.map((jobdata_1, jobkey) => (
            <>
              <div className="row">

                <div className="col-xl-12 text-center">
                  <div className="inter_area_inner">
                    <h3>{jobdata_1.hedding_1}</h3>
                    <p>{jobdata_1.p}</p>
                  </div>
                </div>
                <div className="col-xl-12 mt-3">
                  <div className="job_type_sld">
                    <div className="job_type_sld_inner">
                      <Jobbox />

                    </div>
                  </div>
                </div>
                <div className="col-xl-12 mt-sm-5 mt-4">
                  <div className="job_type_sld ">
                    <div className="job_type_sld_inner left_r">
                      <Jobbox />

                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}

        </div>
      </section>
    </>
  )
}

export { Jobs };


function Jobbox() {
  const jobboxdata = [
    {
      img: project_im_1,
      span: "Project M"
    },
    {
      img: project_im_1,
      span: "Project M"
    },
    {
      img: project_im_1,
      span: "Project M"
    },
    {
      img: project_im_1,
      span: "Project M"
    },
    {
      img: project_im_1,
      span: "Project M"
    },
    {
      img: project_im_1,
      span: "Project M"
    },
    {
      img: project_im_1,
      span: "Project M"
    },
    {
      img: project_im_1,
      span: "Project M"
    }, {
      img: project_im_1,
      span: "Project M"
    }, {
      img: project_im_1,
      span: "Project M"
    }, {
      img: project_im_1,
      span: "Project M"
    }, {
      img: project_im_1,
      span: "Project M"
    },

  ]
  return (
    <>
      {jobboxdata.map((job_box_data, kobboxk) => (
        <>
          <div className="box">
            <img src={job_box_data.img} alt="" />
            <span>{job_box_data.span}</span>
          </div>

        </>
      ))
      }
    </>
  )

}
export { Jobbox };


function Roles_area() {
  const rolesdata = [
    {
      hedding_1: "Discover Jobs Across Popular Roles",
      p: "Kickstart your career with valuable internship opportunities at MICS",

    },

  ]
  return (
    <>
      <section className="roles_area">
        <div className="container">
          {rolesdata.map((rolesdata_1, rolkey) => (
            <>
              <div className="row">
                <div className="col-xl-12 text-center">
                  <div className="inter_area_inner">
                    <h3>{rolesdata_1.hedding_1}</h3>
                    <p>{rolesdata_1.p}</p>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-8 mx-auto">
                  <div className="job_box pt-0">
                    <Job_post />
                  </div>
                </div>
                <div className="col-xl-12 text-center pt-4">
                <Link className="nav-link login-btn" to="#"> <span>View More</span> </Link>
                </div>
              </div>
            </>
          ))

          }

        </div>
         <div className="shapes">
                       <img src={round_1} alt="" className='round_1'/>
                       <img src={round_1} alt="" className='round_2'/>
                       <span className='bol_1'></span>
                       <span className='bol_2'></span>
                       <span className='bol_3'></span>
                       <span className='bol_4'></span>
         </div>
      </section>
    </>
  )
}
export { Roles_area };


function Job_post() {
  const jobpostdata = [
    {
      headding_1: {
        text_1: "Business Development Executivespan",
        text_2: "/ 1 days ago"
      },
      p: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      box_1: {
        span: "New",
        text_1: "20000 to 15000 inr",
        text_2: "/ Month"
      },
      p2: "AHITechno",
      a: " View Details"

    },
    {
      headding_1: {
        text_1: "Business Development Executivespan",
        text_2: "/ 1 days ago"
      },
      p: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      box_1: {
        span: "New",
        text_1: "20000 to 15000 inr",
        text_2: "/ Month"
      },
      p2: "AHITechno",
      a: " View Details"

    },
    {
      headding_1: {
        text_1: "Business Development Executivespan",
        text_2: "/ 1 days ago"
      },
      p: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
      box_1: {
        span: "New",
        text_1: "20000 to 15000 inr",
        text_2: "/ Month"
      },
      p2: "AHITechno",
      a: " View Details"

    },
  ]
  return (
    <>
      {jobpostdata.map((jobpostdata_1, d1) => (
        <>
          <div className="job_post_box mt-sm-4 mt-3">
            <div className="job_post_box_inner">
              <div className="box_1">
                <h4> {jobpostdata_1.headding_1.text_1}<span> {jobpostdata_1.headding_1.text_2}</span> </h4>
                <p> {jobpostdata_1.p}</p>
              </div>
              <div className="box_2">
                <span className='new'>{jobpostdata_1.box_1.span}</span>
                <p> {jobpostdata_1.box_1.text_1}<span>{jobpostdata_1.box_1.text_2}</span> </p>
              </div>
            </div>
            <div className="job_post_box_inner_1">
              <p>{jobpostdata_1.p2}</p>
              <Link to="/job-details">
                {jobpostdata_1.a}
              </Link>
            </div>

          </div>
        </>
      ))

      }

    </>
  )
}
export { Job_post };
