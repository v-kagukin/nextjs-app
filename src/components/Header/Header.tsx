"use client";

import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Header = () => {
  const [pathname, setPathname] = useState("");

  const pages = [
    { pathname: "/", name: "Home" },
    { pathname: "/users", name: "Users" },
    { pathname: "/about", name: "About" },
    { pathname: "/contacts", name: "Contacts" },
  ];

  const handleClick = useCallback((url: string) => {
    setPathname(url);
  }, []);

  useEffect(() => {
    setPathname(location.pathname);
  }, []);

  return (
    <nav className="header container">
      {pages.map((page) => (
        <MenuItem
          key={page.pathname}
          href={page.pathname}
          isSelected={page.pathname === pathname}
          onClick={handleClick}
        >
          {page.name}
        </MenuItem>
      ))}
    </nav>
  );
};

export default Header;
