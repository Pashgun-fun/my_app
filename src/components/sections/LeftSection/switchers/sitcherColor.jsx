import React from "react";
import s from "./switcherColor.module.css"

export default function SwitcherColor(props) {
    function updateColor() {
        props.dispatcher({type: 'UPDATE_COLOR', value: 'black'})
    }

    return(<div className={s.switcherColor}>
        <div className={s.switcherColor__red}></div>
        <div className={s.switcherColor__black}></div>
        <div className={s.switcherColor__white}></div>
    </div>)
}