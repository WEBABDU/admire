import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import storage from "services/storage/storage";

import { Button, Input } from "components";

import { ReactComponent as UserIcon } from "assets/icons/userInputIcon.svg";
import { ReactComponent as PasswordIcon } from "assets/icons/passwordInputIcon.svg";
import { useDispatch } from "react-redux";
import { setUserCreator } from "store/user/user";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const apiSuccess = (response) => {
    dispatch(setUserCreator(response.data));
    storage.set("token", response.data.token);
    navigate("/market");
  };

  return (
    <main className="main bg-image">
      <div className="container">
        <h1 className="login__title">Salom!</h1>
        <p className="login__subtitle">Qaytganingizdan xursandmiz</p>

        <div className="row gy-5">
          <div className="col-12">
            <Input
              label="Username"
              labelClass="login__input"
              inputProps={formik.getFieldProps("username")}
              Icon={<UserIcon />}
            />
          </div>

          <div className="col-12">
            <Input
              label="Parol"
              labelClass="login__input"
              type="password"
              inputProps={formik.getFieldProps("password")}
              Icon={<PasswordIcon />}
            />
          </div>
        </div>

        <a href="/login" className="login__forget">
          Parolni unutdingizmi?
        </a>

        <Button
          csutomClass="btn_white"
          innerText="Tizimga kirish"
          api={{
            url: "user/login",
            method: "post",
            options: { data: formik.values },
            onSuccess: apiSuccess,
          }}
        />

        <div className="login__other">Boshqa tizim orqali kirish</div>

        <div className="login__social flex jc-c">
          <img
            src={require("assets/images/google.png")}
            alt="google"
            className="login__social-img"
          />
        </div>

        <div className="login__register flex jc-sb">
          <span>Tizimda yo’qmisiz?</span>
          <a href="/login">
            Ro’yxatdan o’tish
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path
                d="M1 1L5 5L1 9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
};
