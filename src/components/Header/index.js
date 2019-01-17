import React, { Component } from "react";
import { Link } from "@reach/router";
import "./Header.css";

import Logo from "../Logo/Logo";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav className="header__navigation">
            <Logo />
            <ul className="header__navigation-list">
              <li className="header__navigation__item">
                <Link to="/">home</Link>
              </li>

              <li className="header__navigation__item">
                <Link to="/About">About</Link>
              </li>

              <li className="header__navigation__item">
                <Link to="/Development">Development</Link>
              </li>
              <li className="header__navigation__item">
                <Link to="/Skills">Skills</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
