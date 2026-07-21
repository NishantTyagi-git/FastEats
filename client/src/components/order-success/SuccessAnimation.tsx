"use client";

import Lottie from "lottie-react";
import animation from "@/../public/lottie/Success.json";

export default function SuccessAnimation() {
    return (
        <div className="mx-auto w-52">
            <Lottie
                animationData={animation}
                loop={false}
            />
        </div>
    );
}