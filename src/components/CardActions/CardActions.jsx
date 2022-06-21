import React, { useRef } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { useCardActions } from "./useCardActions";

import { ConfirmModal } from "components/Modal/ConfirmModal";

import { ReactComponent as ActionsIcon } from "assets/icons/actionsIcon.svg";
import { ReactComponent as EditIcon } from "assets/icons/editIcon.svg";
import { ReactComponent as DeleteIcon } from "assets/icons/deleteIcon.svg";

export const CardActions = ({
  customBtn = [],
  itemName,
  defaultBtn = { edit: true, delete: true },
  deleteObj,
  editPageLink,
}) => {
  const { ref, isOpen, handleOpen, handleDelete, modal } =
    useCardActions(deleteObj);
     


  return (
    <>
      <div className="actions" ref={ref}>
        <button className="actions__btn" onClick={handleOpen}>
          <ActionsIcon />
        </button>

        <div
          className={cn("actions__options", {
            actions__options_active: isOpen,
          })}>
          {customBtn.map((btn, index) => (
            <button
              key={index}
              className="actions__link flex ai-c"
              onClick={btn.handleClick}>
              {btn.icon}
              <span>{btn.innerText}</span>
            </button>
          ))}

          {defaultBtn.edit && (
            <Link className="actions__link flex ai-c" to={`/${editPageLink}`}>
              <EditIcon />
              <span>tuzatish</span>
            </Link>
          )}

          {defaultBtn.delete && (
            <>
              <button
                className="actions__link flex ai-c"
                onClick={handleDelete}>
                <DeleteIcon />
                <span>o'chirish</span>
              </button>
            </>
          )}
        </div>
      </div>
      {modal.isOpen && (
        <ConfirmModal
          title={itemName}
          onDelete={modal.handleAction}
          onClose={modal.handleClose}
        />
      )}
    </>
  );
};
