import React from "react";

import { Modal } from "./Modal";

export const ConfirmModal = ({ title, onDelete, onClose }) => (
  <Modal onClose={onClose}>
    {(close) => (
      <>
        <h4 className="modal__title">
          <span>{title}</span> ni o’chirmoqchimisiz ?
        </h4>

        <div className="flex ai-c">
          <button
            className="modal__btn modal__danger"
            onClick={() => {
              close();
            }}>
            YO’Q
          </button>
          <button
            className="modal__btn modal__success"
            onClick={() => {
              close();
              onDelete && onDelete();
            }}>
            HA
          </button>
        </div>
      </>
    )}
  </Modal>
);
