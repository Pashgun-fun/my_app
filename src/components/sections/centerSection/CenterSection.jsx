import React from "react";
import s from "./CenterSection.module.css";

export default function CenterSection() {

    function hideBlock(e) {
        e.target.closest(`.${s.centerSection}`).classList.toggle(`${s.hideElement}`);
        let nexElement = e.target.closest(`.${s.centerSection}`).nextSibling;
        nexElement.style.flexGrow = 1;
    }

    return (<div className={s.centerSection}>
        <div className={s.hideBlock} onClick={hideBlock}/>
    </div>)
}
