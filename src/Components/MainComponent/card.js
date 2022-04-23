import React from "react";
import '../Design/card.css';

export default function card(props){
    return(
        <div className="cardDesign">
            <div>
                <div style={{backgroundColor:`${props.color}`}} className="cardBar">
                    
                </div>
            </div>
            
            <h1 className="cardblock" >{props.text}</h1>
            
            
        </div>
        
    )
}