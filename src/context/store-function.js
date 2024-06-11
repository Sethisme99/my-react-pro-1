import React, {createContext, useState} from "react";
import { PRODUCTS } from "../products";

export const StoreContext = createContext(null);

const DefaultCart =()=>{
     let cart = {};
     for(let i = 1; i < PRODUCTS.length+1; i++){
          cart[i] = 0;
     }
     return cart;
};


export const StoreContextProvider =(props)=>{
     const [cartItems, SetCartItems] = useState(DefaultCart());

     //Function*******************************

    // const availableSizes = Object.keys(cartItems).length > 0 ? cartItems[1].size : [];


     //ADD and Remove Cart function:
     const addToCart =(item)=>{
          SetCartItems((preItem)=> ({...preItem, [item]: preItem[item]+1}));
     };

     const removeCart =(item)=>{
         // SetCartItems((preItem)=> ({...preItem, [item]: preItem[item]-1}));
         // Check if the current quantity is greater than 0 let the function work
          if (cartItems[item] > 0) {
          SetCartItems((preItem)=> ({...preItem, [item]: preItem[item]-1}));
          };
     }

     //get total amount
     const getTotalCartAmount =()=>{
          let totalAmount = 0;
          for(const item in cartItems){
               if(cartItems[item] > 0){
                    let itemInfo = PRODUCTS.find((product)=> product.id === Number(item));
                    totalAmount += cartItems[item] * itemInfo.price;
               }
          }
          return totalAmount;
     };

     const updateCartItemCount = (newAmount, item) =>{
          SetCartItems((preItem)=>({...preItem, [item]: newAmount}));
     }


     //Function*******************************


     const contextValue = {cartItems, addToCart, removeCart, getTotalCartAmount, updateCartItemCount};
     
     return(
          <StoreContext.Provider value={contextValue}>
               {props.children}
          </StoreContext.Provider>
     );

}