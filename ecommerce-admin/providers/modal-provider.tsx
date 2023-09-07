"use client"
import  { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect (() => {
        setIsMounted(true);
    }, []);
    //if not mounted return nulls so there isn't any hydration errors.
    if(!isMounted) {
        return null;
    }

    return (
        <>
        <StoreModal/>
        </>
    )
    
}