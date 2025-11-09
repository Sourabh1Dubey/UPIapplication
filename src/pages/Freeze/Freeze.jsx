import React, { useState } from "react";
import "./Freeze.css";
import { Snowflake, Unlock } from "lucide-react";
import {Link} from 'react-router-dom'
import { api } from "../../api/api";

const Freeze = () => {
const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleUnfreeze = async () => {
    if (mobile.trim() === "") {
      setMessage("⚠️ Please enter a mobile number first.");
      return;
    }
    try {
    const res = await api.post(`/account/unfreeze/${mobile}`);
    setMessage("✅ " + res.data);
  } catch (err) {
    console.error(err);
    setMessage("❌ Failed to unfreeze account.");
  }
};

  return (
    <div className="freeze-container">
      <h1 className="freeze-title">Unfreeze Account</h1>

      <div className="freeze-card">
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="freeze-input"
        />

        <button onClick={handleUnfreeze} className="freeze-btn">
          Unfreeze Account
        </button>

        {message && <p className="freeze-message">{message}</p>}
      </div>
    </div>
  );












  // const [isFrozen, setIsFrozen] = useState(true);

  // const toggleStatus = () => {
  //   setIsFrozen(!isFrozen);
  // };

  // return (
  //   <div className="status-container">
  //     <div className="status-card">
  //       <h1 className="status-title">
  //         {isFrozen ? (
  //           <Snowflake size={32} className="status-icon frozen" />
  //         ) : (
  //           <Unlock size={32} className="status-icon unfrozen" />
  //         )}
  //         Account Status
  //       </h1>

  //       <div className="status-indicator">
  //         <p className={`status-text ${isFrozen ? "frozen-text" : "unfrozen-text"}`}>
  //           {isFrozen ? "❄️ Frozen" : "✅ Active (Unfrozen)"}
  //         </p>
  //       </div>

  //       <button
  //         onClick={toggleStatus}
  //         className={`status-btn ${isFrozen ? "unfreeze-btn" : "freeze-btn"}`}
  //       >
  //         {isFrozen ? "Unfreeze Account" : "Freeze Account"}
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Freeze;
