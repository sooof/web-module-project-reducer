import React from 'react';

const CalcButton = (props) => {
    const { value, onClick = (e)=>{}, size = 4} = props;
    const handleChange = () =>{
        console.log("CalcButton", value)
        onClick(value)
    }
    return(<div className={`col-xs-${size}`}>
        <button value={value} type="button" onClick={handleChange} className="btn">{value}</button>
    </div>);
}

export default CalcButton;