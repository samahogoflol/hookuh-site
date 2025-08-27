import React from "react";

interface NavItemProps {
  children: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return <li className="opacity-65 hover:opacity-100 cursor-pointer">{children}</li>;
};
