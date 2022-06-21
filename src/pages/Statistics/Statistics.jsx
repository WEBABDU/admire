import React from "react";
import { Link } from "react-router-dom";

import { Footer } from "components";

export const Statistics = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="flex ai-c jc-sb">
            <Link to="/market">
              <img src={require("assets/images/logo.png")} alt="logo" />
            </Link>

            <div className="breadcrumb" style={{ flex: "0 0 68%" }}>
              Statistikalar
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="row g-5">
            <div className="col-12">
              <Link to="/statistics/today" className="flex ai-c jc-sb">
                <div className="statistics__field flex ai-c">
                  <img
                    src={require("assets/images/statistics-today.png")}
                    alt="statistics"
                  />
                  Bugungi ko’rsatkichlari
                </div>

                <img
                  src={require("assets/icons/arrowRight.svg").default}
                  alt="arrowRight"
                />
              </Link>
            </div>

            <div className="col-12">
              <Link to="/statistics/today" className="flex ai-c jc-sb">
                <div className="statistics__field flex ai-c">
                  <img
                    src={require("assets/images/statistics-market.png")}
                    alt="statistics"
                  />
                  Do’konlar ko’rsatkichlari
                </div>

                <img
                  src={require("assets/icons/arrowRight.svg").default}
                  alt="arrowRight"
                />
              </Link>
            </div>

            <div className="col-12">
              <Link to="/statistics/today" className="flex ai-c jc-sb">
                <div className="statistics__field flex ai-c">
                  <img
                    src={require("assets/images/statistics-product.png")}
                    alt="statistics"
                  />
                  Maxsulotlar ko’rsatkichlari
                </div>

                <img
                  src={require("assets/icons/arrowRight.svg").default}
                  alt="arrowRight"
                />
              </Link>
            </div>

            <div className="col-12">
              <Link to="/statistics/today" className="flex ai-c jc-sb">
                <div className="statistics__field flex ai-c">
                  <img
                    src={require("assets/images/statistics-diller.png")}
                    alt="statistics"
                  />
                  Dillerlar ko’rsatkichlar
                </div>

                <img
                  src={require("assets/icons/arrowRight.svg").default}
                  alt="arrowRight"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
