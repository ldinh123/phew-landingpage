import React from "react";
import Bong_element_2 from "../../../assets/11.png";
import Bong_element_1 from "../../../assets/18.png";
import Bong from "../../../assets/bong.png";
import Bong_bg from "../../../assets/lp9.png";
import "./bong.css";

BongDetail.propTypes = {};

function BongDetail(props) {
  return (
    <div className="product bong slide-right">
      <div className="product-img">
        <img
          src={Bong}
          alt="bong"
          className="pc"
          style={{ height: "200px", position: "relative" }}
        />
        <img
          src={Bong}
          alt="bong"
          className="tb"
          style={{ height: "170px", position: "relative", top: "50px" }}
        />
        <img
          src={Bong}
          alt="bong"
          className="mb"
          style={{ height: "200px", position: "relative" }}
        />
        <img
          src={Bong_bg}
          alt="bong-background"
          style={{
            height: "250px",
            position: "absolute",
            left: "-70px",
            top: "50px",
            zIndex: "-1",
          }}
        />
        <img
          src={Bong_element_1}
          alt="bong-element-1"
          className="bong-element-1"
          style={{
            height: "60px",
            position: "absolute",
            top: "-40px",
            left: "0px",
            transform: "rotate(270deg)",
          }}
        />
        <img
          src={Bong_element_1}
          alt="bong-element-1"
          className="bong-element-1"
          style={{
            height: "60px",
            position: "absolute",
            left: "400px",
            transform: "rotate(270deg)",
            zIndex: "-1",
          }}
        />
        <img
          src={Bong_element_1}
          alt="bong-element-1"
          className="bong-element-1"
          style={{
            height: "60px",
            position: "absolute",
            top: "210px",
            left: "375px",
            zIndex: "-1",
            transform: "rotate(270deg)",
          }}
        />
        <img
          src={Bong_element_2}
          alt="bong-element-2"
          className="bong-element-2 pc"
          style={{
            height: "50px",
            position: "absolute",
            top: "200px",
            left: "800px",
            transform: "rotate(270deg)",
          }}
        />
        <img
          src={Bong_element_2}
          alt="bong-element-2"
          className="bong-element-2 tb"
          style={{
            height: "50px",
            position: "absolute",
            top: "200px",
            left: "600px",
            zIndex: "-1",
            transform: "rotate(270deg)",
          }}
        />
        <img
          src={Bong_element_2}
          alt="bong-element-2"
          className="bong-element-2"
          style={{
            height: "50px",
            position: "absolute",
            top: "150px",
            left: "230px",
            transform: "rotate(270deg)",
          }}
        />
        <img
          src={Bong_element_2}
          alt="bong-element-2"
          className="bong-element-2"
          style={{
            height: "50px",
            position: "absolute",
            top: "45px",
            left: "450px",
            transform: "rotate(270deg)",
          }}
        />
      </div>
      <div className="product-text">
        <div className="product-title">
          <h1>Bông</h1>
        </div>
        <div className="product-content">
          <p className="content">Bông nữ tính, nhẹ nhàng và yêu kiều.</p>
          <br />
          <p>
            Bông mê vườn hoa có mái vòm như trong phim Violet Garden. Bông có
            dáng vẻ đôi chút yểu điệu nhưng nội tâm Bông không hề mềm yếu, mà
            kiên định, vững vàng.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BongDetail;
