import React from "react";
import s from "./LeftSection.module.css";
import SwitcherColor from "./switchers/sitcherColor";

export default function LeftSection(props) {
    return (<div className={s.leftSection}>
        <div className={s.leftSection__wrapper}>
            <div className={s.leftSection__logo}>PV</div>
            <SwitcherColor dispatcher={props.dispatcher}/>
        </div>
    </div>)
}
