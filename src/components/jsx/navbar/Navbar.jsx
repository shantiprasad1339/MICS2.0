import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/logo.png'
import openi from '../../images/vactor/nav.png'
import closei from '../../images/vactor/close.png'
import Topheader from '../top-header/topheader'


function Navbar() {
  // scroll navbar fixed top position

  const [scrolltopdata, setscrolltopdata] = useState('');


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 15) {
        setscrolltopdata('');
      } else {
        setscrolltopdata('fixed');
      }
    });
  }, [])

  const [scrolltopbtn, setscrolltopbtn] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setscrolltopbtn(true)
    }
    else if (scrolled <= 300) {
      setscrolltopbtn(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);
  // click btn to scroll top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  // click btn to sidebar show hide


  const [isToggled, setToggle] = useState('none');
  const handleToggle = () => {
    setToggle(!isToggled);
  };
  return (
    <>
      <Topheader />

      <nav className={`navbar navbar-expand-lg ${scrolltopdata}`}>
        <div className="container">
          <Link className="navbar-brand" to="#"><img src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div class="hamburger">
              <input type="checkbox" class="hamburger-init" />
              <div class="menu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <img src={openi} alt="" className='open' />
                <img src={closei} alt="" className='close' />
                <div class="bar3"><i class="fa-solid fa-xmark"></i></div>
                <div class="bar4"></div>
              </div>

            </div>
          </button>
          <div className='d-flex  align-items-center gap-xl-5 gap-3'>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">Jobs <i className="fa-solid fa-angle-down"></i></Link>
                  <div className="navshow">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="navshow_inner">
                          <h3>Popular categories</h3>
                          <Link to="/job">IT Jobs</Link>
                          <Link to="/job">Sales Jobs</Link>
                          <Link to="/job">HR Jobs</Link>
                          <Link to="/job">Marketing Jobs</Link>
                          <Link to="/job">Engineering</Link>
                        </div>

                      </div>
                      <div className="col-lg-3">
                        <div className="navshow_inner">
                          <h3>Jobs in demand</h3>
                          <Link to="/job">Freshers Jobs</Link>
                          <Link to="/job">MNC Jobs</Link>
                          <Link to="/job">Remote Jobs</Link>
                          <Link to="/job">Work from home Jobs</Link>
                          <Link to="/job">Part time Jobs</Link>
                        </div>

                      </div>
                      <div className="col-lg-3">
                        <div className="navshow_inner">
                          <h3>Jobs by location</h3>
                          <Link to="/job">Jobs in Delhi</Link>
                          <Link to="/job">Jobs in Jaipur</Link>
                          <Link to="/job">Jobs in Chennai</Link>
                          <Link to="/job">Jobs in Mumbai</Link>
                          <Link to="/job">Jobs in Hydrabad</Link>
                        </div>

                      </div>
                      <div className="col-lg-3">
                        <div className="navshow_inner">
                          <h3>Explore more jobs</h3>
                          <Link to="/job">Jobs by category</Link>
                          <Link to="/job">Jobs by skill</Link>
                          <Link to="/job">Jobs by location</Link>
                          <Link to="/job">Jobs by designation</Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Compaines <i className="fa-solid fa-angle-down"></i></Link>
                  <div className="navshow">
                    <div className="row">
                      <div className="col-lg-3 ">
                        <div className="navshow_inner ">
                          <h3>Explore Categories</h3>
                          <Link to="">Unicorn</Link>
                          <Link to="">MNC</Link>
                          <Link to="">Startup</Link>
                          <Link to="">Internet</Link>
                          <Link to="">Product based</Link>
                        </div>

                      </div>
                      <div className="col-lg-3">
                        <div className="navshow_inner">
                          <h3>Explore collections</h3>
                          <Link to="">Top Companies</Link>
                          <Link to="">IT Companies</Link>
                          <Link to="">Fintech Companies</Link>
                          <Link to="">Sponsored Companies</Link>
                          <Link to="">Featured Companies</Link>
                        </div>

                      </div>

                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/position"> Apply For Positions </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">  For Employers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link login-btn" to="/signin"> <span>Login Now</span> </Link>
                </li>
              </ul>

            </div>
            <div className="navbtn-side" onClick={handleToggle}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>

        </div>
      </nav>
      <div className={isToggled ? 'sidebar none' : 'sidebar '} >
        <div className="logo">
          {/* <img src={logo} alt="" /> */}
        </div>

        <ul>
          <li>
            <h5><i className="fa-solid fa-location-arrow"></i>Address</h5>
            <span>Gurukripa Enclave, Near IndusInd Bank,
              Besides Raas Mahal Hotel,
              Old Ramgadhmod Bus stand,
              Jaipur (302002).</span>
          </li>
          <li>
            <h5> <i className="fa-solid fa-phone"></i>Phone</h5>
            <span>+91-96640 83783  <br />
              +91-80057 79031</span>
          </li>
          <li>
            <h5><i className="fa-solid fa-envelope"></i>Email</h5>
            <span>consultancy@mountinfosys.com</span>
          </li>
          <li>
            <h5><i className="fa-solid fa-location-arrow"></i>Location</h5>

            <div className="map mt-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1472.0564716140361!2d75.83853341951556!3d26.94307520450333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db187e0546cf3%3A0x48394b6f6b2e47bf!2sMICS%20-%20Mount%20InfoSolutions%20%26%20Consultancy%20Services!5e0!3m2!1sen!2sin!4v1720526235482!5m2!1sen!2sin" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

          </li>
        </ul>
      </div>
      <span className={`scroll_top_btn ${scrolltopbtn}`} onClick={scrollToTop} >
        <i className="fa-solid fa-rocket"></i>
      </span>
    </>
  )
}

export default Navbar