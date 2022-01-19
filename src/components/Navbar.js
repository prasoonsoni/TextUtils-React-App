//rfc
import React, { useState } from "react";
import PropTypes from 'prop-types' //imp


export default function Navbar(info) {

  const [stateText, setStateText] = useState('Enable Dark Mode')
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${info.mode} bg-${info.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {info.title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {info.about}
                </a>
              </li>
            </ul>
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={info.toggleMode}/>
              <label className={`custom-control-label text-${info.mode==='light'?'dark':'light'}`} htmlFor="customSwitch1">{info.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Your Title Here",
  about: "About Text Here"
}
