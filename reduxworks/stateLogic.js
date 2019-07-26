// define ADD, addMessage(), messageReducer(), and store he
const DefaultState=[]
const ADD="ADD";

function addMessage(mess){
    return({
        type:ADD,
        message:mess
    })
}
function messageReducer(state=DefaultState,action){
    switch(action.type){
        case ADD:
        return [...state,action.message];
        default:
        return state;

    }
}

const store = Redux.createStore(messageReducer);