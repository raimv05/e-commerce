import React from "react";

const Home = ({ name, username }) => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
    </div>
  );
};

export default Home;
