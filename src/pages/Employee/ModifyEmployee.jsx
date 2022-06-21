import React from "react";
import { useParams } from "react-router-dom";

import { schema } from "./schema";

import { ModifyLayout } from "Layout/ModifyLayout/ModifyLayout";
import { Input } from "components";
import { useCheckAction } from "hooks/useCheckAction";

export const ModifyEmployee = () => {
  const { id } = useParams();
  const type = useCheckAction();

  return (
    <ModifyLayout
      schema={schema}
      breadcrumb={{
        text: "Xodimlar",
        redirectUrl: `market/${id}/employee`,
      }}
      action={{
        type,
        sumbitEndPoint: `market/${id}/new-employee`,
      }}>
      {(formik, showError) => (
        <>
          <Input
            label="Aziz"
            inputProps={formik.getFieldProps("first_name")}
            errorText={showError("first_name")}
          />
          <Input
            label="Athamov"
            inputProps={formik.getFieldProps("last_name")}
            errorText={showError("last_name")}
          />
          <Input
            type="phone"
            label="+998 (__) ___ __ __"
            inputProps={formik.getFieldProps("phone")}
            errorText={showError("phone")}
          />
        </>
      )}
    </ModifyLayout>
  );
};
