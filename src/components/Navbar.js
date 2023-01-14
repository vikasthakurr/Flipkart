import React from 'react'
import './Navbar.css';

const Navbar = () => {
   return (
      <div className="header">
         <div className="header_first">
            <h1>Flip<span>kart</span></h1>
            <div className="header_first1">
               <span>Explore</span><span>Plus</span>
            </div>
         </div>
         <div className="header_second">
            <input type="text" placeholder="Enter Product to search..."/>
            <button className='submit-btn'>Search</button>
         </div>
         <div className="header_third">
            <button className='login-btn'>Login</button>
         </div>
         <div className="header_fourth">
            <p>Become a seller</p>
         </div>
         <div className="header_fifth">
            <p>Basket</p>
         </div>
      </div>
   )
}

export default Navbar