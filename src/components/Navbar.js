import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.homeText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  {props.aboutText}
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.aboutText}
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className={`form-check form-check-inline text-${(props.mode)==='light'? 'dark':'light'} `}>
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="none" onClick={props.toggleColorMode}/>
              <label className="form-check-label " htmlFor="inlineRadio1">None</label>
            </div>
            <div className={`form-check form-check-inline text-${(props.mode)==='light'? 'dark':'light'} `}>
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="red" onClick={props.toggleColorMode}/>
              <label className="form-check-label text-danger" htmlFor="inlineRadio2">R</label>
            </div>
            <div className={`form-check form-check-inline text-${(props.mode)==='light'? 'dark':'light'}`}>
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="green" onClick={props.toggleColorMode}/>
              <label className="form-check-label text-success" htmlFor="inlineRadio3">G</label>
            </div>
            <div className={`form-check form-check-inline text-${(props.mode)==='light'? 'dark':'light'}`}>
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="blue" onClick={props.toggleColorMode}/>
              <label className="form-check-label text-info" htmlFor="inlineRadio4">B </label>
            </div>
            
            <div className={`form-check form-switch text-${(props.mode)==='light'? 'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired ,
  homeText: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps={
    title:"set title here",
    homeText:"Home",
    aboutText:"About"
}
