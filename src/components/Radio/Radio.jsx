import React from "react";

export const Radio = ({ options, inputProps, label, value }) => {


  return (
    <>
      <label className="flex ai-c">
        <input  type="radio" {...inputProps} id={label} value={value} />
        {label}
      </label>
    </>
  );
};
