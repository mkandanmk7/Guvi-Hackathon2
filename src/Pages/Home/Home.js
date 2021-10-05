import React from "react";

import { useState } from "react";
import Header from "../../Components/Header";

import Products from "../Products/Products";

import "./Home.css";

const Home = () => {
  //initialization:

  const [items] = useState([
    {
      name: "Toy",
      price: "₹100",
      addedToCart: false,
    },
    {
      name: "Mouse",
      price: "₹700",
      addedToCart: false,
    },
    {
      name: "Keyboard",
      price: "₹1500",
      addedToCart: false,
    },
    {
      name: "HeadPhone",
      price: "₹9000",
      addedToCart: false,
    },
  ]);
  // cart Count details:

  const [cart, setCart] = useState(0); //by default cart value is 0;

  // call back () will call by child with child to parent passing data;

  const Child = (data, name) => {
    setCart(cart + data);
    console.log(name);
    items.map((item) => {
      if (name === item.name) {
        item.addedToCart = !item.addedToCart;
      }
      return item;
    });
    console.log(items);
  };

  return (
    <div className="App">
      {/* <Header cartCount={cart} /> */}
      <div className="cardContainer">
        {items.map((item, index) => {
          return <Products key={index} value={item} parent={Child} />;
        })}
      </div>
    </div>
  );
};

export default Home;
