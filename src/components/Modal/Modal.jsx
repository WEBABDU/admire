import React from "react";
import { useDispatch } from "react-redux";

import { overlayCloseCreator } from "store/overlay/overlay";

export const Modal = ({ children, onClose }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(overlayCloseCreator());
    onClose && onClose();
  };

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children(handleClose)}
      </div>
    </div>
  );
};
