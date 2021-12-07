import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from './reducer';
import {addOne, applyNumber, change_Operation} from './action'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleAdd = () =>{
    console.log("Add One")
    dispatch(addOne())
  }
  const handleapplyNumber = (value) => {
    console.log("handleapplyNumber ", value) 
    dispatch(applyNumber(value))
  }
  const handleapplyOperation = (value) => {
    console.log("handleapplyNumber ", value) 
    dispatch(change_Operation(value))
  }
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1}  onClick={handleAdd} />
              <CalcButton value={2}  onClick={handleapplyNumber}/>
              <CalcButton value={3}  onClick={handleapplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleapplyNumber}/>
              <CalcButton value={5} onClick={handleapplyNumber}/>
              <CalcButton value={6} onClick={handleapplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleapplyNumber}/>
              <CalcButton value={8} onClick={handleapplyNumber}/>
              <CalcButton value={9} onClick={handleapplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleapplyOperation}/>
              <CalcButton value={"*"} onClick={handleapplyOperation}/>
              <CalcButton value={"-"} onClick={handleapplyOperation}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
