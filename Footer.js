import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <div
        className="btn bg-secondary text-white col-1 border border-black"
        onClick={() => {
          props.resetData();
        }}
      >
        Reset
      </div>
      <div className="col-10 bg-dark text-white text-center border border-black">
        {props.totalAmount}
      </div>
      <div className="btn btn-primary col-1 border border-black">Pay Now</div>
    </div>
  );
}
