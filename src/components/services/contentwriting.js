import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../componentsreuse/navigation'
import Spinningtopbar from '../../componentsreuse/spinning&topbar'
import Footer from '../../componentsreuse/footer'
import Search from '../../componentsreuse/search'
import Verdor from '../../componentsreuse/verdor'


const Contentwriting = () => {
  return (
    <div>
       <Spinningtopbar/>

{/* Navbar & Carousel Start */}
<div className="container-fluid position-relative p-0">
    <Navigation/>

    <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: "90px"}}>
        <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-4 text-white animated zoomIn">Content Writing</h1>
                <Link to="/" class="h5 text-white">Home</Link>
                <i class="far fa-circle text-white px-2"></i>
                <Link to="#" class="h5 text-white">Content Writing</Link>
            </div>
        </div>
    </div>
</div>

{/* Navbar End */}


{/* Full Screen Search Start */}
    <Search/>
{/* Full Screen Search End */}



{/* Vendor Start */}
    {/* <Verdor /> */}
{/* Vendor End */}


<Footer/>
    </div>
  )
}

export default Contentwriting