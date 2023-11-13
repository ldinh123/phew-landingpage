import React from "react";
import Bi_element_1 from "../../../assets/10.png";
import Bi_element_4 from "../../../assets/14.png";
import Bi_element_3 from "../../../assets/17.png";
import Bi_element_2 from "../../../assets/Artboard 19@4x.png";
import Bi from "../../../assets/bi.png";

BiDetail.propTypes = {};

function BiDetail(props) {
  return (
    <div className="product bi">
      <div className="product-text">
        <div className="product-title">
          <h1>Bí</h1>
        </div>
        <div className="product-content">
          <p className="content">
            Bí tinh nghịch, vui vẻ và thích gắn kết với mọi người xung quanh
          </p>
          <br />
          <p>
            Bí thích ngồi trước lò sưởi, thưởng thức cốc chocolate nóng và bánh
            quy gừng cùng người mà Bí yêu
          </p>
        </div>
      </div>
      <div className="product-img">
        <img
          src={Bi}
          alt="Bi"
          className="pc"
          style={{ height: "300px", position: "relative" }}
        />
        <img
          src={Bi}
          alt="Bi"
          className="tb"
          style={{ height: "300px", position: "relative" }}
        />
        <img
          src={Bi}
          alt="Bi"
          className="mb"
          style={{ height: "300px", position: "relative" }}
        />
        <img
          src={Bi_element_1}
          alt="bi-element-1"
          className="bi-element-1"
          style={{
            height: "70px",
            position: "absolute",
            top: "175px",
            left: "300px",
            zIndex: "-1",
            transform: "rotate(0deg)",
          }}
        />
        <img
          src={Bi_element_2}
          alt="bi-element-2"
          className="bi-element-2"
          style={{
            height: "80px",
            position: "absolute",
            top: "20px",
            left: "400px",
            zIndex: "-1",
            transform: "rotate(-40deg)",
          }}
        />
        <img
          src={Bi_element_3}
          alt="bi-element-3"
          className="bi-element-3"
          style={{
            height: "70px",
            position: "absolute",
            top: "20px",
            left: "200px",
            transform: "rotate(-30deg)",
          }}
        />
        <img
          src={Bi_element_4}
          alt="bi-element-4"
          className="bi-element-4 pc"
          style={{
            height: "120px",
            position: "absolute",
            top: "200px",
            left: "850px",
            transform: "rotate(30deg)",
          }}
        />
        <img
          src={Bi_element_4}
          alt="bi-element-4"
          className="bi-element-4 tb"
          style={{
            height: "120px",
            position: "absolute",
            top: "200px",
            left: "700px",
            transform: "rotate(30deg)",
          }}
        />
      </div>
    </div>
  );
}

export default BiDetail;
