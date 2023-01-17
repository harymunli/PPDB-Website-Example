import React from "react";
import styles from '../styles/input.module.css'

export default function Input(props){
    return(
        <div className="flex-row justify-center mx-auto flex-start">
            <label for={props.label} className="block ml-4">{props.label}<span className="text-red-600 round-end-3 h-[30px]">*</span></label>
            <input id={props.label} type="text" className="rounded-full border-4 w-[600px] h-[65px] px-4"></input>
        </div>
    )
}