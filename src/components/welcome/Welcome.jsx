import React from "react";
import s from "./Welcome.module.css";

export default function Welcome(props) {

    React.useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(`.${s.welcome}`).remove();
        },3000)
    })

    return(<div className={s.welcome}>{props.name}<br/><span>{props.profession}</span></div>)
}
