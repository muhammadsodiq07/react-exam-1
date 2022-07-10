import React from 'react';
import "./TopCategories.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import useStore from '../../store/store';


function TopCategories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  }

  const arr = useStore((state) => state.categoriesObj);

  return (
    <div className='category'>
      <div className="container">
        <h2 className='category__title'>
          top categories
        </h2>
        <div className='category__slider'>
          <Slider {...settings}>
            {
              arr.map((item, index) => {
                return (
                  <div key={index} className='category__item-holder'>
                    <div className='category__img-holder'>
                      <img src={item.img} alt={item.name} />
                    </div>
                    <h3 className='category__item-title'>
                      {item.name}
                    </h3>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default TopCategories




