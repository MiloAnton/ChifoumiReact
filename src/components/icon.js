import React from "react";
import "./../App.css";

export default function IconFct({value}) {
    return (
        <img 
            src={`https://avatars.dicebear.com/api/micah/${value}.svg`}
            style={{
                height:"200px",
                width:"200px",
                marginBottom:"20px",
                //animation: "App-logo-spin infinite 3s linear",
            }}
        />
    );
}