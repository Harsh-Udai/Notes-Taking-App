import React from "react";
import Card from "./MainComponent/card";
import './Design/main.css';

export default function content(){
    return(
        <div>
            <div className="contentText">
                <h1>A Platform to :</h1>
            </div>
            <div className="cardAlign">
                <Card text="Create Code" color="#FF7F50" />
                <Card text="Manage Notes" color="#9FE2BF" />
                <Card text="Share & Collaborate" color="#6495ED" />
            </div>
        </div>
    )
}