import { useEffect, useState } from "react";
import "../User/User.css";
import { Eye, EyeOff } from "lucide-react";
import { api } from "../../api/api";

const User = () => {
  useEffect(() => {
    document.body.style.overflowY = "auto";
    return () => {
      document.body.style.overflowY = "hidden";
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    mobNo: "",      // Correct key for your backend
    tpin: "",
    bal: "",
    accountType: "",
    bankName: "",
  });
  const [showTpin, setShowTpin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      mobNo: formData.mobNo,           // Must match backend
      tpin: formData.tpin,
      bankName: formData.bankName,
      bal: parseFloat(formData.bal),
    };
    try {
      const res = await api.post("/user/create", payload);
      alert("✅ User created successfully!");
      setFormData({
        name: "",
        mobNo: "",
        tpin: "",
        bal: "",
        accountType: "",
        bankName: "",
      });
    } catch (err) {
      console.log(err);
      alert("❌ Failed to create user");
    }
  };

  return (
    <div className="user-container">
      <div className="form-card">
        <h1 className="form-title">User Account Form</h1>
        <form onSubmit={handleSubmit} className="user-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />

          <label>Mobile</label>
          <input
            type="tel"
            name="mobNo"          // Must be "mobNo"
            value={formData.mobNo}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />

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

          <label>Balance</label>
          <input
            type="number"
            name="bal"
            value={formData.bal}
            onChange={handleChange}
            placeholder="Enter account balance"
            required
          />

          <label>Account Type</label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            required
          >
            <option value="">Select type</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
            <option value="Salary">Salary</option>
          </select>

          <label>Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="Enter bank name"
            required
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
