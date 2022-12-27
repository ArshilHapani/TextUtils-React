import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) { //! Here argument of function is a props 

  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id='Nav-Ball'>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <a className="navbar-brand" href='#'>{props.title}</a>  The things which we are using here is props  */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">{props.home}</a> */}
              <Link className="nav-link"  aria-current="page" to="/">{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
              {/* <Link className="nav-link" to="/">{props.aboutText}</Link> */}
            </li>

          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search word." aria-label="Search" />
                <button className="btn btn-primary" type="button" >{props.search}</button>
            </form> */}
          

          <div className="theme-container">
            <button className="multiColor" style={{backgroundColor:"red"}} onClick={props.red}></button>
            <button className="multiColor" style={{backgroundColor:"blue"}} onClick={props.blue}></button>
            <button className="multiColor" style={{backgroundColor:"green"}} onClick={props.green}></button>
            <button className="multiColor" style={{backgroundColor:"yellow"}} onClick={props.yellow}></button>
            <button className="multiColor" style={{backgroundColor:"black"}} onClick={props.dark}></button>
            <button className="multiColor" style={{backgroundColor:"white"}} onClick={props.white}></button>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{fontSize:"2.8vh"}}><ion-icon name="contrast"> </ion-icon>  </label>
          </div>
          
        </div>
      </div>
    </nav>

  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //Compulsory required
  aboutText: PropTypes.string.isRequired
}
// It only receive props as string type if we send number of another data type then it gives error
//
Navbar.defaultProps = { //? Default values of the props
  title: "Title",
  aboutText: "about",
  home: "Home",
  search: "Search"
}                    
