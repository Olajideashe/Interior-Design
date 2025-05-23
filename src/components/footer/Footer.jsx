import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faPinterestP,
  faTwitter,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faApplePay,
  faGooglePay
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-black text-white pt-5">
      {/* Top Text */}
      <div className="text-center pb-4">
        <h2 className="fw-bold" style={{fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
          We Provide best
          <br />
          handpicked home decor
        </h2>
        <button className="btn btn-outline-light mt-3 px-4 py-2 text-uppercase" style={{ fontSize: '0.85rem' }}>
          Explore Our Products
        </button>
      </div>

      {/* Divider */}
      <hr className="text-secondary mt-5" style={{ borderTop: '1px solid #5a4c3f' }} />

      {/* Footer Content */}
      <div className="container py-5">
        <div className="row text-secondary">
          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <p className="text-uppercase small">Subscribe to receive grape news & offers</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control bg-transparent text-white border-0 border-bottom" placeholder="Enter your email" />
              <button className="btn" style={{ backgroundColor: '#5a3e2b' }}>&gt;</button>
            </div>
            <div className="form-check mt-3 small">
              <input className="form-check-input bg-dark border-white" type="checkbox" id="consent" />
              <label className="form-check-label text-secondary" htmlFor="consent">
                I've read the Privacy Policy and I consent to Halal Interior sending me marketing communications
              </label>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-8">
            <div className="row row-cols-2 row-cols-md-4 text-uppercase small g-3">
              <div>
                <p>All Productr</p>
                <p>Best Sellers</p>
                <p>New Arrivals</p>
                <p>Lowest Prices</p>
                <p>Delivery</p>
              </div>
              <div>
                <p>Privacy Policy</p>
                <p>Order Online</p>
                <p>Contact Us</p>
                <p>Returns & Claims</p>
              </div>
              <div>
                <p>About Us</p>
                <p>Our Promise</p>
                <p>My Account</p>
              </div>
              <div>
                <p>Blog</p>
                <p>Reviews</p>
                <p>Privacy Policy</p>
                <p>Lookbook</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Payment Row */}
        <div className="row mt-5 border-top pt-4 border-secondary text-secondary align-items-center">
          {/* Social Icons */}
          <div className="col-md-6 mb-3">
            <div className="d-flex flex-wrap">
              <div className="border p-2 px-4 me-2 mb-2 text-white">
                <FontAwesomeIcon icon={faInstagram} className="me-2" />
                Instagram
              </div>
              <div className="border p-2 px-4 me-2 mb-2 text-white">
                <FontAwesomeIcon icon={faFacebookF} className="me-2" />
                Facebook
              </div>
              <div className="border p-2 px-4 me-2 mb-2 text-white">
                <FontAwesomeIcon icon={faPinterestP} className="me-2" />
                Pinterest
              </div>
              <div className="border p-2 px-4 me-2 mb-2 text-white">
                <FontAwesomeIcon icon={faTwitter} className="me-2" />
                Twitter
              </div>
            </div>
            <div className="mt-3">
              <img src="https://flagcdn.com/us.svg" alt="US Flag" width="20" className="me-2" />
              United States <span className="ms-1">&#9662;</span>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="col-md-6 text-md-end">
            <p className="mb-2 small">We Accept</p>
            <div className="d-flex justify-content-md-end gap-3">
              <FontAwesomeIcon icon={faApplePay} size="2x" />
              <FontAwesomeIcon icon={faGooglePay} size="2x" />
              <FontAwesomeIcon icon={faCcMastercard} size="2x" />
              <FontAwesomeIcon icon={faCcVisa} size="2x" />
              <FontAwesomeIcon icon={faCcAmex} size="2x" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="row mt-4 border-top pt-3 border-secondary small text-secondary">
          <div className="col-md-6">
            &copy; 2021 CHIRANJITH.COM. All Rights Reserved.
          </div>
          <div className="col-md-6 text-md-end">
            <span className="me-3">Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
