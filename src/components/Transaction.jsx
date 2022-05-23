import React from "react";
import './Transaction.css'

const Transaction = ( { t } ) => {

  const handleDelete = (e) => {
    console.log(e)
  }
  return (
    <div>
      <span className="name">{t.Name}</span>
      <span className="amount">{t.amount}</span>
      <span className="vendor">{t.Vendor}</span>
      <span className="category">{t.Category}</span>
      <span className="date">{t.Date}</span>
      <span className="delete" onClick={e => handleDelete(e)}>🪣</span>
    </div>
  )
}

export default Transaction;
