"use client";

import { useNavigationEvent } from "@/lib/useNavigationEvent";
import { useState, createContext, useEffect, useRef } from "react";

export const OriginContext = createContext(false);

export default function OriginTracker({ children }) {
    const [isWithinPage, setIsWithinPage] = useState(false);
    useNavigationEvent({
        onPathnameChange: () => setIsWithinPage(true),
    });
    return (
        <OriginContext.Provider value={isWithinPage}>
            {children}
        </OriginContext.Provider>
    );
}
