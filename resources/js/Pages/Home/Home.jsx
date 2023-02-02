import React, { useState } from 'react';
// import sections
import Hero from '../../components/sections/Hero';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Cart from "../../components/layout/partials/Cart/Cart";
import CartProvider from "../../store/CartProvider";
import LayoutDefault from "../../layouts/LayoutDefault";
const Home = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (<>
    <LayoutDefault>
      <Hero className="illustration-section-01" />
    </LayoutDefault>
  </>)

};


export default Home;