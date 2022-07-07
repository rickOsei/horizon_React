import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src="/images/Logo1.png"
              style={{ width: "30px", height: "30px" }}
              alt="flaticons"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <img
                src="images/ghana.png"
                style={{ width: "20px", height: "20px" }}
              />
              <img
                src="images/nigeria.png"
                style={{ width: "20px", height: "20px" }}
              />
              <img
                src="images/kenya.png"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">
                About Us
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
