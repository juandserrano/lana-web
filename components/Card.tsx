import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Card() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<number>();
  const [date, setDate] = useState("");
  const [vendor, setVendor] = useState("");
  const [category, setCategory] = useState("");

  /* Handlers */
  const handleAdd = () => {
    const uuid = uuidv4();
    let transaction = {
      name,
      amount,
      date,
      vendor,
      category,
      uuid,
    };
    const data = JSON.stringify(transaction);
    axios
      .post("http://localhost:3003/api/transactions/new", data)
      .then((res) => console.log(res.data));
  };
  return (
    <div className="p-5 px-20 flex flex-col bg-timberwolf rounded-xl drop-shadow-xl h-max items-center space-y-5">
      <div className="flex w-full space-x-5">
        <div>
          <h5>Name:</h5>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h5>Amount:</h5>
          <input
            className="w-32"
            type={"number"}
            placeholder="Amount"
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <h5>Date:</h5>
          <input
            type="text"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="flex w-full space-x-5">
        <div>
          <h5>Vendor:</h5>
          <input
            type="text"
            placeholder="Vendor"
            onChange={(e) => setVendor(e.target.value)}
          />
        </div>
        <div>
          <h5>Category:</h5>
          <input
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-tan border border-tan cursor-pointer hover:border-verdigris active:scale-95 active:drop-shadow-sm drop-shadow-md rounded-xl px-3 py-1"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}
