import { User, CreditCard, Snowflake,History } from "lucide-react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <h1 className="landing-title">Welcome to SecurePay</h1>
      <p className="landing-subtitle">
        Manage users, handle secure payments, and protect your frozen assets
        with confidence — all in one smart gateway.
      </p>

      {/* Icons Section */}
      <div className="icon-grid">
        <Link to="/user" className="icon-card">
          <User size={60} className="icon" />
          <h2 className="icon-title">User</h2>
          <p className="icon-text">Create user accounts.</p>
        </Link>

        <Link to="/transaction" className="icon-card">
          <CreditCard size={60} className="icon" />
          <h2 className="icon-title">Payment</h2>
          <p className="icon-text">Handle transactions securely.</p>
        </Link>

        {/* <Link to="/freeze" className="icon-card">
          <Snowflake size={60} className="icon" />
          <h2 className="icon-title">Frozen</h2>
          <p className="icon-text">Temporarily freeze or unfreeze accounts.</p>
        </Link> */}

        <Link to="/history" className="icon-card">
          <History size={60} className="icon" />
          <h2 className="icon-title">Payment History</h2>
          <p className="icon-text">View detailed transaction history</p>
        </Link>
      </div>

      {/* Footer */}
      <footer className="landing-footer">© 2025 SecurePay.</footer>
    </div>
  );
};

export default Home;
