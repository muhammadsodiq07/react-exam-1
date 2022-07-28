import React from 'react'
import {useLocation } from 'react-router-dom'
import fire from '../../../images/flame.png'
import Object from '../../../Data/Data'
import ProdInfoHeader from './Header'
import ProductItems from './ProductItems'

export default function ProductInfo() {

  let location = useLocation()

  return (
    <>
        <ProdInfoHeader/>
        <div className='container'>
            {Object.map((item, i)=> {
                if(item.id == location.pathname.split("/").at(-1) ) {
                    return  <li key={i+324} className='violet__item'>
                <div style={{display:'flex', flexDirection: 'column', width:'50%', height: "80vh", overflowY: "auto"}}>
                    {item.img.map((i, j) => {
                        return (<img key={j + 1236} className='violet__item-img' src={i} alt="img" />)
                    })}
                </div>
                <div className='violet__item-inner'>
                <h3 className='violet__item-name'>{item.name}</h3>
                <div style={{display:'flex', alignItems:'center'}}>
                <div className='violet__item-stars'>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                </div>
                <p className='violet__item-custom'> (1 customer review)</p>
                </div>
                <div className='violet__item-prices'>
                    <p className='violet__item-prev__price'>${item.from_price}</p>
                    <p className='violet__item-next__price'>${item.to_price}</p>
                </div>
                <div style={{display:'flex', alignItems:'center', margin: '0 0 15px 0'}}>
                    <img className='violet__item-fire' src={fire} alt="img" />
                    <p className='violet__item-last'> 15 sold in last 19 hours</p>
                </div>
                    <p className='violet__item-about'>knkaslnckncknaskcnkl</p>
                <div className='violet__item-hurry__box' style={{display:'flex', alignItems:'center', margin: '0 0 10px 0'}}>
                    <i className='bx bx-time'></i>
                    <p className='violet__item-hurry'>Hurry up! Sale end in:</p>
                </div>
                    <ul className='violet__date-list'>
                        <li className='violet__date-item'>
                            <p className='violet__date-date'>179</p>
                            <p className='violet__date-text'>days</p>
                        </li>
                        <li className='violet__date-item'>
                            <p className='violet__date-date'>09</p>
                            <p className='violet__date-text'>hours</p>
                        </li>
                        <li className='violet__date-item'>
                            <p className='violet__date-date'>39</p>
                            <p className='violet__date-text'>mins</p>
                        </li>
                        <li className='violet__date-item'>
                            <p className='violet__date-date'>00</p>
                            <p className='violet__date-text'>secs</p>
                        </li>
                    </ul>
                    <div className='violet__input-box'>
                        <p className='violet__already'>Only <span> 40 </span>item(s) left in stock. </p>
                    </div>
                    <div className='violet__range'></div>
                        <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between', width:'100%'}}>
                        <div className='violet__input-range me-2' style={{display:'flex', alignItems: 'center'}}>
                            <input className='violet__input-place' type="text" placeholder='1'/>
                            <div className='violet__range-btns'>
                                <button className='violet__range-btn'>+</button>
                                <button className='violet__range-btn'>-</button>
                            </div>
                        </div>
                        <button className='violet__item-btn' >Buy now</button>
                        <button className='violet__item-btn' >Add to Cart</button>
                        </div>
                        <ProductItems />
                </div>
            </li>
        }})}
        </div>
    </>
  )
}
