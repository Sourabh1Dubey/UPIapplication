import React, { useState } from "react";
import "./Transaction.css";
import { Eye, EyeOff, Send } from "lucide-react";
import {Link} from 'react-router-dom'

const Transaction = () => {
  const [formData, setFormData] = useState({
    senderMobile: "",
    receiverMobile: "",
    tpin: "",
    amount: "",
  });

  const [showTpin, setShowTpin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Transaction Submitted:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="transaction-container">
      <div className="form-card">
        <h1 className="form-title">
           Transaction Form
        </h1>

        <form onSubmit={handleSubmit} className="transaction-form">
          {/* Sender Mobile */}
          <label>Sender Mobile Number</label>
          <input
            type="tel"
            name="senderMobile"
            value={formData.senderMobile}
            onChange={handleChange}
            placeholder="Enter sender mobile number"
            required
          />

          {/* Receiver Mobile */}
          <label>Receiver Mobile Number</label>
          <input
            type="tel"
            name="receiverMobile"
            value={formData.receiverMobile}
            onChange={handleChange}
            placeholder="Enter receiver mobile number"
            required
          />

          {/* T-PIN */}
          <label>T-PIN</label>
          <div className="tpin-container">
            <input
              type={showTpin ? "text" : "password"}
              name="tpin"
              value={formData.tpin}
              onChange={handleChange}
              placeholder="Enter 4-digit T-PIN"
              required
            />
            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowTpin(!showTpin)}
            >
              {showTpin ? (
                <EyeOff size={20} className="eye-icon" />
              ) : (
                <Eye size={20} className="eye-icon" />
              )}
            </button>
          </div>

          {/* Amount */}
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
          />

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Send Money
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transaction;
