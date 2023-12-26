import React from "react";
import Mam_element_3 from "../../../assets/16.png";
import Mam_element_4 from "../../../assets/Artboard 31@4x.png";
import Mam_element_2 from "../../../assets/Artboard 32@4x.png";
import Mam_element_1 from "../../../assets/Artboard 41@4x.png";
import Mam_bg from "../../../assets/lp11.png";
import Mam from "../../../assets/mam.png";
import "./mam.css";

MamDetail.propTypes = {};

function MamDetail(props) {
  return (
    <div className="product mam">
      <div className="product-text">
        <div className="product-title">
          <h1>Mầm</h1>
        </div>
        <div className="product-content">
          <p className="content">Mầm thích rừng, thích cây lắm lắm</p>
          <br />
          <p>
            Đặc biệt yêu hơn là khi vào buổi sớm mát mẻ và buổi tối dịu dàng,
            Mầm hoà đồng với mọi người, cả các anh chị cây cỏ khác và cả ông bà
            cổ thụ. Mầm có thể đem đến sự mát mẻ, thoải mái cho bất cứ ai
          </p>
        </div>
      </div>
      <div className="product-img">
        <img
          src={Mam}
          alt="mam"
          className="pc"
          style={{ height: "200px", position: "relative" }}
        />
        <img
          src={Mam}
          alt="mam"
          className="tb"
          style={{ height: "150px", position: "relative", top: "50px" }}
        />
        <img
          src={Mam}
          alt="mam"
          className="mb"
          style={{ height: "200px", position: "relative" }}
        />
        <img
          src={Mam_bg}
          alt="mam-background"
          className="pc"
          style={{
            height: "200px",
            position: "absolute",
            left: "1050px",
            top: "50px",
            zIndex: "-1",
          }}
        />
        <img
          src={Mam_bg}
          alt="mam-background"
          className="tb"
          style={{
            height: "170px",
            position: "absolute",
            left: "600px",
            top: "100px",
            zIndex: "-1",
          }}
        />
        <img
          src={Mam_element_1}
          alt="mam-element-1"
          className="mam-element-1 pc"
          style={{
            height: "80px",
            position: "absolute",
            top: "-20px",
            left: "1010px",
            transform: "rotate(0deg)",
          }}
        />
        <img
          src={Mam_element_1}
          alt="mam-element-1"
          className="mam-element-1 tb"
          style={{
            height: "80px",
            position: "absolute",
            top: "-20px",
            left: "100px",
            transform: "rotate(0deg)",
          }}
        />
        <img
          src={Mam_element_2}
          alt="mam-element-2"
          className="mam-element-2"
          style={{
            height: "60px",
            position: "absolute",
            top: "175px",
            left: "0px",
            transform: "rotate(0deg)",
            zIndex: "-1",
          }}
        />
        <img
          src={Mam_element_3}
          alt="mam-element-3"
          className="mam-element-3"
          style={{
            height: "110px",
            position: "absolute",
            top: "-30px",
            left: "600px",
            transform: "rotate(-30deg)",
          }}
        />
        <img
          src={Mam_element_3}
          alt="mam-element-5"
          className="mam-element-5"
          style={{
            height: "80px",
            position: "absolute",
            top: "50px",
            left: "300px",
            zIndex: "-1",
            transform: "rotate(-75deg)",
          }}
        />
        <img
          src={Mam_element_4}
          alt="mam-element-4"
          className="mam-element-4 pc"
          style={{
            height: "80px",
            position: "absolute",
            top: "190px",
            left: "900px",
            transform: "rotate(0deg)",
            zIndex: "-1",
          }}
        />
        <img
          src={Mam_element_4}
          alt="mam-element-4"
          className="mam-element-4 tb"
          style={{
            height: "80px",
            position: "absolute",
            top: "250px",
            left: "500px",
            transform: "rotate(0deg)",
            zIndex: "-1",
          }}
        />
      </div>
    </div>
  );
}

export default MamDetail;
