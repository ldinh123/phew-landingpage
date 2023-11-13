import React from "react";
import "./advice.css";
import adv1 from "../../assets/advice1.png";
import adv2 from "../../assets/advice2.png";
import adv3 from "../../assets/advice3.png";
import adv4 from "../../assets/advice4.png";
import adv5 from "../../assets/advice5.png";
import adv_content_1 from "../../assets/advice-content-1.png";
import adv_content_2 from "../../assets/17.png";
import adv_content_3 from "../../assets/16.png";
import adv_content_4 from "../../assets/advice-content-2.png";
import adv_content_5 from "../../assets/advice-content-3.png";
import adv_content_6 from "../../assets/advice-content-4.png";
import adv_content_7 from "../../assets/advice-content-5.png";
import adv_content_8 from "../../assets/1.png";
import adv_content_9 from "../../assets/lp6.png";

const Advice = () => {
  return (
    <div className="advice">
      <div className="advice-title">
        <h1>Dùng phew an toàn bạn nha</h1>
      </div>
      <div className="advice-content">
        <div className="advice-content-tl">
          <img
            src={adv1}
            alt="advice-1"
            className="pc"
            style={{
              height: "150px",
              position: "absolute",
              top: "100px",
              right: "-800px",
              transform: "rotate(-15deg)",
            }}
          />
          <img
            src={adv1}
            alt="advice-1"
            className="tb"
            style={{
              height: "100px",
              position: "absolute",
              top: "100px",
              right: "-500px",
              transform: "rotate(-15deg)",
            }}
          />
          <img
            src={adv1}
            alt="advice-1"
            className="mb"
            style={{
              height: "90px",
              position: "absolute",
              top: "100px",
              right: "0",
              transform: "rotate(0deg)",
            }}
          />
          <img
            src={adv_content_1}
            alt="advice-content-1"
            className="pc"
            style={{
              height: "300px",
              position: "absolute",
              top: "250px",
              right: "-750px",
            }}
          />
          <img
            src={adv_content_1}
            alt="advice-content-1"
            className="tb"
            style={{
              height: "200px",
              position: "absolute",
              top: "200px",
              right: "-550px",
            }}
          />
          <img
            src={adv_content_2}
            alt="advice-content-2"
            className="pc"
            style={{
              height: "200px",
              position: "absolute",
              top: "450px",
              right: "-300px",
            }}
          />
          <img
            src={adv_content_2}
            alt="advice-content-2"
            className="tb"
            style={{
              height: "150px",
              position: "absolute",
              top: "350px",
              right: "-200px",
            }}
          />
        </div>
        <div className="advice-content-tr">
          <img
            src={adv2}
            alt="advice-2"
            className="pc"
            style={{
              height: "400px",
              position: "absolute",
              top: "50px",
              right: "-1300px",
            }}
          />
          <img
            src={adv2}
            alt="advice-2"
            className="tb"
            style={{
              height: "300px",
              position: "absolute",
              top: "100px",
              right: "-950px",
            }}
          />
          <img
            src={adv2}
            alt="advice-2"
            className="mb"
            style={{
              height: "400px",
              position: "absolute",
              top: "50px",
              right: "-1300px",
            }}
          />
          <img
            src={adv_content_3}
            alt="advice-content-3"
            className="pc"
            style={{
              height: "140px",
              position: "absolute",
              top: "370px",
              right: "-800px",
              transform: "rotate(-30deg)",
            }}
          />
          <img
            src={adv_content_3}
            alt="advice-content-3"
            className="tb"
            style={{
              height: "120px",
              position: "absolute",
              top: "300px",
              right: "-600px",
              transform: "rotate(-30deg)",
            }}
          />
          <img
            src={adv_content_4}
            alt="advice-content-4"
            className="pc"
            style={{
              height: "100px",
              position: "absolute",
              top: "20px",
              right: "-1300px",
            }}
          />
          <img
            src={adv_content_4}
            alt="advice-content-4"
            className="tb"
            style={{
              height: "75px",
              position: "absolute",
              top: "70px",
              right: "-950px",
            }}
          />
        </div>
        <div className="advice-content-bl">
          <img
            src={adv4}
            alt="advice-4"
            className="pc"
            style={{
              height: "550px",
              position: "absolute",
              top: "640px",
              right: "-650px",
            }}
          />
          <img
            src={adv4}
            alt="advice-4"
            className="tb"
            style={{
              height: "400px",
              position: "absolute",
              top: "500px",
              right: "-550px",
            }}
          />
          <img
            src={adv4}
            alt="advice-4"
            className="mb"
            style={{
              height: "200px",
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
          />
          <img
            src={adv_content_7}
            alt="advice-content-7"
            className="pc"
            style={{
              height: "80px",
              position: "absolute",
              top: "900px",
              left: "700px",
            }}
          />
          <img
            src={adv_content_7}
            alt="advice-content-7"
            className="tb"
            style={{
              height: "60px",
              position: "absolute",
              top: "650px",
              left: "550px",
            }}
          />
          <img
            src={adv_content_8}
            alt="advice-content-8"
            className="pc"
            style={{
              height: "150px",
              position: "absolute",
              top: "700px",
              left: "700px",
              transform: "rotate(90deg)",
            }}
          />
          <img
            src={adv_content_8}
            alt="advice-content-8"
            className="tb"
            style={{
              height: "100px",
              position: "absolute",
              top: "450px",
              left: "550px",
              transform: "rotate(90deg)",
            }}
          />
          <img
            src={adv_content_9}
            alt="advice-content-9"
            className="pc"
            style={{
              height: "250px",
              position: "absolute",
              top: "500px",
              left: "500px",
            }}
          />
          <img
            src={adv_content_9}
            alt="advice-content-9"
            className="tb"
            style={{
              height: "150px",
              position: "absolute",
              top: "400px",
              left: "400px",
            }}
          />
        </div>
        <div className="advice-content-br">
          <img
            src={adv3}
            alt="advice-3"
            className="pc"
            style={{
              height: "400px",
              position: "absolute",
              top: "500px",
              right: "-1300px",
              transform: "rotate(25deg)",
            }}
          />
          <img
            src={adv3}
            alt="advice-3"
            className="tb"
            style={{
              height: "300px",
              position: "absolute",
              top: "400px",
              right: "-1000px",
              transform: "rotate(25deg)",
            }}
          />
          <img
            src={adv3}
            alt="advice-3"
            className="mb"
            style={{
              height: "400px",
              position: "absolute",
              top: "500px",
              right: "-1300px",
              transform: "rotate(25deg)",
            }}
          />
          <img
            src={adv5}
            alt="advice-5"
            className="pc"
            style={{
              height: "400px",
              position: "absolute",
              top: "900px",
              right: "-1100px",
            }}
          />
          <img
            src={adv5}
            alt="advice-5"
            className="tb"
            style={{
              height: "300px",
              position: "absolute",
              top: "650px",
              right: "-1000px",
            }}
          />
          <img
            src={adv5}
            alt="advice-5"
            className="mb"
            style={{
              height: "400px",
              position: "absolute",
              top: "900px",
              right: "-1100px",
            }}
          />
          <img
            src={adv_content_5}
            alt="advice-content-5"
            className="pc"
            style={{
              height: "200px",
              position: "absolute",
              top: "360px",
              right: "-1100px",
              transform: "rotate(150deg)",
            }}
          />
          <img
            src={adv_content_5}
            alt="advice-content-5"
            className="tb"
            style={{
              height: "100px",
              position: "absolute",
              top: "340px",
              right: "-800px",
              transform: "rotate(150deg)",
            }}
          />
          <img
            src={adv_content_6}
            alt="advice-content-6"
            className="pc"
            style={{
              height: "300px",
              position: "absolute",
              top: "350px",
              right: "-1400px",
            }}
          />
          <img
            src={adv_content_6}
            alt="advice-content-6"
            className="tb"
            style={{
              height: "200px",
              position: "absolute",
              top: "320px",
              right: "-1000px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Advice;
