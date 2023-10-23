import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg  bg-dark bg-varient text-white py-3 my-0  ">
  <div className="container-fluid  ">
    <Link className="navbar-brand font-size-20 text-white" to="/">Fitness</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active  text-white"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white"  to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active  text-white"  to="/contact">Contact</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
