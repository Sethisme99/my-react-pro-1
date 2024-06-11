import React, {useContext} from "react";
import { StoreContext } from "../../context/store-function";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cartItem";
import "./cart.css"

export const Cart =()=>{
     const {cartItems, getTotalCartAmount} = useContext(StoreContext);
     const subTotal = getTotalCartAmount();
     return(
          <div className="cart">
               <div>
                    <h1>Your Items</h1>
               </div>
               <div className="cartItems">
                    {PRODUCTS.map(product => cartItems[product.id] !== 0 ? <CartItem data={product} /> : null)}
               </div>

               <div className="checkout">
                    <p>Subtotal: ${subTotal}</p>
                    <button>Checkout</button>
                    <button>Continue Shopping</button>
               </div>

          </div>
     );
}