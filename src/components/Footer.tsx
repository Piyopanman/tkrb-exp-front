import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <Link to="/">
        <h1>©︎とうらぶ練度チェッカー</h1>
      </Link>
      <p>※非公式</p>
      <Link to="/contact">
        <p>お問い合わせ</p>
      </Link>
      <Link to="/about">
        <p>とうらぶ練度チェッカーについて</p>
      </Link>
      <p>
        運営者：<a href="https://twitter.com/hiyoko_coder">@hiyoko_coder</a>
      </p>
    </div>
  );
};
