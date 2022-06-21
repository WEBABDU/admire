import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { schema } from "./schema";

import { ModifyLayout } from "Layout/ModifyLayout/ModifyLayout";
import { Input } from "components";
import { useCheckAction } from "hooks/useCheckAction";


export const ModifyMarket = () => {
  const { id } = useParams();
  const type = useCheckAction();


  return (
    <ModifyLayout
      schema={schema}
      breadcrumb={{
        text: "Dokon",
        redirectUrl: "market",
      }}
      action={{
        type,
        getEndPoint: `market/${id}`,
        sumbitEndPoint: id ? `market/${id}/update-market` : "market/new",
        // dataMap: (data) => {},
      }}
    >
      {(formik, showError) => (
        <>
          <Input
            label="savdomarket"
            inputProps={formik.getFieldProps("name")}
            errorText={showError("name")}
          />
          <Input
            type="phone"
            label="+998 (__) ___ __ __"
            inputProps={formik.getFieldProps("phone")}
            errorText={showError("phone")}
          />
          <Input
            label="Toshkent shahar, Olmazor tumani ..."
            inputProps={formik.getFieldProps("address")}
            errorText={showError("address")}
          />
        </>
      )}
    </ModifyLayout>
  );
};
