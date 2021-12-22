import React from "react";
import LeftSection from "../sections/leftSection/LeftSection";
import RightSection from "../sections/rightSection/RightSection";
import s from "./Sections.module.css";

export default function Sections(){
    return(<div className={s.wrapper}>
        <LeftSection/>
        <RightSection/>
    </div>)
}