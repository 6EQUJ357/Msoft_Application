import React from 'react'
import { Link } from 'react-router-dom'

const Ourservices = () => {
  return (
    <div>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-code text-white"></i>
                            
                        </div>
                        <h4 className="mb-3">Web Application</h4>
                        <p className="m-0" style={{textAlign:"justify"}}><span style={{fontWeight:"bolder"}}>Msoft web technologies</span> always ready to do web design ,development of a website, and eCommerce website.Our professional team is ready to turn your ideas into reality.</p>
                        <Link className="btn btn-lg btn-primary rounded" to="/webapplication">
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        <i className="fab fa-android text-white"></i>
                            
                        </div>
                        <h4 className="mb-3">Mobile Application</h4>
                        <p className="m-0" style={{textAlign:"justify"}}><span style={{fontWeight:"bolder"}}>Msoft web technologies</span> offers propelled benefits in the field of portable application improvement crosswise over different stage. We can develop best mobile application for your bussiness as your requirements.</p>
                        <Link className="btn btn-lg btn-primary rounded" to="/mobileapplication">
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        <i className="fa fa-chart-pie text-white"></i>
                        
                        </div>
                        <h4 className="mb-3">Digital Marketing</h4>
                        <p className="m-0" style={{textAlign:"justify"}}>Any business requires advertisement for its development. advertisement includes conveying the presence of your business to the greatest number of individuals and furthermore to persuade them to purchase your products and get services.</p>
                        <Link className="btn btn-lg btn-primary rounded" to ="/digitalmarketing">
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        <i class="fa fa-sharp fa-light fa-database text-white"></i>
                        
                        </div>
                        <h4 className="mb-3">Web Hosting</h4>
                        <p className="m-0" style={{textAlign:"justify"}}>Web hosting is essentially a place for your website to live. A hosting service stores your website and all its important files and data on a server it provides, which enables the connection needed so visitors can access your website via the internet.</p>
                        <Link className="btn btn-lg btn-primary rounded" to ="/webhosting">
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div> */}
                {/* <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        <i className="fa fa-shield-alt text-white"></i>
                        </div>
                        <h4 className="mb-3">Bulk SMS</h4>
                        <p className="m-0" style={{textAlign:"justify"}}>Bulk SMS enables its users to send mass text messages nationally and internationally. This is the reason why this type of SMS delivery is one of the best solutions for businesses aiming to reach a specific audience, locally or globally. </p>
                        <Link className="btn btn-lg btn-primary rounded" to="/bulksms">
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div> */}
                {/* <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-search text-white"></i>
                        </div>
                        <h4 className="mb-3">Content Writing</h4>
                        <p className="m-0" style={{textAlign:"justify"}}>Content writing allows you to be active in your field and present your business ideas in various forms and on multiple platforms. Posting regular content lets people know what your business is about.</p>
                        <Link className="btn btn-lg btn-primary rounded" to="/contentwriting">
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div> */}
                <a href='tel:+91 9618624866'>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                        <h3 className="text-white mb-3">Call Us For Quote</h3>
                        {/* <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p> */}
                        <h2 className="text-white mb-0" style={{fontSize:"1.5rem"}}>+91 9618 624 866</h2>
                    </div>
                </div>
                </a>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Ourservices