import React, { useState } from 'react';
// import sections
import Hero from '../../components/sections/Hero';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Cart from "../../components/layout/partials/Cart/Cart";
import CartProvider from "../../store/CartProvider";
const Home = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (<>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">
        <Hero className="illustration-section-01" />
      </main>
      <Footer />
    </CartProvider>
  </>)

};


export default Home;