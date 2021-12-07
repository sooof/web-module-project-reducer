
import {ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, ADD_TO_MEMORY, TOTAL_MEMORY} from "../action"

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

  const reducer = (state, action) => {
    console.log("reducer Here")
      switch (action.type){
        case CHANGE_OPERATION:
            console.log("CHANGE_OPERATION")
            return {...state, operation: action.payload}
        case APPLY_NUMBER:
            console.log("APPLY_NUMBER")
            return {...state, total: state.total + action.payload}
        case ADD_ONE:
            console.log("Add One")
            return {...state, total: state.total + 1}
        case CLEAR_DISPLAY:
            console.log("CLEAR_DISPLAY")
            return {...state, total: 0}    
        case ADD_TO_MEMORY:
            console.log("ADD_TO_MEMORY")
            return {...state, memory: state.total}
        case TOTAL_MEMORY:
            console.log("totalMemory")
            return {...state, memory: state.total + state.memory}
        default:
            return state;
      }
  }
  export default reducer;