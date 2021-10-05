import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = ({ cartCount }) => {
  return (
    <div className="navbar navbar-expand-md  bg-info navbar-light">
      <div className="container">
        <div className="navbar-brand"></div>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapsiblenavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsiblenavbar">
          <nav className="navbar">
            <div className="container-fluid">
              {/* <span className="navbar-brand">
                <Link to="/">
                  <FcHome style={{ height: "50px", width: "50px" }} />
                </Link>
              </span> */}

              <ul className="nav ">
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <form className="ml-auto">
            <button className="btn btn-outline-dark mt-2">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill bg-dark text-light cartvalue">
                {cartCount}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>

    // <div className="navContainer">
    //   {/* <h3>CartioCart</h3> */}
    //   <ul>
    //     <li>Home</li>

    //     <li>Products</li>
    //     <li>About Us</li>
    //   </ul>
    //   <div className="cart">
    //     <strong>Cart</strong> <span className="cartNo">{cartCount}</span>
    //   </div>
    // </div>
  );
};
export default Header;
