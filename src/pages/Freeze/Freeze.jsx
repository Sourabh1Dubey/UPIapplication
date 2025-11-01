import React, { useState } from "react";
import "./Freeze.css";
import { Snowflake, Unlock } from "lucide-react";
import {Link} from 'react-router-dom'

const Freeze = () => {
  const [isFrozen, setIsFrozen] = useState(true);

  const toggleStatus = () => {
    setIsFrozen(!isFrozen);
  };

  return (
    <div className="status-container">
      <div className="status-card">
        <h1 className="status-title">
          {isFrozen ? (
            <Snowflake size={32} className="status-icon frozen" />
          ) : (
            <Unlock size={32} className="status-icon unfrozen" />
          )}
          Account Status
        </h1>

        <div className="status-indicator">
          <p className={`status-text ${isFrozen ? "frozen-text" : "unfrozen-text"}`}>
            {isFrozen ? "❄️ Frozen" : "✅ Active (Unfrozen)"}
          </p>
        </div>

        <button
          onClick={toggleStatus}
          className={`status-btn ${isFrozen ? "unfreeze-btn" : "freeze-btn"}`}
        >
          {isFrozen ? "Unfreeze Account" : "Freeze Account"}
        </button>
      </div>
    </div>
  );
};

export default Freeze;
