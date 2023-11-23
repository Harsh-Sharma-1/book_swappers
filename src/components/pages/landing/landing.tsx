import React from "react";
import Info from "./components/info/info";
import Hero from "./components/hero/hero";
import Section from "./components/section/section";
import { sectionData } from "./sectionData";

const Landing = () => {
    return (
        <>
            <div>
                <div className="mt-10"></div>
                <Info />
                <Hero />
                <hr className="my-14" />
                {sectionData.map((section,i) => (
                    <>
                        <Section key={i} {...section} />
                    </>
                ))}
            </div>
        </>
    );
};

export default Landing;
