import { ErrorMessage, Field, Form, Formik } from "formik"
import { SecondaryButton } from "./Button"
import * as Yup from "yup"

const ContactForm = () => {
  return (
    <div className="pt-20 md:pt-32 lg:pt-44">
      <div className="bg-to1 bg-purple bg-no-repeat py-10 md:py-14 lg:py-24 flex flex-col items-center px-5">
        <div className="bg-white p-5 md:p-8 lg:p-10 rounded-xl md:rounded-[20px] w-full max-w-[920px]">
          <div>
            <header className="pb-10 md:pb-12 lg:pb-16 text-3xl md:text-[40px] font-satoshi font-bold">
            Let’s Get In Touch
            </header>
            <Formik initialValues={{fullName : '', phoneNumber : '', email : '', service : '', need : ''}} validationSchema={Yup.object({
              fullName : Yup.string().required("Input field is required").min(3, "Please enter a valid naame"),
              phoneNumber : Yup.number().required("Input field is required").min(10, 'Minimum of 10 characters').max(14, "Maximum of 14 Characters"),
              email : Yup.string().email("Please enter a valid email address").required("Input field is required"),
              service : Yup.string().required('Input field is required'),
              need : Yup.string().min("Minimum of 10 characters").required("Input field is required")
            })}
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
                  </Field>
                  <ErrorMessage name="service" component="div" className="text-red-400 italic" />
                </div>
                <div className="flex flex-col md:col-start-1 md:col-end-3">
                  <label htmlFor="need" className="pb-2 text-sm md:text-base text-[#000] font-medium">Tell us more about your need/requirement</label>
                  <Field name="need" type="text" as="textarea" rows="5" className="border border-[#D7DCE0] rounded-md p-2 md:p-4 text-sm md:text-base font-light" ></Field>
                  <ErrorMessage name="need" component="div" className="text-red-400 italic"/>
                </div>
                <div className="flex flex-col md:col-start-1 md:col-end-3 pt-8 md:pt-12 lg:pt-16">
                  <SecondaryButton text="Get in touch" width="full" />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
