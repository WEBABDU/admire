import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { request } from "services/api/api";
import { useOutsideClick } from "hooks/useOutsideClick";
import { useModal } from "hooks/useModal";

export const useCardActions = (deleteObj) => {
  const ref = useRef();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const modal = useModal();



  const handleOpen = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleDelete = () => {
    modal.handleOpenModal()
    setIsOpen(false);
  };

  const handleAction = () => {
    request
      .post(deleteObj.url, [deleteObj.data])
      .then((e) => dispatch({ type: "RENDER/ON" }));
  };

  useOutsideClick(ref, (e) => {
    setIsOpen(false);
  });

  return {
    ref,
    isOpen,
    handleOpen,
    handleDelete,
    modal: {
      isOpen: modal.isOpen,
      handleAction,
      handleClose: modal.handleCloseModal,
    },
  };
};
