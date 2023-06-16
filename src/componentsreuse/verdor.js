import React from 'react'
import img1 from "../img/vendor-1.jpg"
import img2 from "../img/vendor-2.jpg"
import img3 from "../img/vendor-3.jpg"
import img4 from "../img/vendor-4.jpg"
import img5 from "../img/vendor-5.jpg"
import img6 from "../img/vendor-6.jpg"
import img7 from "../img/vendor-7.jpg"
import img8 from "../img/vendor-8.jpg"
import img9 from "../img/vendor-9.jpg"

const Verdor = () => {
  return (

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
            <div className="bg-white">
            {/* owl-carousel */}
                <div className=" vendor-carousel">
                    <img src={img1} alt="img not support" />
                    <img src={img2} alt="img not support" />
                    <img src={img3} alt="img not support" />
                    <img src={img4} alt="img not support" />
                    <img src={img5} alt="img not support" />
                    <img src={img6} alt="img not support" />
                    <img src={img7} alt="img not support" />
                    <img src={img8} alt="img not support" />
                    <img src={img9} alt="img not support" />
                </div>
            </div>
        </div>
    </div>


  )
}

export default Verdor