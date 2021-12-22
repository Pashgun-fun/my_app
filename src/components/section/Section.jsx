import React from "react";
import CenterSection from "../sections/centerSection/CenterSection";
import RightSection from "../sections/rightSection/RightSection";
import LeftSection from "../sections/LeftSection/LeftSection";
import s from "./Sections.module.css";

export default function Sections(){
    return(<div className={s.wrapper}>
        <LeftSection />
        <CenterSection/>
        <RightSection/>
    </div>)
}
