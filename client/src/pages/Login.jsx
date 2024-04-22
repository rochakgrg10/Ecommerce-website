import React from "react";

function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        justifyContent: "space-around",
        alignItems: "center",
        maxWidth: "300px",
        border: "1px solid black",
        margin: "auto",
      }}
    >
      <h2>Login</h2>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button style={{ marginBottom: "1rem" }}>login</button>
    </div>
  );
}

export default Login;
