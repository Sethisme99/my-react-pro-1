import React from "react";
import {PRODUCTS} from "../../products";
import {Product} from "./product";
import "./shop.css";

export const Store =()=>{

     return(
          <div className="shop">
               <div className="shopTitle">
                    <h1>Odd Store</h1>
               </div>
               <div className="products">
                    {PRODUCTS.map((product)=>(
                         <Product data={product}/>
                    ))}
               </div>
          </div>
     );
}