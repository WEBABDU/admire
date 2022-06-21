import React from "react";
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import el from "date-fns/locale/uz"
registerLocale('uz', el)

export const CustomDatePicker = ({
  label,
  inputProps: { value, name },
  formik: { setFieldValue },
  errorText,
}) => {

  
  return (
    <div>
      <label>{label}</label>
      <DatePicker
        selected={new Date(value) || new Date()}
        onChange={(val) => setFieldValue(name, val)}
        timeInputLabel="Vaqt"
        locale={'uz'}
        showTimeInput
        timeFormat="HH:MM"
        timeIntervals={1}
        dateFormat="dd MMMM yyyy HH:MM"
      />
      {errorText && errorText}
    </div>
  );
};
