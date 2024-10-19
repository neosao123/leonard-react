import React from "react";
import "../../css/contact1.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact1 = () => {
  return (
    <>
      <div className="inner-contact tnb7">
        <div className="container">
          <div className="big-heading-center"> Call now Or write a message</div>
          <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-12">
              <div className="inner-contact-text">
                <div className="inner-contact-divt">
                  <div className="contact-icon">
                    <FaMapMarkerAlt aria-hidden="true" />
                  </div>
                  <div className="contact-commen-text">
                    <h6>Address</h6>
                    <p>
                      LEONARD Personality Inventory
                      <br />
                      Mailing Address PO Box 199, Jalan Klang Lama, 58700 Kuala
                      Lumpur, Malaysia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="inner-contact-divt">
                <div className="contact-icon">
                  <FaPhoneAlt aria-hidden="true" />
                </div>
                <div className="contact-commen-text">
                  <h6>Phone</h6>
                  <p>+6012 658 7674</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="inner-contact-divt">
                <div className="contact-icon">
                  <FaEnvelope aria-hidden="true" />
                </div>
                <div className="contact-commen-text">
                  <h6>Email</h6>
                  <p>leonardpersonality@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 mnp">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.98263876876!2d101.67358511408953!3d3.0992728543231634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a3bb6d9414d%3A0xa29d9886154741fb!2s199%2C%20Jln%20Klang%20Lama%2C%2058100%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1642841253715!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allow="fullscreen"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact1;
