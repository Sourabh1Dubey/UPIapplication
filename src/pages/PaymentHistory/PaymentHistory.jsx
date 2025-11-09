import React, { useState } from "react";
import { api } from "../../api/api";
import "./PaymentHistory.css";

const PaymentHistory = () => {
  const [mobile, setMobile] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  const fetchUserHistory = async () => {
    if (!mobile.trim()) {
      setError("Please enter a mobile number.");
      setTransactions([]);
      return;
    }
    setError("");
    try {
      const res = await api.get(`/history/user/${mobile.trim()}`);
      setTransactions(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch user history.");
      setTransactions([]);
    }
  };

  return (
    <div className="history-page">
      <h1 className="history-title">User Transaction History</h1>

      <div className="input-container">
        <input
          type="tel"
          placeholder="Enter user mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="freeze-input"  // Use your app's input styling class here
        />
        <button onClick={fetchUserHistory} className="freeze-btn">
          Fetch History
        </button>
      </div>

      {error && <p className="freeze-message">{error}</p>}

      <div className="card-container">
        {transactions.length === 0 ? (
          <p className="no-data">No transactions found.</p>
        ) : (
          transactions.map((txn) => (
            <div key={txn.id} className="txn-card">
              <p><strong>Sender:</strong> {txn.senderMobile}</p>
              <p><strong>Receiver:</strong> {txn.receiverMobile}</p>
              <p><strong>Amount:</strong> {txn.amount}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={txn.result === "Success" ? "success" : "failed"}>
                  {txn.result}
                </span>
              </p>
              <p><strong>Time:</strong> {txn.timeStamp}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
