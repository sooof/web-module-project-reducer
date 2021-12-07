
import {ADD_ONE} from "../action"

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

  const reducer = (state, action) => {
    console.log("Here")
      switch (action.type){
        
        case ADD_ONE:
            console.log("3 Add One")
            return {...state, total: state.total + action.payload}
        default:
            return state;
      }
  }
  export default reducer;