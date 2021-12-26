import React from "react";
import CenterSection from "../sections/centerSection/CenterSection";
import RightSection from "../sections/rightSection/RightSection";
import LeftSection from "../sections/LeftSection/LeftSection";
import s from "./Sections.module.css";

export default function Sections(props){
    return(<div className={s.wrapper}>
        <LeftSection state = {props.state} dispatcher = {props.dispatch}/>
        <CenterSection state = {props.state}/>
        <RightSection state = {props.state}/>
    </div>)
}
