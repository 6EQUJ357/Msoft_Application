import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../componentsreuse/navigation'
import Spinningtopbar from '../../componentsreuse/spinning&topbar'
import Footer from '../../componentsreuse/footer'
// import Search from '../../componentsreuse/search'
// import Verdor from '../../componentsreuse/verdor'


const Digitalmarketing = () => {
  return (
    <div>
       <Spinningtopbar/>

{/* Navbar & Carousel Start */}
<div className="container-fluid position-relative p-0">
    <Navigation/>

    <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: "90px"}}>
        <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-4 text-white animated zoomIn">Digital Marketing</h1>
                <Link to="/" class="h5 text-white">Home</Link>
                <i class="far fa-circle text-white px-2"></i>
                <Link to="#" class="h5 text-white">Digital Marketing</Link>
            </div>
        </div>
    </div>
</div>

{/* Navbar End */}

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" dataWow>
        <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                <h1 className="mb-0">Digital Marketing</h1>
            </div>

            <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img1} style={{width: "60px", height: "60px"}} /> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Why digital marketing is require for business?</h4>                           
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    Any business requires advertisement for its development. advertisement includes conveying the presence of your business to the greatest number of individuals and furthermore to persuade them to purchase your products and get services. TV, Radio and Newsprint ads, Hoardings, Fliers, Leaflets, Direct Marketing are a portion of the customary techniques for business advertisement. In the new thousand years, Investment for those is very high and low ROI.</div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img2} style={{width: "60px", height: "60px"}} alt='img not support...'/> */}
                        <div className="ps-4">
                            {/* <h4 className="text-primary mb-1">Is Website Need for Our Bussiness?</h4> */}
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    The web is the most effective medium for business advertisement as billions of individuals approach it and they are the potential gatherings of people to get interchanges with respect to your items and administrations. Observe the appended chart; this is information discharged by World Bank about web utilization. You will find that web utilization has expanded quickly in India. Obviously the web is a successful medium to publicize and advance your items as an ever increasing number of individuals are getting to it. Additionally since the use of cell phones has expanded exponentially over the most recent couple of years, the web ends up versatile and is an extremely helpful instrument for the shopper additionally expanding its utilization. It would be ideal if you see the connected chart. This will influence us to acknowledge why is computerized advertising essential to organizations.
                   </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img3} style={{width: "60px", height: "60px"}} /> */}
                        <div className="ps-4">
                            {/* <h4 className="text-primary mb-1">Less budget</h4> */}
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    You will see that Digital Advertising is the quickest developing media in World. This pattern will proceed later on and consequently it will be basic for organizations to go computerized. Any correspondence or exchange with your clients through the Internet or Digital Channels can be characterized as Digital Marketing. we will see the different ideas and devices in Digital Marketing and how Digital Marketing helps business. We will likewise give the means in executing a Digital Marketing venture. Advanced Marketing is a quickly developing and changing field with tremendous degree for development.         
                    </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img4} style={{width: "60px", height: "60px"}} /> */}
                        <div className="ps-4">
                            {/* <h4 className="text-primary mb-1">Promoting</h4> */}
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    There are not set standards of Digital Marketing like different branches of information. We give fundamental ideas and apparatuses in Digital Marketing. After which you need to for all intents and purposes execute the same. At that point Digital Marketing can be conveyed by 'doing' and 'attempting' the ideas and instruments. So wishing you the best in your Digital Marketing venture. 
                    </div>
                </div>
               
            </div>
        </div>
    </div>


{/* Full Screen Search Start */}
    {/* <Search/> */}
{/* Full Screen Search End */}



{/* Vendor Start */}
    {/* <Verdor /> */}
{/* Vendor End */}


<Footer/>
    </div>
  )
}

export default Digitalmarketing