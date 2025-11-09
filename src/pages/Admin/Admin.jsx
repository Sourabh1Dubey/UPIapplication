import React from "react";
import { Snowflake, Clock, Settings } from "lucide-react";
import "./Admin.css"; 
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <h1 className="landing-title">Welcome to SecurePay Admin Panel</h1>
      <p className="landing-subtitle">
       
      </p>

      {/* Icon Grid */}
      <div className="icon-grid">
        {/* Freeze */}
        <Link to="/freeze" className="icon-card">
          <div className="icon-wrapper">
            <Snowflake size={60} className="icon-emerald" />
          </div>
          <h2 className="icon-title">Freeze</h2>
          <p className="icon-description">
            Freeze or unfreeze user accounts with instant control and transparency.
          </p>
        </Link>

        {/* History */}
        <Link to="/adminHistory" className="icon-card">
          <div className="icon-wrapper">
            <Clock size={60} className="icon-emerald" />
          </div>
          <h2 className="icon-title">History</h2>
          <p className="icon-description">
            Access and monitor transaction logs and past payment activities.
          </p>
        </Link>

        {/* System Configuration */}
        <Link to="/systemconfig" className="icon-card">
          <div className="icon-wrapper">
            <Settings size={60} className="icon-emerald" />
          </div>
          <h2 className="icon-title">System Configuration</h2>
          <p className="icon-description">
            Customize platform settings and maintain overall system security.
          </p>
        </Link>
      </div>

      {/* Footer */}
      <footer className="footer"></footer>
    </div>
  );
};

export default Admin;
