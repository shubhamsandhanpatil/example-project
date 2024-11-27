import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div> 
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-brand" href='/'>
          {props.title}
          </button>
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
                <button className="nav-link active" aria-current="page" href='/'>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href='/'>
                  Link
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  href='/'
                  // role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" href='/'>
                      Action
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" href='/'>
                      {props.About}
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" href='/'>
                      Something else here
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link disabled" aria-disabled="true">
                  Disabled
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}


Navbar.propTypes={title:PropTypes.string}
let score=88;
var finalscore=1+score;
//  let score=88;
console.log(finalscore);