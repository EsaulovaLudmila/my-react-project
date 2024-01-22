import React from 'react';

type PropsType ={
    on: boolean
}


export const OnOff = (props: PropsType) => {
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red",
        margin: "2px",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "red",
        marginLeft: "5px",
    }
    return (
        <div>
            <div style={onStyle}>ON</div>
            <div style={offStyle}>OFF</div>
            <div style={indicatorStyle}></div>


        </div>
    );
};


