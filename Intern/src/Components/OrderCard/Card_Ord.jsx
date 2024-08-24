import React from 'react';
import O_Card from './O_Card';
import "./Card_Ord.css";

const Card_Ord = () => {
  return (
    <div className="Ord_sec_wrapper">
      <section className='Ord_sec'> 
        <O_Card/>
        <O_Card item1='Veg Pizza' Table='T3' price={100} Token='Token-9' Order='#022'/>
        <O_Card/>
      </section>
      <section className='Ord_sec'>
        <O_Card/>
       
        <O_Card item1='Veg Pizza'Table='T3' Qty='2' price={200} Token='Token-9' Order='#022'/>
        <O_Card/>
      </section>
    </div>
  );
}

export default Card_Ord;

