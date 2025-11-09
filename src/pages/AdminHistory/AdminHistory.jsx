import React, { useEffect, useState } from "react";
import "./AdminHistory.css";
import { api } from "../../api/api";

const AdminHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await api.get("/history/admin");  // <-- Use admin endpoint here
      setTransactions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="history-page">
      <h1 className="history-title">Transaction History</h1>
      <div className="card-container">
        {transactions.length === 0 ? (
          <p className="no-data">No transactions yet</p>
        ) : (
          transactions.map((txn) => (
            <div key={txn.id} className="txn-card">
              <p><strong>Sender:</strong> {txn.senderMobile}</p>
              <p><strong>Receiver:</strong> {txn.receiverMobile}</p>
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

export default AdminHistory;
