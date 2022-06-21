import React from "react";
import { useNavigate } from "react-router-dom";

import { useFormLayout } from "./useFormLaout";
import { showError } from "services/form/showError";

import { BreadCrumb, Button } from "components";

export const ModifyLayout = ({
  children,
  schema,
  breadcrumb = {},
  action = {},
}) => {
  const navigate = useNavigate();

  const formik = useFormLayout(schema, action);

  console.log(formik);

  const showInputError = (fieldName) => showError(formik, fieldName);

  const phone = formik.values?.phone?.replace(/[^+\d]/g, "");

  let data = {...formik.values};

  if ("phone" in formik.values) {
    data = {
      ...data,
      phone,
    };
  }

  console.log(data);

  return (
    <>
      <BreadCrumb redirectUrl={breadcrumb.redirectUrl} text={breadcrumb.text} />

      <main className="main-create">
        <div className="container">
          <div className="flex create-layout">
            <div className="wrapper">{children(formik, showInputError)}</div>

            <Button
              innerText="qo’shish"
              csutomClass="btn_blue"
              disabled={!(formik.isValid && formik.dirty)}
              api={{
                url: action.sumbitEndPoint,
                method: "post",
                onSuccess: () => navigate(`/${breadcrumb.redirectUrl}`),
                options: { data },
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};
