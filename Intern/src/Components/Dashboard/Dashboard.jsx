import React, { useState } from 'react';
import "./Dashboard.css";
import Home from '../Home/Home';
import Card_Ord from '../OrderCard/Card_Ord';

const Dashboard = () => {
  const [order, setOrder] = useState(true);
  const [all, setAll] = useState(false);

  const AllHandler = () => {
    setAll(true);
    setOrder(false); // Reset order to avoid overlap
  };

  const OrderHandler = () => {
    setOrder(true);
    setAll(false); // Reset all to avoid overlap
  };

  return (
    <>
      <section className='section1'>   
        <div className='head1 familys'>Dashboard</div>
        <div>
          <ul className='flex gap items familys bold'> 
            <li onClick={AllHandler}>
              <div className={'DashStyle1'}>All</div>
            </li>
            <li onClick={OrderHandler}>
              <div className={'DashStyle2'}>New Orders</div>
            </li>
            <li>
              <div className={'DashStyle3'}>Dine In</div>
            </li>
            <li>
              <div className={'DashStyle4'}>Take Away</div>
            </li>
            <li>
              <div className={'DashStyle5'}>Payments</div>
            </li>
          </ul>
        </div>
       
        <div>
          {all && <Home />} 
          {order && <Card_Ord />}
        </div>
      </section>
    </>
  );
}

export default Dashboard;
