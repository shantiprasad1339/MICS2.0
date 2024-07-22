import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import { Footer } from '../footer/footer';
import img1 from '../../images/layers/backround-1.png'

function Position() {
    const positiondata = [
        {

        }
    ]
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }

    return (
        <>
            <Navbar /> 
            <section className="position_area">
                <div className="container">
                    <div className="position_area_inner">
                        <div className="row">
                            {positiondata.map((positiondata_1, pkey) => (
                                <>
                                    <div className="col-xl-12 mb-4">
                                        <div className="position_area_inner_1">
                                            <h3>Apply For Position</h3>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">First Name</label>
                                            <div className="form_box_inner">
                                                <input type="text" placeholder='Enter your first name' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">Last Name</label>
                                            <div className="form_box_inner">
                                                <input type="text" placeholder='Enter your last name' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">Phone number</label>
                                            <div className="form_box_inner d-flex">
                                                <select name="" id="" className='selectnumb'>
                                                    <option  selected>+91</option>
                                                    <option >+91</option>
                                                    <option >+91</option>
                                                </select>
                                                <input type="text" placeholder='Enter your phone number' name="" id="" className='inputnumb' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">Email ID</label>
                                            <div className="form_box_inner">
                                                <input type="text" placeholder='Enter your email ID' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">Address</label>
                                            <div className="form_box_inner">
                                                <input type="text" placeholder='Enter your address' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">Country</label>
                                            <div className="form_box_inner">
                                                <Select options={options} value={value} onChange={changeHandler} className='countryselect' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">State</label>
                                            <div className="form_box_inner">
                                                <input type="text" placeholder='Select State' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">City</label>
                                            <div className="form_box_inner">
                                                <input type="text" placeholder='Select City' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">First Name</label>
                                            <div className="form_box_inner">
                                                <input type="file" placeholder='Enter your first name' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">University / College Certificate</label>
                                            <div className="form_box_inner">
                                                <input type="text" placeholder='Enter your university name' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">Apply For Position</label>
                                            <div className="form_box_inner">
                                                <input type="text" placeholder='Apply For Position' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 mb-4">
                                        <div className="form_box">
                                            <label htmlFor="">CV Upload</label>
                                            <div className="form_box_inner">
                                                <input type="file" placeholder='Enter your first name' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 text-center pt-4">

                                        <button className="nav-link login-btn">
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </>
                            ))

                            }
                        </div>
                        <img src={img1} alt="" className='roundimm' />

                    </div>
                </div>

            </section>
            <Footer />

        </>
    )
}

export { Position }




