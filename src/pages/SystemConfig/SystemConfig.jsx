import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import "./SystemConfig.css";


const mapToAPI = (config) => ({
  dailyLimit: Number(config["Daily Limit"]),
  weeklyLimit: Number(config["Weekly Limit"]),
  monthlyLimit: Number(config["Monthly Limit"]),
  dailyTxnLimit: Number(config["Daily Transaction Limit"]),
  weeklyTxnLimit: Number(config["Weekly Transaction Limit"]),
  monthlyTxnLimit: Number(config["Monthly Transaction Limit"]),
  maxWrongPin: Number(config["Max Wrong Pin"]),
  ipChangeTime: Number(config["IP Change Time"]),
  blockedCountries: config["Blocked Countries"].split(",").map(v => v.trim()),
});
const mapFromAPI = (data) => ({
  "Daily Limit": data.dailyLimit,
  "Weekly Limit": data.weeklyLimit,
  "Monthly Limit": data.monthlyLimit,
  "Daily Transaction Limit": data.dailyTxnLimit,
  "Weekly Transaction Limit": data.weeklyTxnLimit,
  "Monthly Transaction Limit": data.monthlyTxnLimit,
  "Max Wrong Pin": data.maxWrongPin,
  "IP Change Time": data.ipChangeTime,
  "Blocked Countries": data.blockedCountries ? data.blockedCountries.join(", ") : "",
  
});
const SystemConfig = () => {

  
// For ScrollBar
 useEffect(() => {
    // Enable scroll when this page is active
    document.body.style.overflowY = "auto";
    return () => {
      // Disable scroll when leaving this page
      document.body.style.overflowY = "hidden";
    };
  }, []);

  const [config, setConfig] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchConfig = async () => {
      const res = await api.get("/admin/config");
      setConfig(mapFromAPI(res.data));
    };
    fetchConfig();
  }, []);

  const handleChange = (key, value) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleToggleEdit = async () => {
    if (isEditing) {
      try {
        await api.put("/admin/config", mapToAPI(config));
        alert("Configuration saved successfully!");
      } catch (err) {
        alert("Saving failed");
      }
    }
    setIsEditing((prev) => !prev);
  };
  if (!config) return <div>Loading...</div>;
  return (
    <div className="config-container">
      <h1 className="config-title">System Configuration</h1>
      <p className="config-subtitle">
       
      </p>

      <div className="config-grid">
        {Object.entries(config).map(([key, value]) => (
          <div key={key} className="config-item">
            <label className="config-label">{key}</label>
            <input
              className={`config-input ${isEditing ? "editable" : "readonly"}`}
              value={value}
              disabled={!isEditing}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      <button className="update-button" onClick={handleToggleEdit}>
        {isEditing ? "Save Configuration" : "Update Configuration"}
      </button>
    </div>
  );
};

export default SystemConfig;
