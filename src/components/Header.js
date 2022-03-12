import LoginRegister from "./LoginRegister";
import Logo from "./Logo";
import Navigation from "./Navigation";
import React from "react";

const Header = (props) => {
  return (
    <header>
      <Logo />
      <Navigation />
      <LoginRegister />
    </header>
  );
};

export default Header;
