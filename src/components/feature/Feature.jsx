import React from 'react';
import './feature.css';

const Feature = () => {
  return (
    <div className='phew-feature'>
      <div className='phew-feature-title' >
        <h1>Sản Phẩm</h1>
        <div className='phew-feature-text'>
          <p>What is <b><i>your</i></b>  phew?</p>
        </div>
      </div>
      <div className='phew-feature-slider'>
        <section className='swiper mySwiper'>
        <div className='card swiper-slide'>
          <div class="card-swiper-slide-1">
            <div class="card__image">
            </div>
            <div class="card__content">
              <span class="card__title"><b>Mầm</b></span>
              <p class="card__text">Mùi hương của cây cối, của căn nhà gỗ trong rừng</p>
            </div>
          </div>
        </div>
        <div className='card swiper-slide'>
          <div class="card-swiper-slide-2">
            <div class="card__image">
            </div>
            <div class="card__content">
              <span class="card__title"><b>Bông</b></span>
              <p class="card__text">Mùi hương ngọt ngào, nhẹ dịu tận hưởng khu vườn đầy hoa</p>
            </div>
          </div>
        </div>
        <div className='card swiper-slide'>
          <div class="card-swiper-slide-3">
            <div class="card__image">
            </div>
            <div class="card__content">
              <span class="card__title"><b>Bọt</b></span>
              <p class="card__text">Mùi hương của muối biển, những con sóng vỗ rì rào</p>
            </div>
          </div>
        </div>
        </section>
      </div>
    </div>  
  )
}

export default Feature
