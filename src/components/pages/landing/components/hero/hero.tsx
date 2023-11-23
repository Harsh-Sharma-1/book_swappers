import React from "react";
import heroImage from "./assets/hero.png";

const Hero = () => {
    return (
        <div className="w-full mt-3 p-4 flex justify-center">
            <img
                className="w-full max-w-5xl"
                src="./assets/landing/hero.png"
            />
        </div>
    );
};

export default Hero;
