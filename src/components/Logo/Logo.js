import React from "react";
import { Link } from "@reach/router";

import "./Logo.css";

const logo = props => (
  <div className="Logo">
    <Link to="/">
      M M <span className="visually-hidden">Mahmoud Mamdouh</span>
    </Link>
  </div>
);

export default logo;
