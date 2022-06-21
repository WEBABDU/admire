const OVERLAY_OPENED = "overlay_opened";
const OVERLAY_CLOSED = "overlay_closed";

export const overlayOpenCreator = () => {
  return { type: OVERLAY_OPENED };
};

export const overlayCloseCreator = () => {
  return { type: OVERLAY_CLOSED };
};

export const overlay = (state = false, { type, payload }) => {
  switch (type) {
    case OVERLAY_OPENED:
      return true;
    case OVERLAY_CLOSED:
      return false;
    default:
      return state;
  }
};
