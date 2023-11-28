import { React, useEffect } from "react";
import "./feature.css";
import Mam from "../../assets/mam.png";
import Bong from "../../assets/bong.png";
import Bot from "../../assets/bot.png";
import Bi from "../../assets/bi.png";
import Nau from "../../assets/nau.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Feature() {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtn = document.querySelectorAll(".wrapper i");
    const carouselChildren = [...carousel.children];

    console.log(wrapper);

    let isDragging = false,
      isAutoPlay = true,
      startX,
      startScrollLeft,
      timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildren
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildren.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft +=
          btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return; // if isDragging is false return from here
      // Updates the scroll position of the carousel based on the cursor movement
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
      // If the carousel is at the beginning, scroll to the end
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }

      // Clear existing timeout & start autoplay if mouse is not hovering over carousel
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
      // Autoplay the carousel after every 2500 ms
      timeoutId = setTimeout(
        () => (carousel.scrollLeft += firstCardWidth),
        2500
      );
    };
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
  }, []);

  return (
    <div className="phew-feature">
      <div className="phew-feature-title">
        <p>Sản Phẩm</p>
        <div className="phew-feature-text">
          <p>
            What is
            <b>
              <i>your</i>
            </b>
            phew?
          </p>
        </div>
      </div>
      <div class="wrapper">
        <i>
          <FaChevronLeft />
        </i>
        <ul class="carousel">
          <li class="card">
            <div class="img" id="mam">
              <img src={Mam} alt="img" draggable="false"></img>
            </div>
            <h2 id="h2-mam">Mầm</h2>
            <span>Mùi hương của cây cối, của căn nhà gỗ trong rừng</span>
          </li>
          <li class="card">
            <div class="img" id="bong">
              <img src={Bong} alt="img" draggable="false"></img>
            </div>
            <h2>Bông</h2>
            <span>Mùi hương ngọt ngào, nhẹ dịu tận hưởng khu vườn đầy hoa</span>
          </li>
          <li class="card">
            <div class="img" id="bot">
              <img src={Bot} alt="img" draggable="false"></img>
            </div>
            <h2 id="h2-bot">Bọt</h2>
            <span>Mùi hương của muối biển, những con sóng vỗ rì rào</span>
          </li>
          <li class="card">
            <div class="img" id="bi">
              <img src={Bi} alt="img" draggable="false"></img>
            </div>
            <h2 id="h2-bi">Bí</h2>
            <span>Mùi hương của muối biển, những con sóng vỗ rì rào</span>
          </li>
          <li class="card">
            <div class="img" id="nau">
              <img src={Nau} alt="img" draggable="false"></img>
            </div>
            <h2 id="h2-nau">Nâu</h2>
            <span>Mùi hương của muối biển, những con sóng vỗ rì rào</span>
          </li>
        </ul>
        <i>
          <FaChevronRight />
        </i>
      </div>
    </div>
  );
}

export default Feature;
