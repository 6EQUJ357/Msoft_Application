import React from 'react'
import img1 from "../img/testimonial-1.jpg"
import img2 from "../img/testimonial-2.jpg"
import img3 from "../img/testimonial-3.jpg"
import img4 from "../img/testimonial-4.jpg"

const Terminal = () => {
  return (
    <div> 
         <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" dataWow>
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
            </div>
           
            {/* owl-carousel */}
            <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img1} style={{width: "60px", height: "60px"}} alt='img not  support...'/> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Sunitha Uram</h4>
                            <small className="text-uppercase">CEO,TalentTree</small>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    MSOFT webtechnologies is the right place for your business digital promotions,you can get the experienced professionals team,who guides and design the client s requirements...I am very happy with their work for my site..I recommend truly....
                    </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img2} style={{width: "60px", height: "60px"}} alt='img not support...'/> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Abraham sathur</h4>
                            <small className="text-uppercase">Co-Founder,Veritas</small>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    Msoftweb technologies is an excellent Web Designing company .and give excellent services . They are the Best in the service of Digital Marketing and SEO.
                   </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img3} style={{width: "60px", height: "60px"}} alt='img not  support...'/> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Veritas</h4>
                            <small className="text-uppercase">Veritas Mindmaps</small>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    They are good,reliable and professionals with good knowledge about their product and services ...
                    </div>
                </div>
                {/* <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img className="img-fluid rounded" src={img4} style={{width: "60px", height: "60px"}} alt='img not  support...'/>
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Client Name</h4>
                            <small className="text-uppercase">Profession</small>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div> */}
            </div>
           
        </div>
    </div>
    </div>
  )
}

export default Terminal