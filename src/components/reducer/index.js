
import {ADD_ONE, APPLY_NUMBER} from "../action"

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

  const reducer = (state, action) => {
    console.log("reducer Here")
      switch (action.type){
        case APPLY_NUMBER:
            console.log("APPLY_NUMBER")
            return {...state, total: state.total + action.payload}
        case ADD_ONE:
            console.log("3 Add One")
            return {...state, total: state.total + 1}
        default:
            return state;
      }
  }
  export default reducer;