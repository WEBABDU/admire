import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

import { serachParamsCreator } from "store/searchParams/searchParams";

import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as Notification } from "assets/icons/notification.svg";
import { ReactComponent as AddNew } from "assets/icons/addNew.svg";
import { debounce } from "services/helpers/debounce";

export const Header = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const { pathname } = useLocation();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleChange = debounce((e) => {
    dispatch(serachParamsCreator({ propName: "name", value: e.target.value }));
  }, 400);

  return (
    <header className="header">
      <div className="container">
        <div className="flex jc-sb">
          <Link to="/market">
            <img src={require("assets/images/logo.png")} alt="logo" />
          </Link>

          <div className="flex">
            <button
              className="options__actions"
              onClick={(e) => setIsSearchOpen(true)}
            >
              <Search />
            </button>

            <button className="options__actions">
              <Notification />
            </button>

            <Link className="options__actions" to={`${pathname}/create`}>
              <AddNew />
            </Link>
          </div>
        </div>
      </div>

      <div className={cn("search", { search_active: isSearchOpen })}>
        <label className="input flex ai-c">
          <input
            type="text"
            placeholder="Maxsulot nomi bilan izlang"
            className="input__field"
            ref={ref}
            onChange={handleChange}
          />

          <button
            style={{ height: "20px" }}
            onClick={(e) => setIsSearchOpen(false)}
          >
            <img
              src={require("assets/icons/close.svg").default}
              alt="close"
              className="input__close"
            />
          </button>
        </label>
      </div>
    </header>
  );
};
