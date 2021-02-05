import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBook,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AsideMenu = () => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const loginButton = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Oops... {error.message}</div>;
    }

    if (isAuthenticated) {
      return (
        <div>
          Hello {user.nickname}{" "}
          <img
            src={user.picture}
            alt="profile-pic"
            style={{ height: "2rem" }}
          />
          <button
            className="login-button-index mt-3"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <button className="login-button-index" onClick={loginWithRedirect}>
          Login
        </button>
      );
    }
  };
  return (
    <aside>
      <div styles={{ width: "80%", padding: "1rem" }}>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="menu d-flex column justify-content-start align-items-center">
          <div className="col">
            <Link to="/">
              {" "}
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
          </div>
        </div>
        <div className="menu d-flex column justify-content-start align-items-center">
          <div className="col">
            <Link to="/search">
              {" "}
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Search
            </Link>
          </div>
        </div>
        <div className="menu d-flex column justify-content-start align-items-center">
          <div className="col">
            <Link to="/">
              {" "}
              <FontAwesomeIcon icon={faBook} className="mr-2" /> Your library
            </Link>
          </div>
        </div>

        <div className="stick-to-bottom-index-page">
          {/* <Link to="/login">
            <div className="login-button-index">
              <span>SIGN UP</span>
            </div>
          </Link>
          <Link to="/login">
            <div className="login-button-index">
              <span>LOGIN</span>
            </div>
          </Link> */}
          <div>{loginButton()}</div>
          <div className="install-btn">
            <a href="#">
              <FontAwesomeIcon icon={faArrowCircleDown} /> Install
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideMenu;
