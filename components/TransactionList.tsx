import { useEffect, useState } from "react";
import Transaction from "./Transaction";
import { transaction } from "../types/index"

const TransactionList = () => {

  const [transactions, setTransactions] = useState<Array<transaction>>([])

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
        <li key={t.uuid}>
          <Transaction transaction={t}/>
        </li>
      )}
    </ul>
  )
}

export default TransactionList;
