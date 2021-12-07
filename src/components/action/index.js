export const ADD_ONE = "ADD_ONE" 
export const APPLY_NUMBER = "APPLY_NUMBER" 
export const CHANGE_OPERATION = "CHANGE_OPERATION" 

export const addOne = () => {
    console.log("2 Add One")
    return {type: ADD_ONE}
}

export const  applyNumber = (value) => {
    console.log("2 apply number", value)
    return {type: APPLY_NUMBER, payload: value}
}

export const  change_Operation = (value) => {
    console.log("2 change Operation", value)
    return {type: CHANGE_OPERATION, payload: value}
}