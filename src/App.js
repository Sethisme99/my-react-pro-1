import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Store} from "./pages/store/store";
import {Contact} from "./pages/contact";
import {Cart} from "./pages/cart/cart";
import {StoreContextProvider} from "./context/store-function";
import { ViewDetails } from "./pages/store/details";
import "./App.css"
function App() {
  return (
   <div className="App">
    <StoreContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/details/:id" element={<ViewDetails />}/>
      </Routes>
    </Router>
    </StoreContextProvider>
    </div>
  );
}

export default App;
