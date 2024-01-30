import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn bg-secondary text-white border border-black"
            onClick={() => {
              props.DecrementQuantity(props.index);
            }}
          >
          -
          </button>
          <button type="button" className="btn bg-light text-dark border border-black">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn bg-secondary text-white border border-black"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-3">
        {props.product.price * props.product.quantity}
      </div>
      <button
        className="col-1 btn bg-dark text-white border border-black"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
