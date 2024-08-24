import React from "react";
import "./O_Card.css";
const O_Card = ({
  Order = "#021",
  Table = "T2",
  Token = "Token-7",
  Instruction = "Add extra cheese",
  item1 = "Veg Pizza",
  item2 = "Pasia",
  price = 350,
  Qty = "1",
}) => {
  return (
    <>
      <section className="card_sect1">
        <main>
          <div className="flex">
            <div>
              <div className="flex familys">
                <div className="TbStyle"> {Table}</div>
                <div className="token">
                  <p>{Token}</p>
                </div>
              </div>
              <div className="head_Order">
                <p>Order {Order}</p>
              </div>
            </div>
            <div>
              <p className="Din">Dine in</p>
              <div className="flex dopd">
                <p className="dot"></p>
                <p className="pending">Not Paid</p>
              </div>
            </div>
          </div>
          <div className="flex instruct">
            <p className="ins">Instructions</p>
            <p className="ins_value">{Instruction}</p>
          </div>
          <div className="class">
          <div className="flex item_v">
            <p className="item_h1 ">Items</p>
            <p className="ins">Qty</p>
            <p className="pr_val">Price</p>
          </div>
          <div className="flex item_v1">
            <p>{item1}</p>
            <p>{Qty}</p>
            <p>₹{price}</p>
          </div>
          <div className="flex item_v2">
            <p>{item2}</p>
            <p className="Qty_2">{Qty}</p>
            <p>₹{price}</p>
          </div>
          <div className="flex item_v3">
            <p className="amount">Total Amount</p>
            <p className="TQty">-</p>
            <p className="price_t">₹{price + price}</p>
          </div>
          <div className="flex item_v4">
            <p className="amount">Remaining Amount</p>
            <p className="price_t">-</p>
            <p className="price_t">₹{price + price}</p>
          </div>
          <div className="V_items">
          <div className="V_item ">
            <div className="imgs"><img src="Image/view_item.png" className="V_image" alt="" /></div>
            <p className="v_txt">View Items</p>
          </div>
          <div className="print_i">
            <div className="imgs"><img src="Image/invoice.png" className="V_image" alt="" /></div>
            <p className="v_txt">Print Invoice</p>
          </div>
          </div>
          <div className="V_items2">
          <div className=" View_i2">
            <div className="imgs2"><img src="Image/profile.png" className="V_image" alt="" /></div>
            <p className="v_txt">Enter Customer Info</p>
          </div>
          <div className="print_i">
            <div className="imgs"><img src="Image/invoice.png" className="V_image" alt="" /></div>
            <p className="v_txt">Print Invoice</p>
          </div>
          </div>
          <div className="p_opt">

          <p>payment options</p>
          </div>
          <div className="V_items">
          <div className="pay_opt">

            <p className="pay_txt">Accept Cash Before</p>
          </div>
          <div className="pay_opt2">
            <p className="  pay_txt">Pay Later</p>
          </div>
          </div>
         
          </div>
         
        </main>
      </section>
    </>
  );
};

export default O_Card;
