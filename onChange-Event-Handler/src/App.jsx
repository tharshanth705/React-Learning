// onChange = event handdler used primarily with form elements 
//           export.<input> , <textarea> , <select> <radio> 
//             triggers a function every time the value of the input changes 

import React, { useState } from "react";
import { use } from "react";

function App() {
  const [name, setname] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setCommemt] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");



  function handleNameChange(event) {
    setname(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setCommemt(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }


  return (

    <div>
      <input value={name} onChange={handleNameChange} />
      <p>name : {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity : {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery Instructions" />
      <p>Commnet : {comment}</p>

      <select value={payment} onChange={handlePaymentChange} >
        <option value="" > Select an option</option>
        <option value="VISA"> Visa</option>
        <option value="MasterCard"> MasterCard </option>
        <option value="GiftCard"> GiftCard</option>
      </select>
      <p>Payment : {payment} </p>

      <label>
        <input value="Pick up" type="radio"
          checked={shipping === "Pick up"}
          onChange={handleShippingChange} />

        Pick Up
      </label>
      <br />

      <label>
        <input value="Delivery" type="radio"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange} />
        Delivery
      </label>

      <p>
        Shipping : {shipping}
      </p>
    </div>
  );
}
export default App