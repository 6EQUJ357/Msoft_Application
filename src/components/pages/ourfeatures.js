import React from 'react'
import { Link } from 'react-router-dom'
import Spinningtopbar from '../../componentsreuse/spinning&topbar'
import Navigation from '../../componentsreuse/navigation'
import Search from '../../componentsreuse/search'
import Featurs from '../../componentsreuse/featurs'
import Verdor from '../../componentsreuse/verdor'
import Footer from '../../componentsreuse/footer'


const Ourfeatures = () => {
  return (
    <div>
      <Spinningtopbar/>

      {/* Navbar Start */}
    <div class="container-fluid position-relative p-0">
       <Navigation/>

        <div class="container-fluid bg-primary py-5 bg-header" style={{marginBottom: "90px"}}>
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">Features</h1>
                    <Link to="/" class="h5 text-white">Home</Link>
                    <i class="far fa-circle text-white px-2"></i>
                    <Link to="/pages/ourfeatures" class="h5 text-white">Features</Link>
                </div>
            </div>
        </div>
    </div>
    {/* Navbar End */}

     {/* Full Screen Search Start */}
         <Search />
    {/* Full Screen Search End */}

    {/*features Start */}
       <Featurs />
    {/* features End */}

     {/* vendor Start */}
         {/* <Verdor /> */}
    {/* vendor End */}

    {/* footer Start */}
         <Footer />
    {/* footer End */}

    </div>
  )
}

export default Ourfeatures