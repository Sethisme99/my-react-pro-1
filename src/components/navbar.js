import React from "react";
import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar =()=>{
return(
     <div className="navbar">
          <div className="links">
               <Link to="/">Store</Link>
               <Link to="/contact">Contact</Link>
               <Link to="/cart">Cart</Link>
          </div>
     </div>
);
}