import React, { useState } from "react";
import './Card.css';

function Card() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState("");
  const [vendor, setVendor] = useState("");

  /* Handlers */
  const handleAdd = () => {
    alert(name) 
  }
  
return (
  <div className="card">
    <h5>Name:</h5>
  <input type="text" onChange={(e) => setName(e.target.value)}/>
    <h5>Amount:</h5>
  <input type="text" onChange={(e) => setAmount(e.target.value)}/>
    <h5>Date:</h5>
  <input type="text" onChange={(e) => setDate(e.target.value)}/>
    <h5>Vendor:</h5>
  <input type="text" onChange={(e) => setVendor(e.target.value)}/>
  <button onClick={handleAdd}>Add</button>
  </div>
)
}

export default Card
