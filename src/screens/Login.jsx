function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "350px",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            boxSizing: "border-box",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "25px",
            border: "none",
            backgroundColor: "#009688",
            color: "white",
            borderRadius: "8px",
            fontSize: "18px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;