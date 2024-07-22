import React from 'react'
import find_job from '../../images/icons/find_job.svg'
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import girl_show from '../../images/vactor/girl_show.png';
import icon_1 from '../../images/icons/icon-1.png.png'
import view_icon from '../../images/icons/view_icon.png'
import round_1 from '../../images/icons/round_1.svg'
import round_2 from '../../images/icons/round_2.svg'
import city_1 from '../../images/cities/city_1.png'
import city_2 from '../../images/cities/city_2.png'
import city_3 from '../../images/cities/city_3.png'
import city_4 from '../../images/cities/city_4.png'
import city_5 from '../../images/cities/city_5.png'
import city_6 from '../../images/cities/city_6.png'
import job_1 from '../../images/jobs/job_1.png'
import job_2 from '../../images/jobs/job_2.png'
import job_3 from '../../images/jobs/job_3.png'
import job_4 from '../../images/jobs/job_4.png'
import job_5 from '../../images/jobs/job_5.png'
import job_6 from '../../images/jobs/job_6.png'


function Hero_area() {
  const herodata = [
    {
      span: {
        text_1: "We Have ",
        text_2: "208,000+",
        text_3: "Live Jobs",
      },
      hedding_1: {
        hed_1: "Find the",
        hed_2: "job ",
        hed_3: "that fits your life"

      },
      p: "Type your keyword, then click search to find your perfect job.",
      span2: "Your Job Search Companion",

      box1: {
        text_1: "+",
        text_2: "Job For Countries",
        text_3: "Companies Jobs"
      }
    }

  ]
  return (
    <>
      <section className="hero-area">
        <div className="container ">
          <div className="row">
            {herodata.map((herodata_1, hkey1) => (
              <>
                <div className="col-xl-6 my-auto" key={hkey1}>
                  <div className="hero-area-innner">
                    <span>{herodata_1.span.text_1}   <CountUp end={208000} duration={2.75} />   {herodata_1.span.text_3} </span>
                    <h1>{herodata_1.hedding_1.hed_1} <span>{herodata_1.hedding_1.hed_2}</span>{herodata_1.hedding_1.hed_3} </h1>
                    <p>{herodata_1.p}</p>
                    <div className="form-box">
                      <input type="text" placeholder='Search Jobs With Job Title, Location, Company' />
                      <button><span>Search</span><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <span className='find_job_box'>
                      <img src={find_job} alt="" />
                      {herodata_1.span2}
                    </span>
                    <div className="buttons_box">

                      <button className='black_btn'>Hire Now</button>
                      <button className='white_btn'>Apply for a position</button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 text-center my-xl- my-5">
                  <div className="hero_inner_vactor">
                    <img src={girl_show} alt="" className='girl_show_img' />
                    <div className="rounds">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="hero_inner_vactor_inner">
                      <div className="box_1">
                        <img src={icon_1} alt="" />
                        <div className="content">
                          <h4>  <CountUp end={98} />{herodata_1.box1.text_1}</h4>
                          <p>{herodata_1.box1.text_2}</p>
                        </div>
                      </div>
                      <div className="box_1 company">
                        <img src={icon_1} alt="" />
                        <div className="content">
                          <h4>  <CountUp end={12} />{herodata_1.box1.text_1}</h4>
                          <p>{herodata_1.box1.text_3}</p>
                        </div>
                      </div>
                      <div className="box_2">
                        <img src={view_icon} alt="" />
                        <div className="content">
                          <h4>  <CountUp end={3} />K+</h4>
                          <p>Jobs Done</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            ))}
          </div>
        </div>
        <div className="shapes">
          <img src={round_1} alt="" />
          <img src={round_2} alt="" />
        </div>
      </section>
    </>
  )
}
export { Hero_area };

function Slider_box() {

  return (
    <>

    </>
  )
}
export { Slider_box };

