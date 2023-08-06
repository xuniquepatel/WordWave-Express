import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.jpeg";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h4><button type="button" class="btn btn-light">ART</button></h4>
          </Link>
          <Link className="link" to="/?cat=science">
            <h4><button type="button" class="btn btn-light">SCIENCE</button></h4>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h4><button type="button" class="btn btn-light">TECHNOLOGY</button></h4>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h4><button type="button" class="btn btn-light">CINEMA</button></h4>
          </Link>
          <Link className="link" to="/?cat=design">
            <h4><button type="button" class="btn btn-light">DESIGN</button></h4>
          </Link>
          <Link className="link" to="/?cat=food">
            <h4><button type="button" class="btn btn-light">FOOD</button></h4>
          </Link>
          
          {currentUser && (
          <button  type="button" class="btn btn-info"><span>{currentUser?.username}</span></button>)}
          {currentUser ? (
            <span onClick={logout}><button type="button" class="btn btn-warning">Logout</button></span>
          ) : (
            <Link className="link" to="/login">
             <h4><button type="button" class="btn btn-warning"> Login</button></h4>
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
             <b>Write</b> 
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
