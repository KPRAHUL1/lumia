"use client"
import { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../Sign/components/Dialog";
import StyledInput from "../Footer-section/components/StyledInput";
import user from "../assets/icons/people.png";

const API_BASE_URL = "http://localhost:5000/api/auth"; 

const Modal = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // 🔹 Handle Sign In / Sign Up API Calls
  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isSignUp ? "/register" : "/login";
      const response = await axios.post(`${API_BASE_URL}${endpoint}`, formData);

      alert(response.data.message); // ✅ Show success message
      if (!isSignUp) {
        localStorage.setItem("token", response.data.token); // ✅ Store token
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <img src={user} alt="User Icon" className="w-5" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="grid grid-cols-2">
            <div className="hidden w-full lg:block">
              <img
                src="/popup-login-fashion2.webp"
                alt="Fashion Login"
                className="w-full h-full rounded-l-xl"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <div className="space-y-3 text-center">
                <h1 className="mt-5 text-xl font-bold">
                  {isSignUp ? "Register to Our Store" : "Sign In to Our Store"}
                </h1>
                <p className="text-xs">
                  {isSignUp
                    ? "Register to our store and start shopping your products"
                    : "Login to our store and start shopping for your products"}
                </p>
              </div>

              <form className="mt-10 space-y-4 xl:px-10" onSubmit={handleAuth}>
                {isSignUp && (
                  <>
                    <div className="relative flex flex-col">
                      <label htmlFor="firstName" className="font-semibold">
                        First Name
                      </label>
                      <StyledInput
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="flex-1 p-1 border-b-2"
                        placeholder="Enter Your First Name"
                      />
                    </div>
                    <div className="relative flex flex-col">
                      <label htmlFor="lastName" className="font-semibold">
                        Last Name
                      </label>
                      <StyledInput
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="flex-1 p-1 border-b-2"
                        placeholder="Enter Your Last Name"
                      />
                    </div>
                  </>
                )}

                <div className="relative flex flex-col">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <StyledInput
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="flex-1 p-1 border-b-2"
                    placeholder="Enter Your Email Here"
                  />
                </div>

                <div className="relative flex flex-col">
                  <label htmlFor="password" className="font-semibold">
                    Password
                  </label>
                  <StyledInput
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="flex-1 p-1 border-b-2"
                    placeholder="*******"
                  />
                </div>

                {error && <p className="text-red-500">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 mt-3 text-white bg-blue-500 rounded"
                >
                  {loading ? "Processing..." : isSignUp ? "CREATE ACCOUNT" : "SIGN IN"}
                </button>
              </form>

              <div className="mt-4 text-center">
                {!isSignUp ? (
                  <>
                    <a href="/account/changePassword" className="text-blue-500">
                      Forgot Password?
                    </a>
                    <p className="mt-2 text-sm">
                      Don’t have an account?{" "}
                      <button
                        onClick={() => setIsSignUp(true)}
                        className="text-blue-500"
                      >
                        Register Here
                      </button>
                    </p>
                  </>
                ) : (
                  <p className="mt-2 text-sm">
                    Already have an account?{" "}
                    <button
                      onClick={() => setIsSignUp(false)}
                      className="text-blue-500"
                    >
                      Login here
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="absolute top-4 right-4 opacity-70 hover:opacity-100">
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
