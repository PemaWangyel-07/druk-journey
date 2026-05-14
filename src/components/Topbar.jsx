import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar">

      <div className="left-side">
        <img
          src="/flag.png"
          alt="Bhutan Flag"
          className="flag"
        />

        <h2>Druk Journey</h2>
      </div>

      <div className="right-side">

        <Link to="/">Home</Link>

        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>

        <Link to="/profile" className="profile-icon">
          <FaUserCircle size={22} />
        </Link>

      </div>

    </div>
  );
}

export default Topbar;