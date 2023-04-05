import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";

const App = () => {
  const [userData, setUserData] = useState({ name: "", username: "" });

  const handleLogin = (name, username) => {
    setUserData({ name, username });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home name={userData.name} username={userData.username} />}
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
