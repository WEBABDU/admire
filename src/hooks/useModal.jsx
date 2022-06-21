import { useState } from "react";
import { useDispatch } from "react-redux";
import { overlayOpenCreator } from "store/overlay/overlay";

export const useModal = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    dispatch(overlayOpenCreator());
    console.log(isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return { isOpen, handleOpenModal, handleCloseModal };
};
