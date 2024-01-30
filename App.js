import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import React, { useState } from "react";
import Footer from "./components/Footer.js";
import Additem from "./components/Additem";

function App() {
  const products = [
    {
      price: 156900,
      name: "iPhone 15 Pro Max",
      quantity: 0,
    },{
      price: 79999,
      name: "Samsung Galaxy 5G ",
      quantity: 0,
    },
    {
      price: 32499,
      name: "vivo V29 5G",
      quantity: 0,
    },
    {
      price: 44999,
      name: "OnePlus 11R 5G ",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const DecrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetData = (index) => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name,price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Additem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          DecrementQuantity={DecrementQuantity}
          removeItem={removeItem}
        />
        <Footer totalAmount={totalAmount} resetData={resetData} />
      </main>
    </>
  );
}

export default App;
