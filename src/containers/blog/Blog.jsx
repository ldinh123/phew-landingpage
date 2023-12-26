import React from "react";
import "./blog.css";
import blog from "../../assets/blog.png";
import img_1 from "../../assets/18.png";
import img_2 from "../../assets/17.png";
import img_3 from "../../assets/1.png";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-img">
        <img src={blog} alt="blog" />
      </div>
      <div className="blog-text">
        <p>Tại đây, Phew có trải nghiệm nến lạ.</p>
        <p>Phew tinh nghịch, lạ lẫm và không ngại khác biệt. </p>
      </div>
      <div className="blog-content">
        <ul class="blog-item">
          <li class="card">
            <div class="img" id="item-1">
              <img
                src={img_1}
                alt="img_1"
                style={{
                  height: "120px",
                  transform: "rotate(270deg)",
                  position: "absolute",
                  zIndex: 1,
                  left: "330px",
                  top: "120px",
                }}
              />
            </div>
            <h2>Phew thơm</h2>
            <span>
              Chúng mình tạo điểm nhấn <br /> qua mùi hương tinh tế
            </span>
            <div className="yellow-rect"></div>
          </li>
          <li class="card">
            <div class="img" id="item-2">
              <img
                src={img_2}
                alt="img_2"
                style={{
                  height: "120px",
                  transform: "rotate(0deg)",
                  position: "absolute",
                  zIndex: 1,
                  left: "780px",
                  top: "120px",
                }}
              />
            </div>
            <h2>Phew an toàn</h2>
            <span>
              Chúng mình sử dụng toàn <br /> bộ là sản phẩm tự nhiên, <br />{" "}
              không gây hại cho sức <br /> khoẻ, an toàn với cả thú <br />
              cưng
            </span>
            <div className="brown-rect"></div>
          </li>
          <li class="card">
            <div class="img" id="item-3">
              <img
                src={img_3}
                alt="img_3"
                style={{
                  height: "120px",
                  transform: "rotate(90deg)",
                  position: "absolute",
                  zIndex: 1,
                  left: "1190px",
                  top: "120px",
                }}
              />
            </div>
            <h2>Phew trách nhiệm</h2>
            <span>
              Cốc nến có thể thay lõi, <br /> trồng cây và toàn bộ <br /> bao bì
              đều được tối <br />
              giản để giảm xả thải vì <br /> chúng mình cũng muốn <br /> môi
              trường đẹp xinh.
            </span>
            <div className="orange-rect"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
