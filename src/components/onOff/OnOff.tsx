import React, {useState} from 'react';

type PropsType ={
    //on: boolean
}



export const OnOff = (props: PropsType) => {

    let [on, setOn]=useState(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
        margin: "2px",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "red",
        marginLeft: "5px",
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>ON</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>OFF</div>
            <div style={indicatorStyle} ></div>
        </div>
    );
};


