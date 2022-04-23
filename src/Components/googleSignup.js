import React from "react";
import Google from '../Assets/google.gif';
import "./Design/main.css";
import {signup} from '../Firebase/firebase.js';

export default function googleSignup(){
    return(
        <div>
            <picture>
                <div className="signup" >
                    <img onClick={signup} className="cursorSet" width="70px" src={Google}></img>
                    <p onClick={signup} className="cursorSet">Sign in With Google</p>
                </div>
            </picture>
        </div>
    )
}