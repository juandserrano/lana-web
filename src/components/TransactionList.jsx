import React, { useEffect, useState } from "react";
import Transaction from "./Transaction.jsx"

const TransactionList = () => {

  const [transactions, setTransactions] = useState([{}])

  useEffect(async () => {
    try {
      let response = await fetch('http://localhost:3003/api/transactions');
      let data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }, []);

  return (
    <ul>
      {transactions.map(t => 
        <li key={t.name+t.vendor}>
          <Transaction t={t}/>
        </li>
      )}
    </ul>
  )
}

export default TransactionList;
