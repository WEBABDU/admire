const SET_USER = 'SET_USER/user'


const initialState = {
  user: null,
};



export const user = (state = initialState, {type, payload}) => {
    switch(type){
        case SET_USER: {
            return {
                ...state,
                user: payload
            }
        }
        default: return state
    }
}



export const setUserCreator = (data) => ({
    type: SET_USER,
    payload: data
})