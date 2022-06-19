import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Card(){
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number>();
  const [date, setDate] = useState("");
  const [vendor, setVendor] = useState("");
  const [category, setCategory] = useState("");

  /* Handlers */
  const handleAdd = () => {
    const uuid = uuidv4()
    let transaction = {
      name,
      amount,
      date,
      vendor,
      category,
      uuid
    }
    const data = JSON.stringify(transaction)
    axios.post('http://localhost:3003/api/transactions/new', data)
    .then(res => console.log(res.data))
  }
  return (
  <div className="p-2 flex flex-col bg-indigo-300 rounded max-w-md h-max">

    <h5>Name:</h5>
  <input type="text" onChange={(e) => setName(e.target.value)}/>
    <h5>Amount:</h5>
  <input type="text" onChange={(e) => setAmount(parseFloat(e.target.value))}/>
    <h5>Date:</h5>
  <input type="text" onChange={(e) => setDate(e.target.value)}/>
    <h5>Vendor:</h5>
  <input type="text" onChange={(e) => setVendor(e.target.value)}/>
    <h5>Category:</h5>
  <input type="text" onChange={(e) => setCategory(e.target.value)}/>
  <button onClick={handleAdd}>Add</button>
  </div>
      )
}
