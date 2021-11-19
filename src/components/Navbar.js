import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
       
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <div className="d-flex">
      
          <div className="bg-primary rounded mx-2"  onClick={()=>props.toggleMode("primary")} style={{height:'18px',width:'18px'}}></div>
      <div className="bg-warning rounded mx-2" onClick={()=>props.toggleMode("warning")} style={{height:'18px',width:'18px'}}></div>
      <div className="bg-success rounded mx-2" onClick={()=>props.toggleMode("success")} style={{height:'18px',width:'18px'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>props.toggleMode("danger")} style={{height:'18px',width:'18px'}}></div>
         
     
        </div>

      <div className="form-check form-switch">
  <input className="form-check-input"  onClick={()=>props.toggleMode(null)} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label ${props.mode==='light'?'text-dark':'text-light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
     
    </div>
  </div>
</nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText:PropTypes.string
  };

  // Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText:'Set aboutText Here'
  };
