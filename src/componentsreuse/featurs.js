import React from 'react'
import img from "../img/feature.jpg"

const Featurs = () => {
  return (
    <div>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-cubes text-white"></i>
                            </div>
                            <h4>Best In Industry</h4>
                            <p className="mb-0">Msoft follows fine-tuned processes to establish the bridge that connects your ideas with a reliable, scalable, user-friendly solution for your business to nurture. Msoft enables enterprises to be future-ready with cutting-edge products that surpass technological expansions.</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-award text-white"></i>
                            </div>
                            <h4>Goal Definition</h4>
                            <p className="mb-0">We help you build your business using our innovative and responsive approaches. As per the industry standards, we always focus on exploring new ideas and discovering innovative ways of creating fast, functional, and reliable solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: "350px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src={img} style={{objectFit: "cover"}} alt='img not support...'/>    
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-users-cog text-white"></i>
                            </div>
                            <h4>Professional Staff</h4>
                            <p className="mb-0">Team success is defined by how well the players play together. You may have the greatest collection of players in the world, but if they can't play together, the club won't be worth a penny</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <h4>Analyse & Implementation</h4>
                            <p className="mb-0">Listen, plan, design, execute, deliver, improvise. Our solutions result from in-depth planning, be it short-term or long-term goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Featurs