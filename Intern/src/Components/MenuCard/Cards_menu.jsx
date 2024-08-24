import React, { useState } from 'react';
import "./Cards_Menu.css";
import Cartinfo from '../CartInfo/Cartinfo';

const Cards_menu = ({ title = "Veg Pizza", initialQty = 1, price, p, customize }) => {
  price = [100, 149, 179];
  p = ["Regular Size (8 inches)", "Medium Size (12 inches)", "Large Size (16 inches)"];

  const [qty, setQty] = useState(initialQty);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);

  const handleIncrease = () => {
    setQty(qty + 1);
  };

  const handleDecrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleCheckboxChange = (index) => {
    // If the selected checkbox is clicked again, uncheck it
    if (selectedSizeIndex === index) {
      setSelectedSizeIndex(null);
    } else {
      setSelectedSizeIndex(index);
    }
  };

  const handleCustomizeClick = () => {
    // Always call customize regardless of size selection
    customize();
  };

  return (
    <section className='container_sec'>
      <div className='Card_layout familys'>
        <div>
          <div className='card_h1'><p>{title}</p></div>
          <div className='card_check'>
            <input 
              type="checkbox" 
              name="regular" 
              checked={selectedSizeIndex === 0} 
              onChange={() => handleCheckboxChange(0)} 
            /> 
            <p>{p[0]}</p>
          </div>
          <div className='card_check'>
            <input 
              type="checkbox" 
              name="medium" 
              checked={selectedSizeIndex === 1} 
              onChange={() => handleCheckboxChange(1)} 
            /> 
            <p>{p[1]}</p>
          </div>
          <div className='card_check'>
            <input 
              type="checkbox" 
              name="large" 
              checked={selectedSizeIndex === 2} 
              onChange={() => handleCheckboxChange(2)} 
            /> 
            <p>{p[2]}</p>
          </div>
          <div className='card_check'>
            <div className='quantity'>
              <button className='btn_less' onClick={handleDecrease} disabled={selectedSizeIndex === null}>-</button>
              <p>{qty}</p>
              <button className='btn_more' onClick={handleIncrease} disabled={selectedSizeIndex === null}>+</button>
            </div>
          </div>
        </div>
        <div>
          <img src="Image/veg.png" className="veg_img" alt="" />
          <div className='p_data'>
            <div className='price_data'>
              <p>₹{price[0]}</p>
            </div>
            <div className='price_data'>
              <p>₹{price[1]}</p>
            </div>
            <div className='price_data'>
              <p>₹{price[2]}</p>
            </div>
          </div>
          <div className='Cust_btn'>
            <div onClick={handleCustomizeClick} className='flexs'>Customize</div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Cards_menu;
