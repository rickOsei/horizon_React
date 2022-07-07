import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mx-auto">
          <div className="row footer-text">
            <div className="col-2"></div>
            <div className="col-3 whereabout">
              <h5 className="visit">Visit Us In Ghana</h5>
              <p className="country">Accra,Ghana</p>
              <p className="loc">Lorem ipsum dolor sit amet</p>
              <p className="loc2">
                consectetur adipisicing elit, sed do eiusmod
              </p>
            </div>

            <div className="col-3 whereabout">
              <h5 className="visit">Visit Us In Nigeria</h5>
              <p className="country">Lagos,Nigeria</p>
              <p className="loc">Lorem ipsum dolor sit amet</p>
              <p className="loc2">consectetur adipisicing elit</p>
            </div>

            <div className="col-3 whereabout">
              <h5 className="visit">Visit Us In Kenya</h5>
              <p className="country">Nairobi,Kenya</p>
              <p className="loc">Lorem ipsum dolor sit amet </p>
              <p className="loc2">
                consectetur adipisicing elit, sed do eiusmod
              </p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </>
    );
  }
}
