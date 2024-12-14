import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ahit_banner from "../../images/vactor/ahit_banner.png";
import star from "../../images/icons/star.png";
import review from "../../images/icons/review.png";
import blog_1 from "../../images/bloges/blog_1.png";
import blog_2 from "../../images/bloges/blog_2.png";
import blog_3 from "../../images/bloges/blog_3.png";
import { Link } from "react-router-dom";
import axios from "axios";
function Companies() {
  const companydata = [
    {
      hedding_1: "Discover Careers in Elite Companies",
      p: "Unlock prestigious job opportunities in top-tier companies for professional growth",
    },
  ];
  return (
    <>
      <section className="company_area">
        <div className="container">
          {companydata.map((companydata_1, comkey) => (
            <>
              <div className="row">
                <div className="col-xl-12 text-center mb-xl-4">
                  <div className="inter_area_inner">
                    <h3>{companydata_1.hedding_1}</h3>
                    <p>{companydata_1.p}</p>
                  </div>
                </div>
                <Companybox />
                <div className="col-xl-12 text-center pt-4">
                  <Link className="nav-link login-btn" to="#">
                    {" "}
                    <span>View More</span>{" "}
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export { Companies };

function Companybox() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = "https://mountinfosys.com/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl + "post/recently");
        console.log(response.data.data[0].Companies);
        setCompanies(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  return (
    <>
      {companies &&
        companies.map((companyboxdata_1, a) => {
          console.log(baseUrl + companyboxdata_1.Companies);
          return (
            <>
              <div className="col-xl-4 mb-xl-0 mb-4">
                <div className="comdetail_box">
                  <div className="image">
                    <img src={ahit_banner} alt="" />
                  </div>
                  <div className="content">
                    <h5>{companyboxdata_1.Companies.companyName}</h5>
                    <p>{companyboxdata_1.Companies.industry}</p>
                    <div className="rev_box">
                      <div className="rev_box_inner">
                        <h5>
                          {" "}
                         Reviews
                          <span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </h5>
                        <h3>
                          {" "}
                          <img src={review} alt="" /> 3.9 | 23.8K+
                        </h3>
                      </div>
                      <a href="">
                        <i className="fa-solid fa-circle"></i> view
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
export { Companybox };

function Blogs() {
  const blogesdata = [
    {
      hedding_1: "Recent Blogs",
      p: "Access the latest insights on companies, interview tips, and more.",
    },
  ];
  return (
    <>
      <section className="blog_area">
        <div className="container">
          {blogesdata.map((blogesdata_1, b) => (
            <>
              <div className="row">
                <div className="col-xl-12 text-center mb-xl-4">
                  <div className="inter_area_inner">
                    <h3>{blogesdata_1.hedding_1}</h3>
                    <p>{blogesdata_1.p}</p>
                  </div>
                </div>
                <div className="col-xl-12">
                  <Blogsbox />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export { Blogs };

function Blogsbox() {
  const [blogsboxdata, setblogsboxdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = "https://mountinfosys.com/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl + "blog");
        // console.log(response.data.data);
        setblogsboxdata(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination]}
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
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1350: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {blogsboxdata &&
          blogsboxdata.map((blogsboxdata_1, k1) => (
            <SwiperSlide>
              <div className="blog_box">
                <div className="image">
                  <img src={blogsboxdata_1.blogImg} alt="" />
                </div>
                <div className="content">
                  <h5>
                    <span>{blogsboxdata_1.blogger}</span>{" "}
                    <span>{blogsboxdata_1.createdAt}</span>{" "}
                  </h5>
                  <h3>{blogsboxdata_1.titel}</h3>
                  <p>{blogsboxdata_1.description}</p>
                  <div className="content_inner">
                    <a href="">{blogsboxdata_1.a}</a>
                    <i className="fa-regular fa-bookmark"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
export { Blogsbox };
