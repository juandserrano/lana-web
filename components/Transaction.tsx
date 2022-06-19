import { transaction } from "../types";

const Transaction: React.FC<{
transaction: transaction
}> = ( props ) => {
const { name, amount, vendor, category, date } = props.transaction;
  return (
      <div>
      <span className="name">{name}</span>
      <span className="amount">{amount}</span>
      <span className="vendor">{vendor}</span>
      <span className="category">{category}</span>
      <span className="date">{date}</span>
    </div>
      )
}

export default Transaction;
