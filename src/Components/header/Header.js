import React, {useState}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate} from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import Cookies from "js-cookie";


const Header = (value) => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogin = () => {
    
    navigate("/login");
    setIsLoggedIn(true);
  };
  

  

  const handleLogout = () => {
    
   setIsLoggedIn(false);      
      navigate("/login");
      const logout = getAuth();
      console.log(logout);
      signOut(logout)
        .then(() => {
          // Sign-out successful.
          Cookies.get("email"); 
          Cookies.remove("email");
          navigate("/login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    }
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faVideo} /> &nbsp;Movie Realm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </Nav>

          <div>
              
                {
                  isLoggedIn ? <Button onClick={handleLogout} >Logout</Button> : <Button onClick={handleLogin} >Login</Button>
                }
              
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
