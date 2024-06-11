import React, {useContext} from "react";
import { StoreContext } from "../../context/store-function";

export const CartItem =(storeprops)=>{
     const {id, productName, price, productImage} = storeprops.data;
     const {cartItems, addToCart, removeCart, updateCartItemCount} = useContext(StoreContext);
     
     return(
          <div className="cartItem">
               <img src={productImage} alt="" />
               <div className="description">
                    <p>
                         <b>{productName}</b>
                    </p>
                    <p>${price}</p>
                    <div className="countHandler">
                    <button onClick={()=>removeCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={()=> addToCart(id)}>+</button>
               </div>
               </div>
          </div>
     );
};