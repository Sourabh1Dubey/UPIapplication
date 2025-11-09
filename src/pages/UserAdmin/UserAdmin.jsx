import React from "react";
import { User,  ShieldUser } from "lucide-react";
import "./UserAdmin.css"; 
import { Link } from "react-router-dom";
const UserAdmin = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <h1 className="landing-title">Welcome to SecurePay</h1>
      <p className="landing-subtitle">
       
      </p>

      {/* Icon Section */}
      <div className="icon-grid">
        {/* User */}
        <Link to="/home" className="icon-card">
          <div className="icon-wrapper">
            <User size={60} className="icon-emerald" />
          </div>
          <h2 className="icon-title">User</h2>
          <p className="icon-description">
            Manage your transactions, Create Account, and Check History.
          </p>
        </Link>

        {/* Admin */}
        <Link to="/admin" className="icon-card">
          <div className="icon-wrapper">
            < ShieldUser size={60} className="icon-emerald" />
          </div>
          <h2 className="icon-title">Admin</h2>
          <p className="icon-description">
            Oversee transactions, manage accounts, and ensure system integrity.
          </p>
        </Link>
      </div>

      {/* Footer */}
      <footer className="footer">
        
      </footer>
    </div>
  );
};

export default UserAdmin;
