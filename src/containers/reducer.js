import Actions from "./actions";

const initialState = {
  test: {
    items: [],
    isLoading: false,
    // meta: {},
  },
  error: null,
};

export const Api = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.LoadList.TRIGGER: {
      const { entity } = payload;

      return {
        ...state,
        [entity]: {
          isLoading: true,
        },
      };
    }

    case Actions.LoadList.SUCCESS: {
      const { entity, data, appendData } = payload;
      let items;

      if (appendData) {
        if (state[entity]) items = [...state[entity].items, ...data];
        else items = data;
      } else items = data;
      return {
        ...state,
        [entity]: {
          items,
          isLoading: false,
        },
      };
    }

    case Actions.LoadList.FAILURE: {
      const { entity, error } = payload;
      return {
        ...state,
        [entity]: {
          isLoading: false,
        },
        error,
      };
    }

    // ------------------------------------------------------

    case Actions.LoadItem.TRIGGER: {
      const { entity } = payload;

      return {
        ...state,
        [entity]: {
          isLoading: true,
        },
      };
    }

    case Actions.LoadItem.SUCCESS: {
      const { entity, data, appendData } = payload;
      let items;

      if (appendData) {
        if (state[entity]) items = [...state[entity].items, ...data];
        else items = data;
      }

      return {
        ...state,
        [entity]: {
          items,
          isLoading: false,
        },
      };
    }

    case Actions.LoadItem.FAILURE: {
      const { entity, error } = payload;

      return {
        ...state,
        [entity]: {
          isLoading: false,
        },
        error,
      };
    }

    default:
      return { ...state };
  }
};
