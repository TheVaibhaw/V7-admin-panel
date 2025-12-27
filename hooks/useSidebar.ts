"use client";

import { useSidebarStore } from "@/lib/store";
import { useMediaQuery } from "./useMediaQuery";
import { useEffect } from "react";

export function useSidebar() {
    const { isOpen, toggle, close, open } = useSidebarStore();
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        if (isMobile) {
            close();
        } else {
            open();
        }
    }, [isMobile, close, open]);

    return { isOpen, toggle, close, open, isMobile };
}
