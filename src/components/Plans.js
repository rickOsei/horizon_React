import React, { Component } from "react";

export default class Plans extends Component {
  render() {
    return (
      <>
        <section className="thumbnail">
          <div className="container-fluid thumbnail">
            <div className="row">
              <h2 className="thumbnail-title mx-auto">PLANS</h2>
            </div>

            <div className="row cards">
              <div className="col-3 item">
                <div className="card one" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="/images/download1.jpg"
                    style={{ height: "190px" }}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Virtual Offices</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-3 item">
                <div className="card two" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="images/download3.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Customised Offices</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-3 item">
                <div className="card three" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="/images/download.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Serviced Offices</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-3 item">
                <div className="card four" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="/images/pexels-pixabay-416320.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Meeting Rooms</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
