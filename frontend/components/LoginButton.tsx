"use client";

export default function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Login</h1>
      <button
        onClick={() => (window.location.href = "/auth/login")}
        style={{ padding: "1rem 2rem", fontSize: "1.2rem" }}
      >
        Login with Fayda
      </button>
    </div>
  );
}
