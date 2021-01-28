const changeUserReducer = (state = null,action) => {
    switch(action.type){
        case "CHANGED":
            return action.payload;
        default:
            return state
    }
}

export default changeUserReducer;