import React from "react";
import ReactDOM from "react-dom/client";
import Bi from "../../assets/bi.png";
import Bong from "../../assets/bong.png";
import Bot from "../../assets/bot.png";
import right_bg from "../../assets/lp7.png";
import left_bg from "../../assets/lp8.png";
import Mam from "../../assets/mam.png";
import Nau from "../../assets/nau.png";
import BiDetail from "../../components/elements/bi/BiDetail";
import BongDetail from "../../components/elements/bong/BongDetail";
import BotDetail from "../../components/elements/bot/BotDetail";
import MamDetail from "../../components/elements/mam/MamDetail";
import NauDetail from "../../components/elements/nau/NauDetail";
import "./about.css";

const About = () => {
  const handleOnClickMam = () => {
    const display = ReactDOM.createRoot(document.getElementById("displayId"));
    display.render(<MamDetail />);
  };
  const handleOnClickBi = () => {
    const display = ReactDOM.createRoot(document.getElementById("displayId"));
    display.render(<BiDetail />);
  };
  const handleOnClickBong = () => {
    const display = ReactDOM.createRoot(document.getElementById("displayId"));
    display.render(<BongDetail />);
  };
  const handleOnClickNau = () => {
    const display = ReactDOM.createRoot(document.getElementById("displayId"));
    display.render(<NauDetail />);
  };
  const handleOnClickBot = () => {
    const display = ReactDOM.createRoot(document.getElementById("displayId"));
    display.render(<BotDetail />);
  };

  return (
    <div className="about-container">
      <div className="about-title">
        <h1>xóm phew</h1>
        <div className="about-description">
          <p>
            "Xóm" Phew bắt đầu từ những bạn nến với mùi hương khác nhau, mỗi cá
            tính riêng biệt.
          </p>
          <p>
            Xóm Phew làm những thứ xóm thấy thoải mái, đơn giản vì Xóm Phew
            thích vậy.
          </p>
          <p>Nói chung là, bạn ra sao cũng được miễn bạn thấy vui là được ^^</p>
        </div>
      </div>
      <div className="about-bg-element">
        <img
          src={left_bg}
          alt="left-bg"
          className="pc"
          style={{
            height: "950px",
            position: "relative",
            right: "100px",
            top: "-50px",
          }}
        />
        <img
          src={left_bg}
          alt=""
          className="tb"
          style={{
            height: "700px",
            position: "relative",
            right: "100px",
            top: "75px",
          }}
        />
        <img src={left_bg} alt="" className="mb" style={{ height: "600px" }} />
        <img
          src={right_bg}
          alt="right-bg"
          className="pc"
          style={{
            height: "850px",
            position: "relative",
            top: "-1000px",
            left: "760px",
            zIndex: -1,
          }}
        />
        <img
          src={right_bg}
          alt=""
          className="tb"
          style={{
            height: "600px",
            position: "relative",
            top: "-600px",
            left: "510px",
            zIndex: -1,
          }}
        />
        <img src={right_bg} alt="" className="mb" style={{ height: "500px" }} />
      </div>
      <div className="about-element">
        <img
          src={Mam}
          alt="mam"
          className="mam pc"
          onClick={handleOnClickMam}
          style={{
            height: "200px",
            position: "absolute",
            top: "-1580px",
            left: "510px",
            zIndex: "4",
            cursor: "pointer",
          }}
        />
        <img
          src={Mam}
          alt=""
          className="tb"
          style={{
            height: "150px",
            position: "absolute",
            top: "-1515px",
            left: "360px",
            zIndex: "4",
            cursor: "pointer",
          }}
        />
        <img
          src={Mam}
          alt=""
          className="mb"
          style={{
            height: "100px",
            position: "absolute",
            top: "-1530px",
            left: "510px",
            zIndex: "4",
            cursor: "pointer",
          }}
        />
        <img
          src={Bong}
          alt="bong"
          className="pc"
          onClick={handleOnClickBong}
          style={{
            height: "200px",
            position: "absolute",
            top: "-1580px",
            left: "799px",
            zIndex: "3",
            cursor: "pointer",
          }}
        />
        <img
          src={Bong}
          alt=""
          className="tb"
          style={{
            height: "170px",
            position: "absolute",
            top: "-1550px",
            left: "560px",
            zIndex: "3",
            cursor: "pointer",
          }}
        />
        <img
          src={Bong}
          alt=""
          className="mb"
          style={{
            height: "100px",
            position: "absolute",
            top: "-1530px",
            left: "799px",
            zIndex: "3",
            cursor: "pointer",
          }}
        />
        <img
          src={Bot}
          alt="bot"
          className="pc"
          onClick={handleOnClickBot}
          style={{
            height: "200px",
            position: "absolute",
            top: "-1570px",
            left: "320px",
            cursor: "pointer",
          }}
        />
        <img
          src={Bot}
          alt=""
          className="tb"
          style={{
            height: "150px",
            position: "absolute",
            top: "-1520px",
            left: "220px",
            cursor: "pointer",
          }}
        />
        <img
          src={Bot}
          alt=""
          className="mb"
          style={{
            height: "100px",
            position: "absolute",
            top: "-1520px",
            left: "320px",
            cursor: "pointer",
          }}
        />
        <img
          src={Bi}
          alt="bi"
          className="pc"
          onClick={handleOnClickBi}
          style={{
            height: "400px",
            position: "absolute",
            top: "-1700px",
            left: "570px",
            cursor: "pointer",
          }}
        />
        <img
          src={Bi}
          alt=""
          className="tb"
          style={{
            height: "300px",
            position: "absolute",
            top: "-1625px",
            left: "400px",
            cursor: "pointer",
          }}
        />
        <img
          src={Bi}
          alt=""
          className="mb"
          style={{
            height: "100px",
            position: "absolute",
            top: "-1650px",
            left: "570px",
            cursor: "pointer",
          }}
        />
        <img
          src={Nau}
          alt="nau"
          className="pc"
          onClick={handleOnClickNau}
          style={{
            height: "250px",
            position: "absolute",
            top: "-1600px",
            left: "950px",
            zIndex: "5",
            cursor: "pointer",
          }}
        />
        <img
          src={Nau}
          alt=""
          className="tb"
          style={{
            height: "210px",
            position: "absolute",
            top: "-1577px",
            left: "705px",
            zIndex: "5",
            cursor: "pointer",
          }}
        />
        <img
          src={Nau}
          alt=""
          className="mb"
          style={{
            height: "100px",
            position: "absolute",
            top: "-1550px",
            left: "950px",
            zIndex: "5",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="about-suggest">
        <p>
          <i>(Nói nhỏ: Vỗ vai tớ nếu muốn nghe tớ kể chuyện)</i>
        </p>
      </div>
      <div className="about-product">
        <div id="displayId"></div>
      </div>
      {/* 
      <div className="about-product">
        <div className="product bong">
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
                Bông mê vườn hoa có mái vòm như trong phim Violet Garden. Bông
                có dáng vẻ đôi chút yểu điệu nhưng nội tâm Bông không hề mềm
                yếu, mà kiên định, vững vàng.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-product">
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
                Bí thích ngồi trước lò sưởi, thưởng thức cốc chocolate nóng và
                bánh quy gừng cùng người mà Bí yêu
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
      </div>
      <div className="about-product">
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
                Khoảnh khắc yêu thích nhất của Bọt là nằm một mình trên những
                viên đá nhỏ ven biển xanh với nắng vàng và cát trắng để thấy
                bình yên, tươi mới mà cũng sảng khoái, thư thả
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-product">
        <div className="product mam">
          <div className="product-text">
            <div className="product-title">
              <h1>Mầm</h1>
            </div>
            <div className="product-content">
              <p className="content">Mầm thích rừng, thích cây lắm lắm</p>
              <br />
              <p>
                Đặc biệt yêu hơn là khi vào buổi sớm mát mẻ và buổi tối dịu
                dàng, Mầm hoà đồng với mọi người, cả các anh chị cây cỏ khác và
                cả ông bà cổ thụ. Mầm có thể đem đến sự mát mẻ, thoải mái cho
                bất cứ ai
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
      </div>
      <div className="about-product">
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
                Nâu thích ghé thư viện, quán cà phê (nhưng phải yên tĩnh) và góc
                học tập được bày biện gọn ghẽ vì lắm khi Nâu bị OCD.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
