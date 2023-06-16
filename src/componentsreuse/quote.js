import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import emailjs from "@emailjs/browser"



const Quote = () => {

    const formik = useFormik({
        initialValues : {
            name : "",
            email : "",
            ph_number : "",
            service : "",
            message : ""
        },
        validationSchema : Yup.object({
            name : Yup.string().required("Name Required"),
            email : Yup.string().email("Invalid Email").required("Email Required"),
            ph_number : Yup.string().required("Mobile Number Required").min(10).max(10),
            service : Yup.string().required("Select Any Service"),
            message : Yup.string()
        }),
        onSubmit : (values, {resetForm})=> {
            emailjs.sendForm('service_6Equj5', 'template_qg1n5wn', ".form", 'f2Ixqtw375bzdyfv8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert("Quote sent successfully...");
            resetForm({values:""});
        }
    })
  return (
    <div>
         <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                        <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
                    </div> 
                    <div className="row gx-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                        </div>
                    </div>
                    {/* <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p> */}
                    <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                       <a href='tel:+91 9618624866'>
                       <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                       </a>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+91 9618 624 866</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                        {/* form */}
                        <form onSubmit={formik.handleSubmit} className='form'>
                            <div className="row g-3">
                                <div className="col-xl-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: "55px"}} name='name' {...formik.getFieldProps("name")}/>
                                    {formik.errors.name ? <small style={{color:"red", fontWeight:"bolder"}}>{formik.errors.name}</small> : null}
                                </div>
                                <div className="col-12">
                                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: "55px"}} name='email' {...formik.getFieldProps("email")}/>
                                    {formik.errors.email ? <small style={{color:"red", fontWeight:"bolder"}}>{formik.errors.email}</small> : null}
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Mobile Number" style={{height: "55px"}} name='ph_number' {...formik.getFieldProps("ph_number")}/>
                                    {formik.errors.ph_number ? <small style={{color:"red", fontWeight:"bolder"}}>{formik.errors.ph_number}</small> : null}
                                </div>
                                <div className="col-12">
                                    <select className="form-select bg-light border-0" style={{height: "55px"}} name="service" onChange={formik.handleChange}>
                                        <option defaultValue>Select A Service</option>
                                        <option value="Web Application">Web Application</option>
                                        <option  value="Mobile Application">Mobile Application</option>
                                        <option  value="Digital Marketing">Digital Marketing</option>
                                        {/* <option  value="Web Hosting">Web Hosting</option>
                                        <option  value="Bulk SMS">Bulk SMS</option>
                                        <option  value="Content Writing">Content Writing</option> */}
                                    </select>
                                    {formik.errors.service ? <small style={{color:"red", fontWeight:"bolder"}}>{formik.errors.service}</small> : null}
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0" rows="3" placeholder="Message (optional)"  name='message' {...formik.getFieldProps("message")}></textarea>
                                    {formik.errors.message ? <small style={{color:"red", fontWeight:"bolder"}}>{formik.errors.message}</small> : null}
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Quote