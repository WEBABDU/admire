const CHANGE_SEARCH_PARAMS = "CHANGE_SEARCH_PARAMS";

export const serachParamsCreator = (payload) => {
  return {
    type: CHANGE_SEARCH_PARAMS,
    payload,
  };
};

export const searchParams = (state = {}, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCH_PARAMS:
      return {
        ...state,
        searchProp: payload.propName,
        serachValue: payload.value,
      };

    default:
      return { ...state };
  }
};
