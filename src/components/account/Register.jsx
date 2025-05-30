import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StyledInput from "../../Footer-section/components/StyledInput";
import register from "../../assets/sign/account-01.webp";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    image: "",
    phoneNumber: "",
    role: "user", // Default role
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      console.log("Registration Successful:", res.data);

      navigate("/account/signIn"); // Redirect to login page
    } catch (err) {
      console.error("Registration Error:", err.response?.data);
      setError(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="flex min-h-screen p-32">
      <div className="items-center justify-center hidden w-1/2 lg:flex">
        <img src={register} alt="Fashion Model" className="w-3/4 h-auto rounded-lg" />
      </div>

      <div className="flex flex-col items-center justify-center w-full p-8 lg:w-1/2">
        <h1 className="text-2xl font-bold">Register to Our Store</h1>
        <p className="mt-2 text-gray-600">Register to our store and start shopping your products</p>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-5">
          <div className="flex flex-col">
            <label className="font-semibold">Full Name</label>
            <StyledInput type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Username</label>
            <StyledInput type="text" name="username" placeholder="Enter Your Username" value={formData.username} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Email</label>
            <StyledInput type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Phone Number</label>
            <StyledInput type="text" name="phoneNumber" placeholder="Enter Your Phone Number" value={formData.phoneNumber} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Profile Image URL</label>
            <StyledInput type="text" name="image" placeholder="Enter Image URL" value={formData.image} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Password</label>
            <StyledInput type="password" name="password" placeholder="*******" value={formData.password} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            CREATE ACCOUNT
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already have an account? <a href="/account/signIn" className="text-blue-500">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
