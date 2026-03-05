import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {

  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="container">

      <h1>Welcome {username}</h1>

      <p className="success">You logged in successfully 🎉</p>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}

export default Welcome;