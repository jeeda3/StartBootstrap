import React from 'react'
import { Link } from 'react-router-dom'; 
import Nav from './Navbar.module.css'
export default function Navbar() {
  return (
    <div><nav className={`navbar navbar-expand-lg ${Nav.startPage} text-uppercase`}>
    <div className="container ">
      <Link className="navbar-brand text-white fs-2 fw-bolder" to="#">Start Bootstrap</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-bolder">
          <li className="nav-item">
            <Link className="nav-link  text-white" aria-current="page" to={'/portfolio'}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" aria-current="page" to={'/about'}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link  text-white" aria-current="page" to={'/contact'}>Contact</Link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  </div>
  )
}
