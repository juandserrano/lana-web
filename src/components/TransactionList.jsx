import React, { useEffect, useState } from "react";
import Transaction from "./Transaction.jsx"
import "./TransactionList.css";

const TransactionList = () => {

  const [transactions, setTransactions] = useState([{}])

  useEffect(() => {
    async function fetchData(){
      try {
        let response = await fetch('http://localhost:3003/api/transactions');
        let data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.log(error);
        return { success: false };
      }
    }
    fetchData();
  }, []);

  return (
    <ul>
      {transactions.map(t => 
        <li key={t.UUID}>
          <Transaction t={t}/>
        </li>
      )}
    </ul>
  )
}

export default TransactionList;
