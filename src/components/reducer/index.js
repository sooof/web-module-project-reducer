
import {ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION} from "../action"

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
            console.log("Add One")
            return {...state, total: state.total + 1}
        case CHANGE_OPERATION:
                console.log("CHANGE_OPERATION")
                return {...state, operation: action.payload}
        default:
            return state;
      }
  }
  export default reducer;