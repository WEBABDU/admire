import React from "react";

import { CardActions } from "components";

export const EmployeeCard = ({ name, phone, imgUrl, id }) => {
  return (
    <article className="col-12 flex jc-sb">
      <div className="market__logo">
        <img
          src={imgUrl || require("assets/images/marketLogo.png")}
          alt="marketLogo"
        />
      </div>

      <div className="market__content">
        <h2 className="market__title">{name}</h2>

        <a href={`tel:${phone}`} className="market__money flex ai-c">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g opacity="0.5">
              <path
                d="M6.00016 7.33334L3.3335 10M3.3335 10L6.00016 12.6667M3.3335 10H10.6668C11.3741 10 12.0524 9.71905 12.5524 9.21896C13.0525 8.71886 13.3335 8.04058 13.3335 7.33334C13.3335 6.62609 13.0525 5.94782 12.5524 5.44772C12.0524 4.94762 11.3741 4.66667 10.6668 4.66667H10.0002"
                stroke="var(--main-black)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          {phone}
        </a>
      </div>

      <CardActions
        itemName={name}
        defaultBtn={{ edit: false, delete: true }}
        deleteObj={{ url: "market/delete-employee", data: id }}
      />
    </article>
  );
};
