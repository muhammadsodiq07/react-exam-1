import React from 'react';
import './Advertising.scss';
import advert1 from '../../assets/images/add.jpg'
import advert2 from '../../assets/images/add2.jpg'
import advert3 from '../../assets/images/add3.jpg'



function Advertisement() {
  return (
    <section className='advertisement'>
      <div className='container'>
        <ul className='advertisement__list p-0'>
          <li>
            <div className='advertisement__imgWrap'>
              <img src={advert1} alt="advertImg" width='380' height='212' />
              <div className='advertisement__content'>
                <h4>Joobie <br/> Ice Cream</h4>
                <p>Sales off <span className='text-danger'>25%</span> </p>
                <button className="add__btns">Shop now</button>
              </div>
            </div>
          </li>
          <li>
            <div className='advertisement__imgWrap'>
              <img src={advert2} alt="advertImg" width='380' height='212' />
              <div className='advertisement__content'>
                <h4>Fresh <br/> Guava Juice</h4>
                <button className="add__btns">Shop now</button>
              </div>
            </div>
          </li>
          <li>
            <div className='advertisement__imgWrap'>
              <img src={advert3} alt="advertImg" width='380' height='212' />
              <div className='advertisement__content'>
                <h4>Fresh <br/> Vegetables</h4>
                <button className="add__btns">Shop now</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Advertisement