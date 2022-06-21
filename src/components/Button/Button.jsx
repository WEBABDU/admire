import React, { useState } from "react";
import cn from "classnames";

import { request } from "services/api/api";

export const Button = ({
  csutomClass = "btn_blue",
  innerText,
  api,
  onClick,
  disabled = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleApiCall = async () => {
    setIsLoading(true);
    const { url, method = "get", options = {}, onError, onSuccess } = api;

    try {
      const response = await request({ url, method, ...options });
      onSuccess && onSuccess(response.data);

      setIsLoading(false);
    } catch (e) {
      onError && onError(e);
      setIsLoading(false);
    }
  };

  const handleClick = (e) => {
    api && handleApiCall();
    onClick && onClick(e);
  };

  return (
    <button
      className={cn("btn", csutomClass, { btn_disabled: disabled })}
      disabled={disabled}
      onClick={handleClick}>
      {isLoading ? <div className="btn__spinner"></div> : innerText}
    </button>
  );
};
