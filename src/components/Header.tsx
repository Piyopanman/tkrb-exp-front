import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div id="header-container">
      <Link to="/">
        <h1>とうらぶ練度チェッカー</h1>
      </Link>
      <ul>
        <li>
          <Link to="/one">１口モード</Link>
        </li>
        <li>
          <Link to="/two">２口モード</Link>
        </li>
      </ul>
    </div>
  );
};
