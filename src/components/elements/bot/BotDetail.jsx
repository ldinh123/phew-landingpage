import React from "react";
import {
  default as Bot_element_1,
  default as Bot_element_2,
} from "../../../assets/13.png";
import Bot_element_3 from "../../../assets/8.png";
import Bot_element_4 from "../../../assets/Artboard 22@4x.png";
import Bot from "../../../assets/bot.png";
import Bot_bg from "../../../assets/lp10.png";
import "./bot.css";

BotDetail.propTypes = {};

function BotDetail(props) {
  return (
    <div className="product bot">
      <div className="product-img">
        <img
          src={Bot}
          alt="bot"
          className="pc"
          style={{ height: "200px", position: "relative" }}
        />
        <img
          src={Bot}
          alt="bot"
          className="tb"
          style={{ height: "150px", position: "relative", top: "50px" }}
        />
        <img
          src={Bot}
          alt="bot"
          className="mb"
          style={{ height: "200px", position: "relative" }}
        />
        <img
          src={Bot_bg}
          alt="bot-background"
          style={{
            height: "250px",
            position: "absolute",
            left: "-70px",
            top: "50px",
            zIndex: "-1",
          }}
        />
        <img
          src={Bot_element_1}
          alt="bot-element-1"
          className="bot-element-1"
          style={{
            height: "80px",
            position: "absolute",
            top: "0px",
            left: "450px",
            transform: "rotate(0deg)",
          }}
        />
        <img
          src={Bot_element_2}
          alt="bot-element-2"
          className="bot-element-2 pc"
          style={{
            height: "80px",
            position: "absolute",
            top: "200px",
            left: "800px",
            transform: "rotate(45deg)",
          }}
        />
        <img
          src={Bot_element_2}
          alt="bot-element-2"
          className="bot-element-2 tb"
          style={{
            height: "80px",
            position: "absolute",
            top: "200px",
            left: "600px",
            transform: "rotate(45deg)",
          }}
        />
        <img
          src={Bot_element_3}
          alt="bot-element-3"
          className="bot-element-3 pc"
          style={{
            height: "150px",
            position: "absolute",
            top: "80px",
            left: "1170px",
            transform: "rotate(0deg)",
          }}
        />
        <img
          src={Bot_element_3}
          alt="bot-element-3"
          className="bot-element-3 tb"
          style={{
            height: "150px",
            position: "absolute",
            top: "80px",
            left: "700px",
            transform: "rotate(0deg)",
          }}
        />
        <img
          src={Bot_element_4}
          alt="bot-element-4"
          className="bot-element-4"
          style={{
            height: "120px",
            position: "absolute",
            top: "200px",
            left: "200px",
            zIndex: "-1",
            transform: "rotate(240deg)",
          }}
        />
      </div>
      <div className="product-text">
        <div className="product-title">
          <h1>Bọt</h1>
        </div>
        <div className="product-content">
          <p className="content">Bọt lăn tăn và hay lo lắng.</p>
          <br />
          <p>
            Khoảnh khắc yêu thích nhất của Bọt là nằm một mình trên những viên
            đá nhỏ ven biển xanh với nắng vàng và cát trắng để thấy bình yên,
            tươi mới mà cũng sảng khoái, thư thả
          </p>
        </div>
      </div>
    </div>
  );
}

export default BotDetail;
