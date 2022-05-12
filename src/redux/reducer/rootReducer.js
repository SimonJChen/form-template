const rootReducer =  (state, action) => {
    switch (action.type){
        case "submit":
            let newlist=state.items;
            newlist.push(action.val)
            return{
                ...state,
                items:newlist
            }
        default:return state;
    }
}

export default rootReducer;