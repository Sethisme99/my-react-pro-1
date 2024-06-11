import React, {useContext, useState} from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { StoreContext } from"../../context/store-function";
import "./detail.css";

export const ViewDetails =()=>{
     const {id} = useParams();
     const detail = PRODUCTS.find((item)=> item.id === parseInt(id));
     const {productName, price, productImage, size} = detail;
     const {cartItems, addToCart, removeCart} = useContext(StoreContext);
     const cartItemAmount = cartItems[id];

     const [selectedsize, setsize] = useState('');
     const handlesizeChange = (event) =>{
          setsize(event.target.value);
          alert("Selected size: " + event.target.options[event.target.selectedIndex].text);
     }


     if(!detail){
          return(
          <section>
               loading...
          </section> 
          )
     }else{
          return(
               <section>
                    <div className="pagination">
                         <p>Home / Shop</p>
                    </div>
                    {/*product section*/}
                    <section className="product-container">
                    {/*left side*/}
                    <div className="img-card">
                         <img src={productImage} alt="" />
                         {/*small product images*/}
                         <div className="small-Card">
                              <img src={productImage} alt="" />
                              <img src={productImage} alt="" />
                              <img src={productImage} alt="" />
                              <img src={productImage} alt="" />
                         </div>
                    </div>
                    {/*Right side*/}
                    <div className="product-info">
                         <h3>{productName}</h3>
                         <h5>{price}</h5>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eligendi incidunt veritatis alias dignissimos! Incidunt laborum iure eum quia. Dolorum voluptate quo quos iste inventore tempore illum nulla in eius?</p>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eligendi incidunt veritatis alias dignissimos! Incidunt laborum iure eum quia. Dolorum voluptate quo quos iste inventore tempore illum nulla in eius?</p>
     
                         <div className="sizes">
                              <p>sizes:</p>
                              <select name="size" id="size" className="size-option" onChange={handlesizeChange} value={selectedsize}>
                                   {/*<option value="xl">XL</option>
                                   <option value="l">L</option>
                                   <option value="m">Medium</option>*/}
                                   <option value="">Select Size</option>
                                   <option value="xl">{size.xl}</option>
                                   <option value="l">{size.l}</option>
                                   <option value="m">{size.m}</option>
                              </select>
                         </div>
     
                         <div className="quantity">
                              <button onClick={()=> removeCart(id)}>Remove</button>
                              <button onClick={()=> addToCart(id)}>
                                   Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                         </div>
     
                         <div>
                              <p>Delivery:</p>
                              <p>Free standard shipping on orders over $35 before tax, plus free returns.</p>
                              <div className="delivery">
                                   <p>TYPE</p> <p>HOW LONG</p> <p>HOW MUCH</p>
                              </div>
                              <hr />
                              <div className="delivery">
                                   <p>Standard delivery</p>
                                   <p>1-4 business days</p>
                                   <p>$4.50</p>
                              </div>
                              <hr />
                              <div className="delivery">
                                   <p>Express delivery</p>
                                   <p>1 business day</p>
                                   <p>$10.00</p>
                              </div>
                              <hr />
                              <div className="delivery">
                                   <p>Pick up in store</p>
                                   <p>1-3 business days</p>
                                   <p>Free</p>
                              </div>
                         </div>
                    </div>
                    </section>
               </section>
          );
     }


}