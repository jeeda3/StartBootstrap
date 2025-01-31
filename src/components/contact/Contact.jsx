import React from 'react'
import contact from './Contact.module.css'
export default function Contact() {
  return (
    <div className={`${contact.cont} container mt-3 mb-5`}>
            <div className='container d-flex align-items-center flex-column'>
                <h1 className=' fw-bold fs-1 text-uppercase mt-5 mb-3'>Contact Me</h1>
            </div>
            <div className=' d-flex align-items-center justify-content-center'>
          <hr className={`${contact.custom}`} />
          <i className="fa-solid fa-star fa-2x ms-3 me-3"></i>
          <hr className={`${contact.custom}`}/>
        </div>
            <form action="#">
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className={`${contact.formfloating} form-floating mb-3 col-lg-6 mt-5`} >
                    <input type="text" className="form-control" id="floatingInput" placeholder="Full name" required />
                    <label htmlFor="floatingInput">Full Name</label>
                </div>
                <div className={`${contact.formfloating} form-floating mb-3 col-lg-6`}>
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label htmlFor="floatingInput ">Email address</label>
                </div>
                <div className={`${contact.formfloating} form-floating mb-3 col-lg-6`}>
                    <input type="text" className="form-control" id="floatingnum" placeholder="number" required />
                    <label htmlFor="floatingnum">phone number</label>
                </div>
                <div className={`${contact.formfloating} form-floating col-lg-6 mb-4`}>
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} required defaultValue={""} />
                    <label htmlFor="floatingTextarea2">Massege</label>
                </div>
                <div className="col-lg-6 text-start mb-5">
                <button type="submit" className={`btn btn-primary me-3 p-3 ${contact.btn}`}>Send</button>
                </div>
            </div>
            </form>
        </div>
  )
}
