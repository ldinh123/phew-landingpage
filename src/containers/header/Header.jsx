import React from "react";
import element1 from "../../assets/1.png";
import element10 from "../../assets/10.png";
import element12 from "../../assets/12.png";
import element13 from "../../assets/13.png";
import element14 from "../../assets/14.png";
import element15 from "../../assets/15.png";
import element16 from "../../assets/16.png";
import element17 from "../../assets/17.png";
import element18 from "../../assets/18.png";
import element20 from "../../assets/20.png";
import element3 from "../../assets/3.png";
import element4 from "../../assets/4.png";
import element5 from "../../assets/5.png";
import element7 from "../../assets/7.png";
import element8 from "../../assets/8.png";
import element9 from "../../assets/9.png";
import "./header.css";

const Header = () => {
  return (
    <div className="phew-header">
      <div className="phew-header-title">
        <p>Take a phew !</p>
      </div>
      <div className="phew-header-container">
        <div className="element-l">
          <div className="element1">
            <img src={element1} alt="elm-1" style={{ height: "190px" }} />
          </div>
          <div className="element3">
            <img src={element3} alt="elm-3" style={{ height: "200px" }} />
          </div>
          <div className="element4">
            <img src={element4} alt="elm-4" style={{ height: "100px" }} />
          </div>
          <div className="element5">
            <img src={element5} alt="elm-5" style={{ height: "200px" }} />
          </div>
          <div className="element13">
            <img src={element13} alt="elm-13" style={{ height: "120px" }} />
          </div>
          <div className="element14">
            <img src={element14} alt="elm-14" style={{ height: "200px" }} />
          </div>
          <div className="element17">
            <img src={element17} alt="elm-17" style={{ height: "120px" }} />
          </div>
          <div className="element18">
            <img src={element18} alt="elm-18" style={{ height: "140px" }} />
          </div>
        </div>
        <div className="element-r">
          <div className="element7">
            <img src={element7} alt="elm-7" style={{ height: "125px" }} />
          </div>
          <div className="element8">
            <img src={element8} alt="elm-8" style={{ height: "265px" }} />
          </div>
          <div className="element9">
            <img src={element9} alt="elm-9" style={{ height: "190px" }} />
          </div>
          <div className="element10">
            <img src={element10} alt="elm-10" style={{ height: "70px" }} />
          </div>
          <div className="element12">
            <img src={element12} alt="elm-12" style={{ height: "150px" }} />
          </div>

          <div className="element15">
            <img src={element15} alt="elm-15" style={{ height: "150px" }} />
          </div>
          <div className="element16">
            <img src={element16} alt="elm-16" style={{ height: "180px" }} />
          </div>
          <div className="element20">
            <img src={element20} alt="elm-20" style={{ height: "200px" }} />
          </div>
        </div>
        {/* <div className="element2">
          <img src={element2} alt="elm-2" style={{ height: "150px" }} />
        </div> */}

        {/* <div className="element6">
          <img src={element6} alt="elm-6" style={{ height: "150px" }} />
        </div> */}

        {/* <div className="element11">
          <img src={element11} alt="elm-11" style={{ height: "150px" }} />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
