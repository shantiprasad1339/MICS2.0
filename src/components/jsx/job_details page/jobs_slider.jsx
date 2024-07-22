import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
function Jobs_slider() {
    const jobsliderdata =[
        {
       h4:{
          text1:"HC & Insurance Operations Senior Rep.",
          text2:"/ 1 days ago"
        },
        span:"Mount Infosolutions & Consultancies Pvt.Ltd",
        p:"0-5 years",
        lnk:"View Details"  },
        {
            h4:{
               text1:"HC & Insurance Operations Senior Rep.",
               text2:"/ 1 days ago"
             },
             span:"Mount Infosolutions & Consultancies Pvt.Ltd",
             p:"0-5 years",
             lnk:"View Details"  },
             {
                h4:{
                   text1:"HC & Insurance Operations Senior Rep.",
                   text2:"/ 1 days ago"
                 },
                 span:"Mount Infosolutions & Consultancies Pvt.Ltd",
                 p:"0-5 years",
                 lnk:"View Details"  },
                 {
                    h4:{
                       text1:"HC & Insurance Operations Senior Rep.",
                       text2:"/ 1 days ago"
                     },
                     span:"Mount Infosolutions & Consultancies Pvt.Ltd",
                     p:"0-5 years",
                     lnk:"View Details"  },
                     {
                        h4:{
                           text1:"HC & Insurance Operations Senior Rep.",
                           text2:"/ 1 days ago"
                         },
                         span:"Mount Infosolutions & Consultancies Pvt.Ltd",
                         p:"0-5 years",
                         lnk:"View Details"  },
    ]
  return (
<>
<Swiper slidesPerView={3} spaceBetween={10} loop={true} pagination={{ clickable: true, }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      breakpoints={{
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        450: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        680: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        850: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1150: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1350: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        } 
                      }}
                      className="mySwiper"
                    >
                      {jobsliderdata.map((jobsliderdata_1, k1) => (

                        <SwiperSlide >
                            <div className="sld_j_box"> 
                                        <div className="sld_j_bo_1">
                                            <div className="box">
                                                <h4>{jobsliderdata_1.h4.text1}<span>{jobsliderdata_1.h4.text2}</span></h4>
                                                <span>{jobsliderdata_1.span}</span>
                                            </div>
                                            <div className="box_1">
                                                  <h3>Jaipur</h3>
                                            </div>
                                        </div>
                                        <div className="sld_j_bo_2">
                                            <p>{jobsliderdata_1.p}</p>
                                            <Link>{jobsliderdata_1.lnk}</Link>
                                        </div>
                            </div>  
                        </SwiperSlide>


                      ))}

                    </Swiper>
</>
  )
}

export default Jobs_slider