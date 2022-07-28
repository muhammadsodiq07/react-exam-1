import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import category from './Category';

function Categories() {
  return (
    <section className="category">
      <div className="container">
        <h3 className="category__title">Top Categories</h3>
        <Splide
          options={{
          perPage: 6,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '1rem'
        }}>
        {category.map(item => {
          return (
            <SplideSlide key={item.id}>
              <Link className="category__link" to='/'>
                <div className="category__card">
                <img className="category__img" src={item.img} alt="apple" />
                <h3 className="category__text">{item.category_name}</h3>
                </div>
              </Link>
            </SplideSlide>
          )
        })}
        </Splide>
      </div>
    </section>
  );
}

export default Categories;