import { ErrorMessage, Field, Form, Formik } from "formik"
import { SecondaryButton } from "./Button"
import * as Yup from "yup"
import { useState } from "react";
import beanEater from "../assets/beanEater.svg"
import axios from 'axios';
import checkMark from "../assets/Verified Check.svg"

const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="pt-12 md:pt-14 lg:pt-24" id="contact">
      <div className="bg-to1 bg-purple bg-no-repeat py-10 md:py-14 lg:py-24 flex flex-col items-center px-5">
        <div className="bg-white p-5 md:p-8 lg:p-10 rounded-xl md:rounded-[20px] w-full max-w-[920px] relative">
         {submitted ? 
            (<div className="flex flex-col items-center gap-6">
              <div>
                  <img src={checkMark} alt="" />
              </div>
              <h3 className="text-center text-2xl md:text-4xl lg:leading-[56px] lg:text-[56px] text-[#013131] font-Utile-bold">
              Your Request has <br /> been Received
              </h3>
              </div>) : (<><div>
            <header className="pb-10 md:pb-12 lg:pb-16 text-3xl md:text-[40px] font-satoshi font-bold">
            Let’s Get In Touch
            </header>
            <Formik initialValues={{fullName : '', phoneNumber : '', email : '', service : '', need : ''}} validationSchema={Yup.object({
              fullName : Yup.string().required("Input field is required").min(3, "Please enter a valid name"),
              phoneNumber : Yup.number().required("Input field is required").min(10, 'Minimum of 10 characters'),
              email : Yup.string().email("Please enter a valid email address").required("Input field is required"),
              service : Yup.string().required('Input field is required'),
              need : Yup.string().required("Input field is required").min(10,"Minimum of 10")
            })}
            onSubmit={(values)=>{
              setIsSubmit(true)
              axios.post('https://temitope-server.vercel.app/api/v1/contact',values)
                .then(() => {
                  setIsSubmit(false)
                  setSubmitted(true)
                }
                )
                .catch(error => console.log(error))
            }}
            >
              <Form className="grid grid-cols-1 md:grid-cols-2 font-poppins gap-6"  >
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="pb-2 text-sm md:text-base text-[#000] font-medium">Your Full Name</label>
                  <Field name="fullName" type="text" placeholder="Jonathan James" className="border border-[#D7DCE0] rounded-md p-2 md:p-4 text-sm md:text-base font-light" />
                  <ErrorMessage name="fullName" component="div" className="text-red-400 italic" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phoneNumber" className="pb-2 text-sm md:text-base text-[#000] font-medium">What’s your phone number?</label>
                  <Field name="phoneNumber" type="text" placeholder="Enter your phone number" className="border border-[#D7DCE0] rounded-md p-2 md:p-4 text-sm md:text-base font-light" />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-400 italic" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="pb-2 text-sm md:text-base text-[#000] font-medium">What’s your email address?</label>
                  <Field name="email" type="text" placeholder="Enter your email address" className="border border-[#D7DCE0] rounded-md p-2 md:p-4 text-sm md:text-base font-light"/>
                  <ErrorMessage name="email" component="div" className="text-red-400 italic" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="service" className="pb-2 text-sm md:text-base text-[#000] font-medium">What service do you need?</label>
                  <Field name="service" as="select" className="border border-[#D7DCE0] rounded-md p-2 md:p-4 text-sm md:text-base font-light">
                    <option>Select service from here</option>
                    <option>Medication Management Training</option>
                    <option>Regulatory Compliance</option>
                    <option>Medicine Optimization</option>
                    <option>Coaching and Mentoring</option>
                  </Field>
                  <ErrorMessage name="service" component="div" className="text-red-400 italic" />
                </div>
                <div className="flex flex-col md:col-start-1 md:col-end-3">
                  <label htmlFor="need" className="pb-2 text-sm md:text-base text-[#000] font-medium">Tell us more about your need/requirement</label>
                  <Field name="need" type="text" as="textarea" rows="5" className="border border-[#D7DCE0] rounded-md p-2 md:p-4 text-sm md:text-base font-light" ></Field>
                  <ErrorMessage name="need" component="div" className="text-red-400 italic"/>
                </div>
                <div className="flex flex-col md:col-start-1 md:col-end-3 pt-8 md:pt-12 lg:pt-16">
                  <SecondaryButton text="Get in touch" width="full" disabled={isSubmit} />
                </div>
              </Form>
            </Formik>
          </div>
          {
            isSubmit && 
            <div className="absolute bg-[rgba(255,255,255,0.8)] inset-0 flex items-center justify-center">
              <img src={beanEater} alt="" />
            </div>
          }</>)
         }
        </div>
      </div>
    </div>
  )
}

export default ContactForm
