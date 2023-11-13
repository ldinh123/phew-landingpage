import React from "react";
import { FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";
import footer_img from "../../assets/footer-img.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col" id="footer-title">
            <p>
              Bạn cần <br /> trò chuyện <br /> với Phew?
            </p>
          </div>
          <div class="col" id="footer-contact">
            <label>
              <input
                type="myInput"
                placeholder="   Enter your email here...."
              />
              <button className="sub-btn">
                <FaPaperPlane />
              </button>
            </label>
            <i>
              <FaFacebook />
            </i>
            <i>
              <FaInstagram />
            </i>
            <div className="footer-img">
              <img src={footer_img} alt="footer-img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
