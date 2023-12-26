import React from "react";
import Nau_element_2 from "../../../assets/15.png";
import Nau_element_1 from "../../../assets/4.png";
import Nau from "../../../assets/nau.png";
import "./nau.css";

NauDetail.propTypes = {};

function NauDetail(props) {
  return (
    <div className="product nau">
      <div className="product-img">
        <img
          src={Nau}
          alt="nau"
          className="pc"
          style={{ height: "200px", position: "relative" }}
        />
        <img
          src={Nau}
          alt="nau"
          className="tb"
          style={{ height: "200px", position: "relative" }}
        />
        <img
          src={Nau}
          alt="nau"
          className="mb"
          style={{ height: "200px", position: "relative" }}
        />
        <img
          src={Nau_element_1}
          alt="nau-element-1"
          className="nau-element-1"
          style={{
            height: "50px",
            position: "absolute",
            top: "0px",
            left: "420px",
            transform: "rotate(0deg)",
          }}
        />
        <img
          src={Nau_element_1}
          alt="nau-element-2"
          className="nau-element-2 pc"
          style={{
            height: "60px",
            position: "absolute",
            top: "200px",
            left: "800px",
            transform: "rotate(0deg)",
          }}
        />
        <img
          src={Nau_element_1}
          alt="nau-element-2"
          className="nau-element-2 tb"
          style={{
            height: "60px",
            position: "absolute",
            top: "200px",
            left: "600px",
            zIndex: "-1",
            transform: "rotate(0deg)",
          }}
        />
        <img
          src={Nau_element_1}
          alt="nau-element-3"
          className="nau-element-3"
          style={{
            height: "60px",
            position: "absolute",
            top: "40px",
            left: "175px",
            transform: "rotate(60deg)",
          }}
        />
        <img
          src={Nau_element_1}
          alt="nau-element-5"
          className="nau-element-3"
          style={{
            height: "90px",
            position: "absolute",
            top: "120px",
            left: "150px",
            transform: "rotate(0deg)",
          }}
        />
        <img
          src={Nau_element_2}
          alt="nau-element-4 "
          className="nau-element-4 pc"
          style={{
            height: "150px",
            position: "absolute",
            top: "130px",
            left: "1100px",
            transform: "rotate(100deg)",
          }}
        />
        <img
          src={Nau_element_2}
          alt="nau-element-4 "
          className="nau-element-4 tb"
          style={{
            height: "150px",
            position: "absolute",
            top: "130px",
            left: "650px",
            transform: "rotate(100deg)",
          }}
        />
      </div>
      <div className="product-text">
        <div className="product-title">
          <h1>Nâu</h1>
        </div>
        <div className="product-content">
          <p className="content">
            Nâu chăm chỉ, năng suất và là 1 workaholic chính hiệu.
          </p>
          <br />
          <p>
            Nâu thích ghé thư viện, quán cà phê (nhưng phải yên tĩnh) và góc học
            tập được bày biện gọn ghẽ vì lắm khi Nâu bị OCD.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NauDetail;
