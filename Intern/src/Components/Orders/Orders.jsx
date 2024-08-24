import React,{ useState }    from 'react'
import "./Orders.css"

import M_Card from '../MenuCard/M_Card';
const Orders = () => {
  const [dinner,setDinner]= useState(false);
  const dinnerhandler=()=>{
    setDinner(true);
  }
  return (
    < >
    <section className='sec1'>
      <div className='familys ord '>
    

        <div className='h1'>Add Order</div>
        <div className='h2'>Thursday, 25 July 2024</div>
        <div className='h3 '><img src="Image/user.png" alt="" /><p>Shruti Bisht <span className='small'>Admin</span></p></div>
    
     
      </div>

      <div className='search '>
      <div className='search-wrapper'>
            <img src="Image/search.png" alt="search icon" className='search-icon'/>
           
            <input type="text" className='search_input'  placeholder="Search Your Menu Here"/>
         
          </div>
      </div>
      <div className='meals familys'>
        <div className='Brft'>
          <img src="Image/Break.png" alt="" />
          <div >  <div className="br_h1 ">Breakfast</div> 
          <p className="small2">05 Menu</p> </div>
        
        </div>
          <div className='Brft2'>
            <img src="Image/Lunch.png" alt="" />
            <div >  <div className="br_h1 ">Lunch</div> 
            <p className="small2">10 Menu</p> </div>
          
          </div>
          <div onClick={dinnerhandler} className='Brft2'>
            <img src="Image/dinner.png" alt="" />
            <div >  <div className="br_h1 ">Dinner</div> 
            <p className="small2">20 Menu</p> </div>
          
          </div>
          <div className='Brft2'>
            <img src="Image/dessert.png" alt="" />
            <div >  <div className="br_h1 ">Desserts</div> 
            <p className="small2">10 Menu</p> </div>
          
          </div>

      </div>
      {dinner && <M_Card/>}
    </section>


    </>
  )
}

export default Orders