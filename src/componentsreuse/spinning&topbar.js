import React from 'react'


const Spinningtopbar = () => {
  return (
    <div>
         {/* Spinner Start */}
         {/* show */}
    <div id="spinner" className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner"></div>
    </div>
    {/* Spinner End */}
 

    {/* Topbar Start */}
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{height: "45px"}}>
                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>806, Manjeera Majestic, KPHB, Hyderabad</small>
                    <small className="me-3 text-light"><a href='tel:+91 9618624866'><i className="fa fa-phone-alt me-2"></i>+91 9618 624 866</a></small>
                    <small className="text-light"><a href='mailto:info@msoftwebtechnologies.com'><i className="fa fa-envelope-open me-2"></i>info@msoftwebtechnologies.com</a></small>
                    
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{height: "45px"}}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#a"><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.facebook.com/msoftth"><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/in/msoft-web-technologies-616891187"><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#a"><i className="fab fa-instagram fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="#a"><i className="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/* Topbar End */}
    </div>
  )
}

export default Spinningtopbar