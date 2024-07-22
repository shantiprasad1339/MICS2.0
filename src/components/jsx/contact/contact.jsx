import React from 'react'
import Navbar from '../navbar/Navbar'
import { Footer } from '../footer/footer'
import img1 from '../../images/layers/backround-1.png'

function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact-area">
        <div className="container">
          <div className="contact_area_inner">
            <div className="row z-11">
              <div className="col-xl-12">
                <div className="contact_area_inner_1 text-center">
                  <h3>Contact Us</h3>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="contact_area_inner_2">
                  <h5>Get In Touch</h5>
                  <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                  <div className="detail_box mt-4">
                    <h4>Address</h4>
                    <span>Gurukripa Enclave, Near IndusInd Bank, Besides Raas Mahal Hotel ,Old Ramgadhmod Bus stand, Jaipur (302002).</span>
                  </div>
                  <div className="detail_box">
                    <h4>Phone</h4>
                    <span>+91-96640 83783</span> <br />
                    <span>+91-80057 79031</span>
                  </div>

                  <div className="detail_box">
                    <h4>Email</h4>
                    <span>consultancy@mountinfosys.com</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 pt-sm-5">
                <div className="contact_area_inner_3  ">
                  <div className="row">
                    <div className="col-xl-6 mb-sm-4 mb-2">
                      <div className="form_box">
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" placeholder='Enter your name' />
                      </div>
                    </div>
                    <div className="col-xl-6 mb-sm-4 mb-2">
                      <div className="form_box">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" placeholder='Enter your email' />
                      </div>
                    </div>
                    <div className="col-xl-12 mb-sm-4 mb-2">
                      <div className="form_box">
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" placeholder='Enter your message'></textarea>
                      </div>
                    </div>
                    <div class="col-xl-12  pt-2"><button class="nav-link login-btn"><span>Send</span><i class="fa-solid fa-paper-plane"></i></button></div>
                  </div>
                </div>
              </div>
            </div>
            <img src={img1} alt="" className='roundimm' />
            <div className="shapes">
              
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact