import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../componentsreuse/navigation'
import Spinningtopbar from '../../componentsreuse/spinning&topbar'
import Footer from '../../componentsreuse/footer'
// import Search from '../../componentsreuse/search'
// import Verdor from '../../componentsreuse/verdor'




const Webapplication = () => {
  return (
    <div>
        <Spinningtopbar/>

{/* Navbar & Carousel Start */}
<div className="container-fluid position-relative p-0">
    <Navigation/>

    <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: "90px"}}>
        <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-4 text-white animated zoomIn">Web Application</h1>
                <Link to="/" class="h5 text-white">Home</Link>
                <i class="far fa-circle text-white px-2"></i>
                <Link to="#" class="h5 text-white">Web Application</Link>
            </div>
        </div>
    </div>
</div>

{/* Navbar End */}



<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" dataWow>
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                <h1 className="mb-0">Web Development Bring The Picture Together</h1>
            </div>
           
            {/* owl-carousel */}
            <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img1} style={{width: "60px", height: "60px"}} /> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Web Designing and Web Development</h4>                           
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    <span style={{fontWeight:"bolder"}}>Msoft web technologies</span> always ready to do web design ,development of a website, and eCommerce website. We design and create websites for business peoples to drive customers in to sales or their targets, Msoft have been delivering number of websites for various businesses around the world. Our professional team is ready to turn your ideas into reality. we are always ready to do whatever your project demands, we can deliver your project on time and give quality service.</div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img2} style={{width: "60px", height: "60px"}} alt='img not support...'/> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Is Website Need for Our Bussiness?</h4>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    Do you have a business and don't have a site? On the off chance that you said yes, it's nearly as though your business doesn't exist. In this cutting edge period, individuals and organizations are on the web for data. For what reason do you think individuals visit a site? It's principally to discover data. What's more, in case you're in the business world, data is basic. You need a site for your clients. It needs to contain data about what you can improve the situation them.
                   </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img3} style={{width: "60px", height: "60px"}} /> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Less budget</h4>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    In earlier, business people advertise their product or services gone through printed media, radio, and television. It’s expensive! Investing in advertising is necessary, but it takes higher budget. But we have solution that is,Having a website will make promoting your business less budget.            
                    </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img4} style={{width: "60px", height: "60px"}} /> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Promoting</h4>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    A website is more friendly when it comes to advertising and marketing. There are lots of ways to advertise your products or services through the internet. One example is Facebook ads, an advertising feature offered through Facebook. Another one is called SEO. This is a major advantage for your business. Having a good SEO service provider can boost the ranking of your website which quickly results in increased sales and higher profits.
                    </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img4} style={{width: "60px", height: "60px"}} /> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Increase Customers</h4>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    Most businesses have local popularity, but what about potential customers outside their city? A website can help you generate more customers. Not just outside your city, but worldwide. The internet offers a global community. With a website, your business will be visible around the world.
                    </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img4} style={{width: "60px", height: "60px"}} /> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Accessibility</h4>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    Have you ever experienced having to turn customers away because it’s closing time? Well, you don’t have to close the doors of your website. An online site can be visited any time of the day or night. People will look to your site instead of going to your shop because it is more accessible. Just make sure to post enough information about your products and services.
                    </div>
                </div>
                <div className="testimonial-item bg-light my-4">
                    <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        {/* <img className="img-fluid rounded" src={img4} style={{width: "60px", height: "60px"}} /> */}
                        <div className="ps-4">
                            <h4 className="text-primary mb-1">Access to Info</h4>
                        </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">
                    Did you know that if you own a website, you can actually track everything that is happening on it? You can even look for information that will tell you how many people visited your site, or how many people messaged or emailed you. You can access the progress of your website and view all its pages. You can even make an update anytime, making it much less expensive than printed material.
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

export default Webapplication