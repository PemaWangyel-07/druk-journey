import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";

import Landing from "./screens/Landing";
import Destinations from "./screens/Destinations";
import Food from "./screens/Food";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";

function App() {
  return (
    <BrowserRouter>

      <Topbar />

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/destinations" element={<Destinations />} />

        <Route path="/food" element={<Food />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;