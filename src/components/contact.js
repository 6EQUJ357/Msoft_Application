import React from 'react'
import Navigation from '../componentsreuse/navigation'
import Spinningtopbar from '../componentsreuse/spinning&topbar'
import Footer from '../componentsreuse/footer'
import { Link } from 'react-router-dom'
import Search from '../componentsreuse/search'
//import Verdor from '../componentsreuse/verdor'
import {useFormik} from "formik"
import * as Yup from "yup"
import emailjs from "@emailjs/browser"


const Contact = () => {

    const formik = useFormik({
        initialValues : {
            username : "",
            email : "",
            ph_number : "",
            subject : "",
            message : "" 
        },
        validationSchema : Yup.object({
            username : Yup.string().required("Name Required"),
            email : Yup.string().email("Invalid Email").required("Email Required"),
            ph_number : Yup.string().max(10).required("Number Required").min(10).max(10),
            subject : Yup.string().required("Subject Required"),
            message : Yup.string()
        }),
        onSubmit : (values, {resetForm})=>{
            emailjs.sendForm('service_6Equj5', 'template_ap5qkmr', ".form", 'f2Ixqtw375bzdyfv8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert("message sent successfully...");
            resetForm({values:""}); 
            
        }
    })
  return (
    <div>

      <Spinningtopbar/>
    
    {/* Navbar Start*/}
    <div className="container-fluid position-relative p-0">
        <Navigation/>

        <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: "90px"}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">Contact Us</h1>
                    <Link to="/" className="h5 text-white">Home</Link>
                    <i className="far fa-circle text-white px-2"></i>
                    <Link to = "/contact" className="h5 text-white">Contact</Link>
                </div>
            </div>
        </div>
    </div>
    {/* Navbar End*/}


    {/* Full Screen Search Start*/}
    <Search />
    {/* Full Screen Search End*/}


    {/* Contact Start*/}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
                <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
            </div>
            <div className="row g-5 mb-5">
                <div className="col-lg-4">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                       <a href='tel:+91 9618624866'>
                       <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                       </a>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h6 className="text-primary mb-0">+91 9618 624 866</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                        <a href='mailto:info@msoftwebtechnologies.com'>
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        </a>
                        <div className="ps-4">
                            <h5 className="mb-2">Email to get free quote</h5>
                            <h6 className="text-primary mb-0">info@msoftwebtechnologies.com</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Visit our office</h5>
                            <h6 className="text-primary mb-0">806, Manjeera Majestic, KPHB, Hyderabad</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">

                    {/* contact form */}
                    <form onSubmit={formik.handleSubmit} className='form'>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{height: "55px"}} name='username' value={formik.values.username} onChange={formik.handleChange}/>
                                {formik.errors.username ? <small style={{color:"red", fontWeight:"bolder"}}>{formik.errors.username}</small>:null}
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: "55px"}} name='email' value={formik.values.email} onChange={formik.handleChange}/>
                                {formik.errors.email ? <small style={{color:"red", fontWeight:"bolder"}}>{formik.errors.email}</small>:null}
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control border-0 bg-light px-4" placeholder="Mobile Number" style={{height: "55px"}} name='ph_number'  value={formik.values.ph_number} onChange={formik.handleChange}/>
                                {formik.errors.ph_number ? <small style={{color:"red", fontWeight:"bolder"}}>{formik.errors.ph_number}</small>:null}
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{height: "55px"}} name='subject'  value={formik.values.subject} onChange={formik.handleChange}/>
                                {formik.errors.subject ? <small style={{color:"red", fontWeight:"bolder"}}>{formik.errors.subject}</small>:null}
                            </div>
                            <div className="col-12">
                                <textarea className="form-control border-0 bg-light px-4 py-3" rows="4" name='message' placeholder="Message (optional)" value={formik.values.message} onChange={formik.handleChange}></textarea>
                                {formik.errors.message ? <small style={{color:"red", fontWeight:"bolder"}}>{formik.errors.message}</small>:null}
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                    {/* <iframe className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" style={{minHeight: "350px", border:"0"}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe> */}

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3282138783193!2d78.39101607544582!3d17491838983413317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3bcb9193841f4d1b%3A0x43d5c3fbdb546033!2sMSOFT%20webtechnologies!5e0!3m2!1sen!2sin!4v1686831612217!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title=' view map'></iframe>
                </div>
            </div>
        </div>
    </div>
    {/* Contact End*/}


    {/* Vendor Start*/}
        {/* <Verdor /> */}
    {/* Vendor End*/}
    
    <Footer/>
   

    </div>
  )
}

export default Contact