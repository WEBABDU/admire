export const render = (state = { isRender: false }, { type, payload }) => {
  switch (type) {
    case "RENDER/ON":
      return { ...state, isRender: !state.isRender };

    default:
      return { ...state };
  }
};
