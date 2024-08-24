import React from "react";
import { NavLink } from "react-router-dom";
import "./Left_sec.css";
const Left_sec = () => {
  return (
    <>
      <main className="Left_sex"> 
        <div className="logo">
          <img src="Image/image.png" alt="" />
        </div>  
        <ul>
          <NavLink to={'/dashboard'} className={'styles'}>
          <li className="Dash">
            <div className="flex alignMent Dash_back">
              <div className="Dash_img">
                <img src="Image/DashBoard.png" alt="" />
              </div>
              <div className="Dash_word familys">Dashboard</div>
            </div>
          </li>
          </NavLink>
          
          <li className="Orders">
            <div className=" flex alignMent gap">
              <img src="Image/order.png" alt="" />
              <div className="familys Oword">Orders</div>
            </div>
          </li>
          <NavLink to={'/AddOrder'} className={'styles'}>
          <li className="Cord">
            <div className="flex alignMent gap familys Oword">
              <img src="Image/CreateOrder.png" alt="" />
              Create Order
            </div>
          </li>
          </NavLink>
          <li className="Cord">
            <div className="flex alignMent gap familys Oword">
              <img src="Image/Menu.png" alt="" />
              Menu
            </div>
          </li>
          <li className="Cord">
            <div className=" flex alignMent gap">
              <img src="Image/Table.png" alt="" />
              <div className="familys Oword">Tables</div>
            </div>
          </li>
          <li className="Cord">
            <div className=" flex alignMent gap">
              <img src="Image/Emp.png" alt="" />
              <div className="familys Oword">Employees</div>
            </div>
          </li>
          <li className="Cord">
            <div className=" flex alignMent gap">
              <img src="Image/Inven.png" alt="" />
              <div className="familys Oword">Inventory</div>
            </div>
          </li>
          <li className="Cord">
            <div className=" flex alignMent gap">
              <img src="Image/Kitchen.png" alt="" />
              <div className="familys Oword">Kitchen Orders</div>
            </div>
          </li>
          <li className="Cord">
            <div className=" flex alignMent gap">
              <img src="Image/Tv.png" alt="" />
              <div className="familys Oword">Reports</div>
            </div>
          </li>
          <li className="Cord">
            <div className=" flex alignMent gap">
              <img src="Image/setting.png" alt="" />
              <div className="familys Oword">Settings</div>
            </div>
          </li>
        </ul>

<div className="Lout">
<div className=" flex alignMent gap">
              <img src="Image/Logout.png" alt="" />
              <div className="familys Oword">Logout</div>
            </div>
</div>
      </main>
    </>
  );
};

export default Left_sec;
