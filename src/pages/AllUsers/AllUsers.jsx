import React, { useEffect, useState } from "react";
import "./AllUsers.css";
import { api } from "../../api/api";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/user/all");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Safe universal formatter — never crashes React
  const safeDisplay = (value) => {
    if (value === null || value === undefined) return "N/A";

    // If it's a simple string or number
    if (typeof value === "string" || typeof value === "number") return value;

    // Try to detect date-like objects
    if (typeof value === "object") {
      if (value.timestamp && !isNaN(value.timestamp)) {
        return new Date(value.timestamp).toLocaleString("en-IN");
      }
      if (value.date) {
        return new Date(value.date).toLocaleString("en-IN");
      }

      // Fall back: convert entire object to readable string
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }

    return String(value);
  };

  return (
    <div className="history-page">
      <h1 className="history-title">All Users</h1>
      <div className="card-container">
        {users.length === 0 ? (
          <p className="no-data">No users found</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="txn-card">
              {/* <p><strong>ID:</strong> {safeDisplay(user.id)}</p> */}
              <p><strong>Name:</strong> {safeDisplay(user.name)}</p>
              <p><strong>Bank Name:</strong> {safeDisplay(user.bankName)}</p>
              <p><strong>Mobile Number:</strong> {safeDisplay(user.mobNo)}</p>
              <p><strong>TPIN:</strong> {safeDisplay(user.tpin)}</p>
              <p><strong>Balance:</strong> ₹{safeDisplay(user.bal)}</p>

              <p>
                <strong>Status:</strong>{" "}
                <span className={user.frozen ? "failed" : "success"}>
                  {user.frozen ? "Frozen" : "Active"}
                </span>
              </p>

              <p><strong>Failed TPIN Attempts:</strong> {safeDisplay(user.failedTpinAttempts)}</p>

              <p><strong>Daily Amount:</strong> ₹{safeDisplay(user.dailyAmount)}</p>
              <p><strong>Weekly Amount:</strong> ₹{safeDisplay(user.weeklyAmount)}</p>
              <p><strong>Monthly Amount:</strong> ₹{safeDisplay(user.monthlyAmount)}</p>

              <p><strong>Daily Transactions:</strong> {safeDisplay(user.dailyTransactions)}</p>
              <p><strong>Weekly Transactions:</strong> {safeDisplay(user.weeklyTransactions)}</p>
              <p><strong>Monthly Transactions:</strong> {safeDisplay(user.monthlyTransactions)}</p>

              <p><strong>Last Transaction:</strong> {safeDisplay(user.lastTransaction)}</p>
              <p><strong>Last IP Address:</strong> {safeDisplay(user.lastIpAddress)}</p>
              <p><strong>Last IP Check Time:</strong> {safeDisplay(user.lastIpCheckTime)}</p>

              <div>
                <strong>Notifications:</strong>
                {user.notifications && user.notifications.length > 0 ? (
                  <ul>
                    {user.notifications.map((note, i) => (
                      <li key={i}>{safeDisplay(note)}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No notifications</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllUsers;
