import React from 'react'
import { Link } from 'react-router-dom'
import img from "../img/msoft2.png"
const Footer = () => {
  return (
    <div>
         {/* Footer Start*/}
    <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-4 col-md-3 footer-about" >
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                         <a href="#a" className="navbar-brand">
                            <h1 className="m-0 text-white">                              
                                <img src={img} alt='img not support' style={{width:"250px", height:"150px", marginTop:"-50px"}}></img>
                                </h1>
                        </a> 

                        <p className="mt-3 mb-4" style={{textAlign:'justify'}}>Msoftwebtechnologies always ready to do web design ,development of a website, and eCommerce website.Our professional team is ready to turn your ideas into reality. we are always ready to do whatever your project demands, we can deliver your project on time and give quality service.</p>
                        {/* <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                <button className="btn btn-dark">Sign Up</button>
                            </div>
                        </form> */}
                    </div>
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 pt-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Get In Touch</h3>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-geo-alt text-primary me-2"></i>
                                <p className="mb-0">806, Manjeera Majestic, KPHB, Hyderabad</p>
                            </div>
                           <a href='mailto:info@msoftwebtechnologies.com'>
                           <div className="d-flex mb-2">
                                <i className="bi bi-envelope-open text-primary me-2"></i> 
                                <p className="mb-0">info@msoftwebtechnologies.com</p>
                            </div>
                           </a>
                            <a href='tel:+91 9618624866'>
                            <div className="d-flex mb-2">
                                <i className="bi bi-telephone text-primary me-2"></i>
                                <p className="mb-0">+91 9618 624 866</p>
                            </div>
                            </a>
                            <div className="d-flex mt-4">
                                <a className="btn btn-primary btn-square me-2" href="#a"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-primary btn-square me-2" href="https://www.facebook.com/msoftth"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-primary btn-square me-2" href="#a"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-primary btn-square" href="#a"><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5" >
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Quick Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start" >
                                <Link className="text-light mb-2" to ="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                                <Link className="text-light mb-2" to="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                                {/* <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a> */}
                                {/* <Link className="text-light mb-2" to ="/teammembers"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</Link> */}
                                {/* <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a> */}
                                <Link className="text-light" to="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Popular Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <Link className="text-light mb-2" to ="/webapplication"><i className="bi bi-arrow-right text-primary me-2"></i>Web Application</Link>
                                <Link className="text-light mb-2" to ="/mobileapplication"><i className="bi bi-arrow-right text-primary me-2"></i>Mobile Application</Link>
                                <Link className="text-light mb-2" to ="/digitalmarketing"><i className="bi bi-arrow-right text-primary me-2"></i>Digital Marketing</Link>
                                {/* <Link className="text-light mb-2" to ="/webhosting"><i className="bi bi-arrow-right text-primary me-2"></i>Web Hosting</Link>
                                <Link className="text-light mb-2" to ="/contentwriting"><i className="bi bi-arrow-right text-primary me-2"></i>Content Writing</Link>
                                <Link className="text-light" to ="/bulksms"><i className="bi bi-arrow-right text-primary me-2"></i>Bulk SMS</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-white" style={{background: "#061429"}}>
        <div className="container text-center">
            <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6">
                    <div className="d-flex align-items-center justify-content-center" style={{height: "75px"}}>
                        <p className="mb-0">&copy; <a className="text-white border-bottom" href="#a">Msoftwebtechnologies</a>. All Rights Reserved. </p>
						
					 {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support.  */}
						{/* Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Footer End*/}


    {/* Back to Top*/}
    {/* <a href="#a" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a> */}
    </div>
  )
}

export default Footer