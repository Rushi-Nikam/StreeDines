import React from 'react'
import {Link} from "react-router-dom"
import "./Cartinfo.css"
const Cartinfo = ({Table="T3"}) => {
  return (
    <main className='main_container familys'>
      <div className=''>
       <div className='Cart_container'>
        <p>Cart Information</p>
       </div>
       <div className='flex'>
        <div className='btn_1'> <p>Dine In</p></div>
        <div className='btn_2'><p>Take Away</p></div>
       </div>
       <div className='details'>
        <p>Order details</p>
       </div>
       <div>
        <div className='contain'>
          <img src="Image/cocola.png" className='img_1' alt="" />
          <div className='contain_1'>
          <p>Diet Coke</p>
          <div className='contain_p'>
          <p>1x</p>
          </div>
          </div>
          <div className='_prices'>
          <p>₹80</p>
          </div>
        </div>
        <div className='contain'>
          <img src="Image/dish.png" className='img_1' alt="" />
          <div className='contain_1'>
          <p>Tandoori Chicken</p>
          <div className='contain_p'>
          <p>1x</p>
          </div>
          </div>
          <div className='_prices'>
          <p>₹180</p>
          </div>
        </div>
        <div className='contain2'>
          <div className='contain2_1'>
            <div className='contain2_h1'>
            Table Info 
            </div>
            <div className='contain2_table'>
              {Table}
            </div>
          </div>
          <div className='contain3'>
            Payment Summary 
          </div>
          <div className='contain4'>
            <div >
           Subtotal
            </div>
            <div>
              ₹ 260
            </div>
          </div>
          <div className='contain5'>
            <div >
            CGST @ 2.5%
            </div>
            <div>
              ₹ 6.05
            </div>
          </div>
          <div className='contain5'>
            <div >
            SGST @ 2.5%
            </div>
            <div>
              ₹ 6.05
            </div>
          </div>
          <div className='contain5_total'>
            <div >
           Total
            </div>
            <div className='contain5_bold'>
            ₹ 272.10
            </div>
          </div>
          <div className='contain6_total'>
            <div>
              <Link className='deco'>
              Add 2 items
              </Link>
           
            </div>
            <div className='contain6_Order'>
             Place Order
            </div>
          </div>
          
      
          </div>
       </div>
      </div>
    </main>
  )
}

export default Cartinfo
