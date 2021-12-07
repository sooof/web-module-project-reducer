export const ADD_ONE = "ADD_ONE" 

export const addOne = (value) => {
    console.log("2 Add One")
    return {type: ADD_ONE, payload: value}
}