function Internships_area() {
  const interdata = [
    {
      heading_1: "Internships for Freshers",
      p: "Kickstart your career with valuable internship opportunities at MICS",
      heading_2: {
        text_1: "Find",
        text_2: " Jobs",
        text_3: " According To Your ",
        text_4: "City",
      }
    }
  ]
  const slidedata = [
    {
      img: city_1,
      span: "International"
    },
    {
      img: city_2,
      span: "hyderabad"
    },
    {
      img: city_3,
      span: "Delhi/NCR"
    },
    {
      img: city_4,
      span: "Kolkata"
    },
    {
      img: city_5,
      span: "Chennai"
    },
    {
      img: city_6,
      span: "Bangalore"
    },
    {
      img: city_1,
      span: "International"
    },
    {
      img: city_2,
      span: "hyderabad"
    },
    {
      img: city_3,
      span: "Delhi/NCR"
    },
    {
      img: city_4,
      span: "Kolkata"
    },
  ]
  const slidedata2 = [
    {
      img: job_1,
      span: "Web Development"
    },
    {
      img: job_2,
      span: "Digital Marketing"
    },
    {
      img: job_3,
      span: "Advanced Excel"
    },
    {
      img: job_4,
      span: "Data Science"
    },
    {
      img: job_5,
      span: "Auto CAD"
    },
    {
      img: job_6,
      span: "Machine Learning"
    },
    {
      img: job_1,
      span: "Web Development"
    },
    {
      img: job_2,
      span: "Digital Marketing"
    },
    {
      img: job_3,
      span: "Advanced Excel"
    },
    {
      img: job_4,
      span: "Data Science"
    },
  ]
  return (
    <>
      <section className="inter_area">
        <div className="container">
          <div className="row">
            {interdata.map((interdata_1, inter) => (
              <>
                <div className="col-xl-12 text-center">
                  <div className="inter_area_inner">
                    <h3>{interdata_1.heading_1}</h3>
                    <p>{interdata_1.p}</p>
                  </div>
                </div>
                <div className="col-xl-12 mt-5">
                  <div className="inter_area_inner_1">
                    <h5>
                      {interdata_1.heading_2.text_1}
                      <span>{interdata_1.heading_2.text_2}</span>
                      {interdata_1.heading_2.text_3}
                      <span> {interdata_1.heading_2.text_4}</span>

                    </h5>
                  </div>
                </div>
                <div className="col-xl-12 mt-4">
                  <div className="inter_slider">
                    <Swiper slidesPerView={7} spaceBetween={30} loop={true} pagination={{ clickable: true, }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      breakpoints={{
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        450: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        680: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        850: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        1150: {
                          slidesPerView: 5,
                          spaceBetween: 20,
                        },
                        1350: {
                          slidesPerView: 6,
                          spaceBetween: 40,
                        },
                        1550: {
                          slidesPerView: 7,
                          spaceBetween: 30,
                        },
                        2000: {
                          slidesPerView: 8,
                          spaceBetween: 50,
                        },
                      }}
                      className="mySwiper"
                    >
                      {slidedata.map((slidedata_1, k1) => (

                        <SwiperSlide >
                          <div className="slider_box_inner">
                            <img src={slidedata_1.img} alt="" />
                            <span>{slidedata_1.span}</span>
                          </div>
                        </SwiperSlide>


                      ))}

                    </Swiper>
                  </div>
                </div>
                <div className="col-xl-12 mt-2 pt-xl-5">
                  <div className="inter_area_inner_1">
                    <h5>
                      Fast Filing
                      <span> Jobs </span>
                      Right Now

                    </h5>
                    <p>Hot job vacancies - apply now and secure your spot!</p>
                  </div>
                </div>
                <div className="col-xl-12 mt-4">
                  <div className="inter_slider">
                    <Swiper slidesPerView={7} spaceBetween={30} loop={true} pagination={{ clickable: true, }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      breakpoints={{
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        450: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        680: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        850: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        1150: {
                          slidesPerView: 5,
                          spaceBetween: 20,
                        },
                        1350: {
                          slidesPerView: 6,
                          spaceBetween: 40,
                        },
                        1550: {
                          slidesPerView: 7,
                          spaceBetween: 30,
                        },
                        2000: {
                          slidesPerView: 8,
                          spaceBetween: 50,
                        },
                      }}
                      className="mySwiper"
                    >
                      {slidedata2.map((slidedata2_1, k1) => (

                        <SwiperSlide >
                          <div className="slider_box_inner">
                            <img src={slidedata2_1.img} alt="" />
                            <span>{slidedata2_1.span}</span>
                          </div>
                        </SwiperSlide>


                      ))}

                    </Swiper>
                  </div>
                </div>
              </>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}
export { Internships_area };

