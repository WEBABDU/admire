import React from "react";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as MainPageIcon } from "assets/icons/mainPageLink.svg";
import { ReactComponent as StatPageIcon } from "assets/icons/statPageLink.svg";
import { ReactComponent as UsersPageIcon } from "assets/icons/usersPageLink.svg";
import { ReactComponent as Profile } from "assets/icons/profile.svg";

export const Footer = React.memo(() => {
  return (
    <footer className="footer flex jc-sb">
      <NavLink
        to="/market"
        className={({ isActive }) =>
          isActive ? "footer__link active" : "footer__link"
        }
      >
        <MainPageIcon />
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          isActive ? "footer__link active" : "footer__link"
        }
      >
        <StatPageIcon />
      </NavLink>

      <NavLink
        to="/groups"
        className={({ isActive }) =>
          isActive ? "footer__link active" : "footer__link"
        }
      >
        <UsersPageIcon />
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "footer__link active" : "footer__link"
        }
      >
        <Profile />
      </NavLink>
    </footer>
  );
});
