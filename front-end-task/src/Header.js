import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Live Spaces</h1>
      <div className="header__nav">
        <div className="header__symbol">
          <h5>
            <i class="fa-solid fa-circle-check"></i>
          </h5>
        </div>
        <div className="header__subtitle">
          <h6>
            All NFTs on Cyber either belong to or were minted by their space
            creator.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Header;
