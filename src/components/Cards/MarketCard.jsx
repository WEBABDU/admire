import React from "react";

import { CardActions } from "components";
import { useNavigate } from "react-router-dom";

export const MarketCard = ({ name, market_balance, imgUrl, id }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/market/${id}`);
  };

  return (
    <div className="col-12 flex jc-sb pr-15">
      <div className="col-12 flex jc-sb" onClick={handleClick}>
        <div className="market__logo">
          <img
            src={imgUrl || require("assets/images/marketLogo.png")}
            alt="marketLogo"
          />
        </div>

        <div className="market__content">
          <h2 className="market__title">{name}</h2>

          <p className="market__money flex ai-c">
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
            {market_balance} so’m
          </p>
        </div>
      </div>
      
      <CardActions
        itemName={name}
        deleteObj={{ url: "market/delete-market", data: id }}
        editPageLink={`market/update/${id}`}
        customBtn={[
          {
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0001 11.4935C14.5965 11.4935 16.7013 9.38869 16.7013 6.79227C16.7013 4.19586 14.5965 2.09105 12.0001 2.09105C9.4037 2.09105 7.29889 4.19586 7.29889 6.79227C7.29889 9.38869 9.4037 11.4935 12.0001 11.4935ZM11.9998 21.9089C7.30546 21.9089 3.49999 20.7429 3.49999 18.3293C3.49999 15.9156 7.30546 13.1683 11.9998 13.1683C16.694 13.1683 20.5 15.9156 20.5 18.3293C20.5 20.7429 16.694 21.9089 11.9998 21.9089Z"
                  fill="#fff"
                />
              </svg>
            ),
            innerText: "Xodimlar",
            handleClick: () => navigate(`/market/${id}/employee`),
          },
        ]}
      />
    </div>
  );
};
