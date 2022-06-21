export const showError = (formik, prop) => {
  const { touched, error } = formik.getFieldMeta(prop);

  return touched && error && error;
};
