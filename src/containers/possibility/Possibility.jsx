import React, { useEffect } from "react";
import "./possibility.css";
import test_1 from "../../assets/test1.jpg";
import test_2 from "../../assets/test2.jpg";
import test_3 from "../../assets/test3.jpg";
import test_4 from "../../assets/test4.jpg";
import test_5 from "../../assets/test5.jpg";

function Possibility() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  });

  return (
    <div class="scroller" data-direction="right" data-speed="slow">
      <div class="scroller__inner">
        <div className="box-content">
          <h2>Refill</h2>
          <span>
            Để tận dụng cốc đã hết, cậu có thể re-phew với các lõi nến khác.
          </span>
        </div>
        <img src={test_1} alt="" />
        <img src={test_2} alt="" />
        <img src={test_3} alt="" />
        <img src={test_4} alt="" />
        <img src={test_5} alt="" />
      </div>
    </div>
  );
}

export default Possibility;
