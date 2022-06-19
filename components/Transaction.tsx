import { transaction } from "../types";

const Transaction: React.FC<{
  transaction: transaction;
}> = (props) => {
  const { name, amount, vendor, category, date } = props.transaction;
  return (
    <div className="flex virgil handbox border border-solid text-xl p-2 space-x-2 justify-around">
      <span>Juan</span>
      <span>666</span>
      <span>Newell</span>
      <span>Shopping</span>
      <span>16/03/1984</span>
    </div>
  );
};

export default Transaction;
