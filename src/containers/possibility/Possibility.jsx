import React, { useEffect } from "react";
import "./possibility.css";
import test_1 from "../../assets/test1.jpg";
import test_2 from "../../assets/test2.jpg";
import test_3 from "../../assets/test3.jpg";
import test_4 from "../../assets/test4.jpg";
import test_5 from "../../assets/test5.jpg";

function Possibility() {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper-possibility");
    const carousel = document.querySelector(".carousel-possibility");
    const firstCardWidth =
      carousel.querySelector(".card-possibility").offsetWidth;
    const arrowBtn = document.querySelectorAll(".wrapper-possibility i");
    const carouselChildren = [...carousel.children];

    console.log("possibilty", wrapper);

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
    <div className="possibility">
      <div className="possibility-title">
        <h1>OOPS! PHEW HẾT THÌ LÀM SAO</h1>
      </div>
      <div class="wrapper-possibility">
        <ul class="carousel-possibility">
          <li class="card-possibility">
            <div className="mam">
              <h2>Refill</h2>
              <span>
                Để tận dụng cốc đã hết, cậu có thể <i>re-phew</i> với các lõi
                nến khác
              </span>
            </div>
          </li>
          <li class="card-possibility">
            <div class="img">
              <img src={test_1} alt="img" draggable="false"></img>
            </div>
          </li>
          <li class="card-possibility">
            <div class="img">
              <img src={test_2} alt="img" draggable="false"></img>
            </div>
          </li>
          <li class="card-possibility">
            <div class="img">
              <img src={test_3} alt="img" draggable="false"></img>
            </div>
          </li>
          <li class="card-possibility">
            <div class="img">
              <img src={test_4} alt="img" draggable="false"></img>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Possibility;
