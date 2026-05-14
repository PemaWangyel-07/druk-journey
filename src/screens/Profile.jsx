import { FaUserCircle } from "react-icons/fa";

function Profile() {
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
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#009688",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            color: "white",
          }}
        >
          <FaUserCircle size={50} />
        </div>

        <h1>Pema</h1>

        <p>Welcome to Druk Journey</p>
      </div>
    </div>
  );
}

export default Profile;