import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StyledInput from "../../Footer-section/components/StyledInput";
import signIn from "../../assets/sign/account-02.webp";

const SignInPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Redirect after login

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      console.log("Login Successful:", res.data);

      // Store token (if backend sends one)
      localStorage.setItem("token", res.data.token);
      navigate("/"); // Redirect after login
    } catch (err) {
      console.error("Login Error:", err.response?.data);
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="flex min-h-screen p-20">
      <div className="items-center justify-center hidden w-1/2 rounded-r-lg lg:flex">
        <img src={signIn} alt="Fashion Model" className="w-3/4 h-auto rounded-lg" />
      </div>
      <div className="flex flex-col items-center justify-center w-full p-8 lg:w-1/2">
        <h1 className="text-2xl font-bold">Sign In to Our Store</h1>
        <p className="mt-2 text-gray-600">Login helps speed up the checkout process</p>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-5">
          <div className="flex flex-col">
            <label className="font-semibold">Email</label>
            <StyledInput type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Password</label>
            <StyledInput type="password" name="password" placeholder="*******" value={formData.password} onChange={handleChange} />
          </div>

          <button type="submit" className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            SIGN IN
          </button>
        </form>

        <a href="/account/changePassword" className="mt-4 text-sm text-blue-500 cursor-pointer">Forgot your password?</a>
        <p className="mt-2 text-sm">
          Don’t have an account? <a href="/account/register" className="text-blue-500">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
