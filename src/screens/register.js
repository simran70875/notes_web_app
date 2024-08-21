import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postWithoutToken } from "./services/post";
import { paths } from "./config/paths";

const Register = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msz, setMsz] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    // Add registration logic here
    const data = {
      username,
      phone,
      email,
      address,
      password,
      confirmPassword,
    };
    if(!username || !phone || !email || !address || !password || !confirmPassword) {
      setError("Please fill all the fields!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    const response = await postWithoutToken(paths.register, data);
    console.log(response);
    if(response.success){
      setMsz(response.message);
    }else{
      setError(response.message);
    }
    
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
        <form
          onSubmit={handleRegister}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <label style={{ marginBottom: "8px" }}>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <div style={{ padding: 15 }}></div>
            <label style={{ marginBottom: "8px" }}>
              Phone:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <label style={{ marginBottom: "8px" }}>
              Email:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <div style={{ padding: 15 }}></div>
            <label style={{ marginBottom: "8px" }}>
              Address:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <label style={{ marginBottom: "8px" }}>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </label>{" "}
            <div style={{ padding: 15 }}></div>
            <label style={{ marginBottom: "16px" }}>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </label>{" "}
          </div>
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Register
          </button>
        </form>
        {msz ? (
          <p style={{ textAlign: "center", fontSize: "16px", color: "green" }}>
            {msz}
          </p>
        ) : null}

        {error ? (
          <p style={{ textAlign: "center", fontSize: "16px", color: "red" }}>
            {error}
          </p>
        ) : null}
        <p style={{ textAlign: "center", fontSize: "14px" }}>
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#4CAF50",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
