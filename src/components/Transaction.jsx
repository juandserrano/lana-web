import React from "react";
import './Transaction.css'

const Transaction = ( {t} ) => {

  return (
    <div>
      <span>{t.Name}</span>
    </div>
  )
}

export default Transaction;
