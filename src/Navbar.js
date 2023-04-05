// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

// const NavigationBar = () => {
//   return (
//     <Navbar bg="dark" variant="dark">
//       <Link to="/">Home</Link>

//       <Nav>
//         <Link to="/login">Login</Link>
//       </Nav>
//     </Navbar>
//   );
// };

// export default NavigationBar;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-center">
      <Nav className="mr-auto">
        <Link to="/" className="nav-link mr-3">
          Home
        </Link>
        <Link to="/login" className="nav-link ml-3">
          Login
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
