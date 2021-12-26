import React from "react";
import s from "./RightSection.module.css";

export default function RightSection(props) {

    function hideBlock(e) {
        if (e.target.classList.contains(`${s.hideBlock}`)) {
            e.target.parentElement.classList.toggle(`${s.hideElement}`);
        }
    }

    return (<div className={s.rightSection}>
        <div className={s.hideBlock} onClick={hideBlock}/>
    </div>)
}
