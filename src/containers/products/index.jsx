import React from 'react'
import Rasm from '../../assets/Screenshot_1.png'
import Rasm2 from '../../assets/Screenshot_2.png'
import Rasm3 from '../../assets/Screenshot_3.png'
import './style.css'

const index = () => {
  return (
    <div className='product'>
      <h3 className='matn'>SHOP PRODUCTS</h3>
      <h1 className='matn2'>Open 24/7/365.</h1>
      <div className='products'>
        <div className='pro'>
            <img src={Rasm} alt="" className='rasm'/>
            <h2 className='matn3'>White Tent</h2>
            <h3 className='matn4'>$ 200.00 USD</h3>
            <button className='tugma'>Details</button>
        </div>
        <div className='pro'>
            <img src={Rasm2} alt="" className='rasm'/>
            <h2 className='matn3'>Tin Coffee Tumber</h2>
            <h3 className='matn4'>$ 35.00 USD</h3>
            <button className='tugma'>Details</button>
        </div>
        <div className='pro'>
            <img src={Rasm3} alt="" className='rasm'/>
            <h2 className='matn3'>Blue Canvas Pack</h2>
            <h3 className='matn4'>$ 95.00 USD</h3>
            <button className='tugma'>Details</button>
        </div>
      </div>
      <div className='tugma3'>
        <button className='tugma2'>View All Poducts</button>
      </div>
    </div>
  )
}

export default index;
