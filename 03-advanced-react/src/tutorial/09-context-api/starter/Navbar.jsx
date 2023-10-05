import React, { useState, createContext, useContext } from "react";
import Navlinks from "./Navlinks";

// create context
export const NavbarContext = createContext();
// custom hook for one-line imports
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState("Mike");

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider
      value={{
        user,
        logout,
      }}
    >
      <nav className="navbar">
        <h5>Context API</h5>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
