import React from "react";

export const Switch = ({ children }) => {
  return (
    <label className="toggle" htmlFor="myToggle">
      {children}
      <input className="toggle__input" type="checkbox" id="myToggle" />
      <div className="toggle__fill" />
    </label>
  );
};
