import { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5000/api/auth/change-password",
        formData
      );
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong!");
    }
  };
  

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input id="email" type="email" placeholder="Enter Email" onChange={handleChange} required />
        <input id="currentPassword" type="password" placeholder="Current Password" onChange={handleChange} required />
        <input id="newPassword" type="password" placeholder="New Password" onChange={handleChange} required />
        <button type="submit" className="px-4 py-2 text-white bg-blue-500">Change Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;
