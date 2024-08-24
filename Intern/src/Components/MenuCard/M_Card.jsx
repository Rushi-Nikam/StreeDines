import React, { useState } from 'react';
import Cards_menu from './Cards_menu';
import "./M_Card.css";
import Cartinfo from '../CartInfo/Cartinfo';

const M_Card = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const CustomHandler = () => {
    setCartVisible(prevState => !prevState); // Toggle the cart visibility
  };

  const closeCartHandler = () => {
    setCartVisible(false); // Function to close the cart explicitly
  };

  return (
    <>
    <section className='flex'>

    
      <main >
        <div className='V_menu familys'>
          <div>Dinner Menu</div>
        </div>
        <div className='main'>
          <Cards_menu customize={CustomHandler} />
          <Cards_menu customize={CustomHandler} />
        </div>
        <div className='main'>
          <Cards_menu customize={CustomHandler} />
          <Cards_menu customize={CustomHandler} />
        </div>
        <div className='main'>
          <Cards_menu customize={CustomHandler} />
          <Cards_menu customize={CustomHandler} />
        </div>
      </main>
        {cartVisible && <Cartinfo closeCart={closeCartHandler} />} 
        </section>
    </>
  );
};

export default M_Card;
