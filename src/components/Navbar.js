import React from 'react'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Navbar.propTypes = {
//   title: PropTypes.string,
//   aboutText: PropTypes.string
// };

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><b>{props.title}</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">{props.aboutText}</Link>
            </li>
          </ul>

          {/* Toggle to change theme mode */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-2`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" />
            <label className="form-check-label">{props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

// Navbar.defaultProps = {
//   title: 'Add a title'
// }

export default Navbar;
