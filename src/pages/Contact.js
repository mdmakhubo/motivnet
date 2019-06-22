import React from "react";

export default function Contact() {
  return (
    <div className="container-fluid no-padding">
      <div className="row">
        {/* <div className="col-md-6 my-3">
          <div className="embed-responsive embed-responsive-21by9 height-60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229091.74345348717!2d28.
                            149962630544998!3d-26.21103689788154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                            1s0x1e953beee0a0387b%3A0x1fff7c478aaa5437!2sKasi+Spoil+Us!5e0!3m2!1sen!2sza!4v1539119115844"
              width="100%"
              height="100%"
              frameborder="0"
              style="border:0"
              allowfullscreen
            />
          </div>
        </div> */}
        <div className="col-md-6 my-3 align-self-center">
          <div className="card text-center">
            <div className="card-header">
              <h1 className="text-uppercase">contact -us</h1>
            </div>
            <div className="card-body">
              <ul class="address">
                <li>
                  <i className="fas fa-map-marker" aria-hidden="true" /> 1234
                  Avenue, Orlando East, <span>Johannesburg.</span>
                </li>
                <li>
                  <i className="fas fa-envelope" aria-hidden="true" />{" "}
                  info@example.com
                </li>
                <li>
                  <i className="fas fa-mobile" aria-hidden="true" /> 011 935
                  9123
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
