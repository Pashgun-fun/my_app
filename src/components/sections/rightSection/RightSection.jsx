import React from "react";
import s from "./RightSection.module.css";

export default function RightSection() {

    function hideBlock(e) {
        e.target.closest(`.${s.rightSection}`).classList.toggle(`${s.hideElement}`);
    }

    return (<div className={s.rightSection}>
        <div className={s.hideBlock} onClick={hideBlock}/>
    </div>)
}
