import { useLocation } from "react-router-dom";

export const useCheckAction = () => {
  const location = useLocation();
  let type = "";

  location.pathname.split("/").forEach((item) => {
    // console.log(item);
    if (item === "create") type = "create";
    if (item === "update") type = "update";
  });

  return type;
};
