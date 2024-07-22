import React from 'react'
import Navbar from '../navbar/Navbar'
import logo from '../../images/logo/logo.png'
import { Link } from 'react-router-dom'
import girlimg from '../../images/vactor/login_vactor.png';
import icon_1 from '../../images/icons/icon-1.png.png'
import { Footer } from '../footer/footer';
function Login() {
    return (
        <>
        <Navbar />
            <section className="login_area">
                <div className="container">
                    <div className="login_area_inner">
                        <div className="row z-11">
                            <div className="col-xxl-5 col-xl-5">
                                <div className="login_area_inner_1">
                                    <img src={logo} alt="" />
                                    <h5>Welcome To <Link to="/" >MICS</Link> </h5>
                                    <span>Have we met before?</span>
                                    <div className="form_box mb-4">
                                        <label htmlFor="">Email</label>
                                        <input type="email" placeholder='Enter your email' />
                                    </div>
                                    <div className="form_box mb-4">
                                        <label htmlFor="">Password</label>
                                        <input type="password" placeholder='Enter your password' />
                                    </div>
                                    <div className="form_box mb-4">
                                        <a href="">Forgot Password?</a>
                                    </div>
                                    <div className="form_box mb-4 ">
                                        <button>Sign In</button>
                                    </div>
                                    <div className="form_box mb-3 text-center ">
                                        <p>Do not have an accout ? <Link to="/signup"> Sign Up</Link> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 ms-auto position-relative">
                                <div className="login_area_inner_3">
                                    <img src={girlimg} alt="" className='girlimg' />
                                    <div className="rounds_box">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>

                                </div>
                                <div className="login_area_vactor">
                                    <div className="box_1">
                                        <img src={icon_1} alt="" />
                                        <div class="content"><h4>  <span>98</span>+</h4><p>Job For Countries</p></div>
                                    </div>
                                    <div class="box_1 company"> <img src={icon_1} alt="" /><div class="content"><h4>  <span>12</span>+</h4><p>Companies Jobs</p></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Login 