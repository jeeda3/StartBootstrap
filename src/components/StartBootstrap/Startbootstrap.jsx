import React from 'react'
import start from './Startbootstrap.module.css'
import avataaars from '../../images/avataaars.svg';

export default function () {
  return (
    <div className={`${start.startBootstrap} text-white`}>
    <div className='container d-flex align-items-center flex-column '>
      <img className={`${start.Imga} Imgavataaars mb-5 mt-5`} src={avataaars} />
      <h1 className='fw-bold fs-1 text-uppercase mb-4'>Start Bootstrap</h1>
      <div className='mb-4 d-flex align-items-center justify-content-center'>
        <hr className={`${start.custom}`}/>
        <i class="fa-solid fa-star fa-2x ms-3 me-3"></i>
        <hr className={`${start.custom}`}/>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </div>
  )
}
