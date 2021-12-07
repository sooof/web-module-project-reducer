export const ADD_ONE = "ADD_ONE" 
export const APPLY_NUMBER = "APPLY_NUMBER" 

export const addOne = () => {
    console.log("2 Add One")
    return {type: ADD_ONE}
}



export const  applyNumber = (value) => {
    console.log("2 Add number", value)
    return {type: APPLY_NUMBER, payload: value}
}