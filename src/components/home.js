import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../componentsreuse/navigation'
import Spinningtopbar from '../componentsreuse/spinning&topbar'
import Footer from '../componentsreuse/footer'
// import Search from '../componentsreuse/search'
import Reuseaboutus from "../componentsreuse/reuseaboutus"
import Ourservices from '../componentsreuse/ourservices'
import Terminal from '../componentsreuse/terminal'
// import Team from '../componentsreuse/team'
// import Verdor from '../componentsreuse/verdor'
// import Price from '../componentsreuse/price'
import Quote from '../componentsreuse/quote'
import Featurs from '../componentsreuse/featurs'

const Home = () => {
  return (
    <div>
       
    <Spinningtopbar/>

    {/* Navbar & Carousel Start */}
    <div className="container-fluid position-relative p-0"> 
        <Navigation/>

        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="asserts/img/carousel-1.jpg" alt='image not support...' />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn" style={{fontSize:"3rem"}}>Creative & Innovative Web Solution</h1>
                            <Link to="/quote" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" >Free Quote</Link>
                            <Link to="/contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="asserts/img/carousel-2.jpg" alt='image not support...' /> 
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn" style={{fontSize:"3rem"}}>Creative & Innovative Mobile Solution</h1>
                            <Link to="/quote" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</Link>
                            <Link to="/contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* Navbar & Carousel End */}


    {/* Full Screen Search Start */}
         {/* <Search/> */}
    {/* Full Screen Search End */}


    {/* Facts Start */}
    <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                    <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: "150px"}}>
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-users text-primary"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white mb-0">Happy Clients</h5>
                            <h1 className="text-white mb-0" data-toggle="counter-up">30</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                    <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{height: "150px"}}>
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-check text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-primary mb-0">Projects Done</h5>
                            <h1 className="mb-0" data-toggle="counter-up">50</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: "150px"}}>
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-award text-primary"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white mb-0">Win Awards</h5>
                            <h1 className="text-white mb-0" data-toggle="counter-up">30</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Facts Start */}

 {/* About Start */}
        <Reuseaboutus/>
  {/* About End */}
    


    {/* Features Start */}
    <Featurs/>
    {/* Features Start */}


    {/* Service Start */}
         <Ourservices/>
    {/* Service End */}


    {/* Pricing Plan Start */}
        {/* <Price/> */}
    {/* Pricing Plan End */}


    {/* Quote Start */}
        <Quote />
    {/* Quote End */}


    {/* Testimonial Start */}
         <Terminal/>
    {/* Testimonial End */}


    {/* Team Start */}
        {/* <Team/> */}
    {/* Team End */}


    {/* Blog Start */}
    {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
                <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid" src="asserts/img/blog-1.jpg" alt="" />
                            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                        </div>
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 className="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid" src="asserts/img/blog-2.jpg" alt="" />
                            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                        </div>
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 className="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid" src="asserts/img/blog-3.jpg" alt="" />
                            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                        </div>
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 className="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* Blog Start */}


    {/* Vendor Start */}
    {/* <Verdor/> */}
    {/* Vendor End */}
    

   <Footer/>


    
    </div>
  )
}

export default Home