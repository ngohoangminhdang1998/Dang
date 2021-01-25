
const isState = {
    SessionUser : ''
};
const rootReducer = (state = isState, action) => {
    //console.log(action);
    if(action.type === 'GET_SESSION_USER'){
            state.SessionUser = action.payload;
        return ({...state,
        SessionUser: action.payload});
    }
    return state;
}
export default rootReducer;
