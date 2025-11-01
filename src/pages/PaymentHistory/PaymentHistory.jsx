import React, { useContext, useState } from "react";
import "./PaymentHistory.css";


const PaymentHistory = () => {

  const [transactions, setTransactions] = useState([]);

  const addTransaction = () => {
    const newTransaction = {
      id: Date.now(),
      senderMobile: "9876543210",
      receiverMobile: "9123456789",
      result: Math.random() > 0.5 ? "Success" : "Failed",
      time: new Date().toLocaleString(),
    };
    setTransactions((prev) => [newTransaction, ...prev]); // add new card on top
  };

  return (
    <div className="history-page">
      <h1 className="history-title">Transaction History</h1>
      <button className="add-btn" onClick={addTransaction}>
        + Add Transaction
      </button>
     
      <div className="card-container">
        {transactions.length === 0 ? (
          <p className="no-data">No transactions yet</p>
        ) : (
          transactions.map((txn) => (
            <div key={txn.id} className="txn-card">
              <p>
                <strong>Sender:</strong> {txn.senderMobile}
              </p>
              <p>
                <strong>Receiver:</strong> {txn.receiverMobile}
              </p>
              <p>
                <strong>Status:</strong>
                <span
                  className={txn.result === "Success" ? "success" : "failed"}
                >
                  {txn.result}
                </span>
              </p>
              <p>
                <strong>Time:</strong> {txn.time}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
