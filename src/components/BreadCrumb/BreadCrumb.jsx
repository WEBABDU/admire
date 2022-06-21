import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as BackButton } from "assets/icons/backButton.svg";

export const BreadCrumb = React.memo(
  ({ redirectUrl, text, icons = [] }) => {
    return (
      <header className="header">
        <div className="container">
          <div className="flex ai-c jc-sb">
            <Link to={`/${redirectUrl}`} className="breadcrumb flex ai-c">
              <BackButton />
              {text}
            </Link>
            {icons.map((icon, index) => {
              return (
                <button
                  key={index}
                  className="options__actions"
                  onClick={icon.click}>
                  {icon.icon}
                </button>
              );
            })}
          </div>
        </div>
      </header>
    );
  },
  (prevProps, nexxtProps) => prevProps.text === nexxtProps.text
);
