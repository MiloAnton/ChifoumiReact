import React from "react";
import './button.css';

export default function Button({ value }) {
    return ( 
        <button 
            className="button-30"
        >
            {value}
        </button>
    );
}