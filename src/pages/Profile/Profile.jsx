import { Footer, Switch } from "components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as RightIcon } from "assets/icons/rightIcon.svg";
import { ReactComponent as UzbekistanIcon } from "assets/icons/uzbekistanIcon.svg";
import { ReactComponent as UkIcon } from "assets/icons/ukIcon.svg";
import { ReactComponent as RussiaIcon } from "assets/icons/russiaIcon.svg";

export const Profile = () => {
  const langs = [
    { icon: <UzbekistanIcon />, locale: "uz" },
    { icon: <RussiaIcon />, locale: "ru" },
    { icon: <UkIcon />, locale: "en" },
  ];
  const [selected, setSelected] = useState(langs[0].locale);

  const handleSelect = (locale) => {
    setSelected(locale);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="flex ai-c jc-sb">
            <Link to="/market">
              <img src={require("assets/images/logo.png")} alt="logo" />
            </Link>

            <div className="breadcrumb" style={{ flex: "0 0 68%" }}>
              Profil
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="profile__info row">
            <div className="col-12">
              <div className="flex jc-sb ai-c">
                <div className="flex ai-c">
                  <img
                    src={require("assets/images/profileImage.png")}
                    alt="user__image"
                    className="profile__image"
                  />
                  <div className="profile__bio">
                    <h2>User Name</h2>
                    <span>Name</span>
                  </div>
                </div>
                <RightIcon />
              </div>
            </div>
          </div>
          <div className="profile__language mt-16">
            <h3>Dastur tilini o’zgartiting</h3>
            <div className="profile__profile__languageTitle flex">
              {langs.map((lang) => (
                <li onClick={() => handleSelect(lang.locale)} key={lang.locale}>
                  {selected === lang.locale && <div className="outline"></div>}
                  {lang.icon}
                </li>
              ))}
            </div>
          </div>
          <div className="row mt-35 g-4">
            <div className="col-12">
              <div className="flex ai-c jc-sb">
                <div className="profile__field flex ai-c">
                  <img
                    src={require("assets/icons/createIcon.svg").default}
                    alt="statistics"
                  />
                  Maxsulot qo’shish
                </div>

                <img
                  src={require("assets/icons/arrowRight.svg").default}
                  alt="arrowRight"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="flex ai-c jc-sb">
                <div className="profile__field flex ai-c">
                  <img
                    src={require("assets/icons/notifacationIcon.svg").default}
                    alt="statistics"
                  />
                  Xabarnomalar
                </div>

                <img
                  src={require("assets/icons/arrowRight.svg").default}
                  alt="arrowRight"
                />
              </div>
            </div>
              <div className="col-12">
            <Switch> 
                <div className="flex ai-c jc-sb">
                  <div className="profile__field flex ai-c">
                    <img
                      src={require("assets/icons/themeIcon.svg").default}
                      alt="statistics"
                    />
                    To’q mavzu
                  </div>

                
                </div>
            </Switch>
              </div>
          </div>
          <div className="logout__button row gy-5">
            <div className="col-12">
              <div className="flex ai-c jc-sb">
                <div className="logout__icon flex ai-c">
                  <img
                    src={require("assets/icons/logoutIcon.svg").default}
                    alt="log__out"
                  />
                  <span>Dasturdan chiqib ketish</span>
                </div>
                <img
                  src={require("assets/icons/arrowRight.svg").default}
                  alt="arrowRight"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
