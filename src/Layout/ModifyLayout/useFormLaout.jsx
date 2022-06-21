import { useState, useEffect } from "react";
import { useFormik } from "formik";

import { request } from "services/api/api";
import { createSchema } from "services/form/createSchema";

export const useFormLayout = (schema, { type, dataMap, getEndPoint }) => {
  const [formData, setFormData] = useState();
  const { initialValues, validationSchema } = createSchema(
    schema,
    formData,
    dataMap
  );

  console.log(initialValues);

  useEffect(() => {
    if (type === "update")
      request.get(getEndPoint).then(({ data }) => setFormData(data.data[0]));
  }, []);

  

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
  });


  return formik;
};

// const test = yup.object().shape({
//   name: yup.number().typeError("INVALID").required("required"),
//   phone: yup
//     .string()
//     .matches(
//       /(?:\+[9]{2}[8] \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2})/g,
//       "Phone number is not valid"
//     )
//     .required("required"),
//   address: yup.string().typeError("INVALID").required("Required"),
// });
