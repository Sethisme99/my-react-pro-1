import React, {useContext} from "react";
import { StoreContext } from "../../context/store-function";
import { Link } from "react-router-dom";
import "./shop.css";

export const Product =(props)=>{
     const {id, productName, price, productImage} = props.data;
     const {cartItems, addToCart} = useContext(StoreContext);
     const cartAmount = cartItems[id];

     return(
          <div className="product">
               <img src={productImage} alt="" />
               <div className="description">
                    <p>
                         <b>{productName}</b>
                    </p>
                    <p>${price}</p>
               </div>
               <Link className="details" to={`/details/${id}`}>View Details</Link>
               <button className="addToCartBttn" onClick={()=> addToCart(id)}
               >AddCard {cartAmount > 0 && <>({cartAmount})</>}</button>
          </div>
          
     );
}