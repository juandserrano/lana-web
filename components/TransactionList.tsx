import { useEffect, useState } from "react";
import Transaction from "./Transaction";
import { transaction } from "../types/index";

const TransactionList = () => {
  const [transactions, setTransactions] = useState<Array<transaction>>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("http://localhost:3003/api/transactions");
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
    <ul className="bg-timberwolf p-5 flex flex-col space-y-[2px] w-10/12 rounded-xl">
      {transactions.length > 0 &&
        transactions.map((t) => (
          <li key={t.uuid}>
            <Transaction transaction={t} />
          </li>
        ))}
    </ul>
  );
};

export default TransactionList;
