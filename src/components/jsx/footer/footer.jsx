import React from 'react'
import logo from '../../images/logo/logo.png'
import facebook from '../../images/social/facebook.svg'
import twitter from '../../images/social/twitter.svg'
import instragram from '../../images/social/instragram.png'
import linkedin from '../../images/social/linkedin.png'

function Footer() {
    const footerdata = [
        {
            h5: "Company",
            a1: "About us",
            a2: "Contact us",
            a3: "Post a job",
            a4: " Privacy Policy",
            a5: " Terms & Condition",
        },
        {
            h5: "Job by Cities",
            a1: "Jaipur ",
            a2: "Delhi",
            a3: "Gujrat",
            a4: " Mumbai",
            a5: "Gurugram",
        },
        {
            h5: "Top Hiring Companies",
            a1: "AHECounselling",
            a2: "AHITechno",
            a3: "A2 Groups",
            a4: " BBSMIT",
            a5: " Universities Hub",
        },
        {
            h5: "Support",
            a1: "Privacy",
            a2: "Help",
            a3: "Terms",
            a4: " FAQ",
        },
    ]
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="footer_inner">
                                <img src={logo} alt="" />
                                <p>Jobhub is the heart of the design community and the best
                                    resource to discover and connect with designers and jobs
                                    worldwide.</p>
                            </div>
                        </div>
                        {footerdata.map((footerdata_1, footkey) => (
                            <>
                                <div className="col-xl-2">
                                    <div className="footer_inner_2">
                                        <h5>{footerdata_1.h5}</h5>
                                        <a href="">{footerdata_1.a1}</a>
                                        <a href="">{footerdata_1.a2}</a>
                                        <a href="">{footerdata_1.a3}</a>
                                        <a href="">{footerdata_1.a4}</a>
                                        <a href="">{footerdata_1.a5}</a>

                                    </div>
                                </div>
                            </>
                        ))}

                        <div className="col-xl-12">
                                <div className="footer_bottom">
                                  <p>Copyright ©2021 MICS . All Rights Reserved</p>                        
                                      <ul>
                                        <li><a href=""><img src={facebook} alt="" /></a></li>
                                        <li><a href=""><img src={twitter} alt="" /></a></li>
                                        <li><a href=""><img src={instragram} alt="" /></a></li>
                                        <li><a href=""><img src={linkedin} alt="" /></a></li>
                                      </ul>
                                    </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export { Footer } 