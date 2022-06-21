import React from "react";
import InputMask from "react-input-mask";

export const Input = ({
  labelClass = "input flex ai-c",
  label,
  type = "text",
  inputProps,
  errorText,
  Icon,
}) => {



  return (
    <div className="input__wrapper">
      <label className={labelClass}>
        {Icon}
        {type === "phone" ? (
          <InputMask
            placeholder={label}
            type="text"
            className="input__field"
            mask="+\9\9\8\ (99\) 999-99-99"
            {...inputProps}
          />
        ) : (
          <input type={type} placeholder={label} {...inputProps} />
        )}
      </label>

      {errorText && <span className="input__error">{errorText}</span>}
    </div>
  );
};
