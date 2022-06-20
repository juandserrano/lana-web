import { transaction } from "../types";

const Transaction: React.FC<{
  transaction: transaction;
}> = (props) => {
  const { name, amount, month, type } = props.transaction;
  return (
    <div className="flex virgil handbox border border-solid text-xl p-2 space-x-2 justify-around">
      <span>{name}</span>
      <span>{amount}</span>
      <span>{month}</span>
      <span>{type}</span>
    </div>
  );
};

export default Transaction;
