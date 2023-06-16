import React from 'react'
import { Link } from 'react-router-dom'
import img from "../img/msoft2.png"

const Navigation = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="#a" className="navbar-brand p-0">
                {/* <h1 className="m-0">
                    {/* <i className="fa fa-user-tie me-2"></i> 
                    <img src={img} alt='img not support' style={{width:"250px", height:"100px"}} />
                   </h1> */}
             <img src={img} alt='img not support' style={{width:"250px", height:"auto"}} />

            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    
                    {/* <div className="nav-item dropdown">
                    <Link  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu m-0">
                             <Link to="/pages/priceplan" className="dropdown-item">Price Plan</Link> 
                            <Link to="/ourfeatures" className="dropdown-item">Our Features</Link>
                            <Link to="/teammembers" className="dropdown-item">Team Members</Link> 
                            <Link to="/terminal" className="dropdown-item">Terminal</Link>
                            <Link to="/quote" className="dropdown-item">Free Quote</Link>
                            
                        </div>
                    </div> */}
                    <div className="nav-item dropdown">
                        <Link  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
                        <div className="dropdown-menu m-0">
                            <Link to="/webapplication" className="dropdown-item">Web Applications</Link>
                            <Link to="/mobileapplication" className="dropdown-item">Mobile Applications</Link>
                            <Link to="/digitalmarketing" className="dropdown-item">Digital Marketing</Link>
                            {/* <Link to="/webhosting" className="dropdown-item">Web Hosting</Link>
                            <Link to="/bulksms" className="dropdown-item">Bulk SMS</Link>
                            <Link to="/contentwriting" className="dropdown-item">Content Writing</Link> */}
                            {/* <Link to="/priceinfo" className="dropdown-item">Price Info</Link> */}
                            
                        </div>
                    </div>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                {/* <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
                {/* <a href="#" className="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a> */}
            </div>
        </nav>
    </div>
  )
}

export default Navigation