import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postWithoutToken } from "./services/post";
import { paths } from "./config/paths";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./store/reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("rahul21");
  const [password, setPassword] = useState("rahul@123#");
  const [msz, setMsz] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    if (!username || !password) {
      setError("Username & password are required fields!");
      return;
    }

    const response = await postWithoutToken(paths.login, data);
    console.log(response);
    if (response.success) {
      setMsz(response.message);
      console.log(response.data._id);
      dispatch(loginSuccess({ userid: response.data._id, username: response.data.username }));
      navigate("/");
    } else {
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
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column" }}
        >
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
          <label style={{ marginBottom: "16px" }}>
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
          </label>
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
            Login
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
          Don't have an account?{" "}
          <a
            href="/register"
            style={{
              color: "#4CAF50",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign up first
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
