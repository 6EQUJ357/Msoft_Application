import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../componentsreuse/navigation'
import Spinningtopbar from '../../componentsreuse/spinning&topbar'
import Footer from '../../componentsreuse/footer'
// import Search from '../../componentsreuse/search'
// import Verdor from '../../componentsreuse/verdor'


const Mobileapplication = () => {
  return (
    <div>
       <Spinningtopbar/>

        {/* Navbar & Carousel Start */}
        <div className="container-fluid position-relative p-0">
            <Navigation/>

            <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: "90px"}}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Mobile Application</h1>
                        <Link to="/" class="h5 text-white">Home</Link>
                        <i class="far fa-circle text-white px-2"></i>
                        <Link to="#" class="h5 text-white">Mobile Application</Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Navbar End */}

<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" dataWow>
        <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                <h1 className="mb-0">Mobile Development Bring The Picture Together</h1>
            </div>

            <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img1} style={{width: "60px", height: "60px"}} /> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Mobile APP Development</h4>                           
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    In the current years mobile phone clients have expanded . The majority of the hunts are currently done on versatile. Also, to catch everyone's eye and to get business you ought to have a versatile application. In that way you are coming to the majority and your items are more discussed now. Without a versatile application your business may stay unnoticed and subsequently will influence your business. Msoft Webtechnologies offers propelled benefits in the field of portable application improvement crosswise over different stage. We consider three key attributes that is whenever access, personalization and relevant utilize offered by versatile stage. We can develop best mobile application for your bussiness as your requirements.
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

export default Mobileapplication