import React from "react";

export const MarketInfo = ({ marketName, marketPhone }) => {
  return (
    <>
      <div className="container mb-25">
        <div className="market-single__logo">
          <img src={require("assets/images/makro.jpg")} alt="marketLogo" />
        </div>

        <h1 className="market-single__title">{marketName}</h1>

        <div className="row g-4 jc-c">
          <div className="col-6">
            <a
              href={`tel: ${marketPhone}`}
              className="market-single__contacts call flex jc-c"
            >
              <img
                src={require("assets/icons/phone.svg").default}
                alt="phone"
              />
              Qo’ng’iroq
            </a>
          </div>

          <div className="col-6">
            <a href="#" className="market-single__contacts location flex jc-c">
              <img
                src={require("assets/icons/location.svg").default}
                alt="location"
              />
              manzil
            </a>
          </div>

          <div className="col-6">
            <a href="#" className="market-single__contacts location flex jc-c">
              copy link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
