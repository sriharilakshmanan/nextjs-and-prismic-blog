"use client";
import { useCallback, useContext } from "react";
import { useRouter } from "next/navigation";
import { OriginContext } from "./OriginTracker";

function OtherComponent() {
    const router = useRouter();
    const isWithinPage = useContext(OriginContext);

    const onClick = useCallback(() => {
        console.log("isWithinPage: ", isWithinPage);
    }, [isWithinPage]);

    return (
        <section className="text-center text-red-800">
            <button onClick={onClick}>Is within page?</button>
        </section>
    );
}

export default OtherComponent;
