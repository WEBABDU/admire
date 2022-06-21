import React from "react";
import { useSelector} from "react-redux";


export const Overlay = () => {

  const isOverlayOpened = useSelector((state) => state.overlay);


  return isOverlayOpened ? <div className="overlay"></div> : null;
};
