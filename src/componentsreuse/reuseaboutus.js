import React from 'react'
import { Link } from 'react-router-dom'

const Reuseaboutus = () => {
  return (
    <div>
        {/* About Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">The Best IT Solution With 15 Years of Experience</h1>
                    </div>
                    <p className="mb-4"><span style={{fontWeight:"bolder"}}>Msoft Web Technologies</span> is an Organization,We are into developing,designing Websites,Digital Marketing and Developing Mobile Apps. we are very passionate about this industry and always ready to implement new technology trends.We provide Excellent services to our clients and their business requirements according to Global Standards.</p>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <a href='tel:+91 9618624866'><div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                        <i className="fa fa-phone-alt text-white"></i>
                        </div></a>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+91 9618 624 866</h4>
                        </div>
                    </div>
                    <Link to="/quote" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</Link>
                </div>
                <div className="col-lg-5" style={{minHeight: "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="asserts/img/about.jpg" style={{objectFit: "cover"}}  alt='img not support...'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}
    </div>
  )
}

export default Reuseaboutus