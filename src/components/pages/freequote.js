import React from 'react'
import { Link } from 'react-router-dom'
import Spinningtopbar from '../../componentsreuse/spinning&topbar'
import Navigation from '../../componentsreuse/navigation'
import Search from '../../componentsreuse/search'
import Quote from '../../componentsreuse/quote'
import Verdor from '../../componentsreuse/verdor'
import Footer from '../../componentsreuse/footer'

const Freequote = () => {
  return (
    <div>
      <Spinningtopbar/>

      {/* Navbar Start */}
    <div className="container-fluid position-relative p-0">
        <Navigation/>

        <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">Free Quote</h1>
                    <Link to="/" className="h5 text-white">Home</Link>
                    <i className="far fa-circle text-white px-2"></i>
                    <Link to="/pages/quote" className="h5 text-white">Free Quote</Link>
                </div>
            </div>
        </div>
    </div>
    {/* Navbar End */}

     {/* Full Screen Search Start */}
         <Search />
    {/* Full Screen Search End */}

    {/*quote Start */}
       <Quote />
    {/* quote End */}

     {/* vendor Start */}
         {/* <Verdor /> */}
    {/* vendor End */}

    {/* footer Start */}
         <Footer />
    {/* footer End */}
    </div>
  )
}

export default Freequote