import React from 'react';
import Product from './Product.js';

export default function ProductList(props) {
  return (
      props.productList.length > 0 ? 
      props.productList.map((product,i) => {
        return <Product product = {product} key={i} incrementQuantity = {props.incrementQuantity} index = {i} DecrementQuantity = {props.DecrementQuantity} removeItem = {props.removeItem}/>
      })
    : <h1>Your shoppping cart is empty, <a href=''className='text-decoration-none'>Pick up where you left off</a></h1>
  )
}
