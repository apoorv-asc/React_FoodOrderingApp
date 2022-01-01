import React from "react";
import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [openCart,setOpenCart] = useState(false);

  const displayCart =(props)=>{
    setOpenCart((prevState)=>{
      return !prevState;
    })
  }

  return (
    <CartProvider>
      {openCart && <Cart displayCart={displayCart}/>}
      <Header displayCart={displayCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
