import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

import React from "react";
import { useState } from "react";

const Navigation = (props) => {
  const [exploreActive, setExploreActive] = useState(false);
  return (
    <nav className="top-nav">
      <div>
        <ul className="user-list">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SETTINGS</li>
          <li>CONTACT</li>
          <li>DONATE</li>
          <div>
            <li
              className="explore-list-item"
              onClick={() => setExploreActive(!exploreActive)}
            >
              EXPLORE{" "}
              <BsFillCaretDownFill
                style={{ display: !exploreActive ? "block" : "none" }}
              />
              <BsFillCaretUpFill
                style={{ display: exploreActive ? "block" : "none" }}
              />
            </li>
            <li style={{ display: exploreActive ? "block" : "none" }}>
              <ul className="news-list">
                <li>FACT CHECK</li>
                <li>NEWS</li>
                <li>BLOG</li>
                <li>TOPICS</li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
