'use client';

import { NextUIProvider as Provider } from "@nextui-org/react"
import { ReactNode } from "react"

function NextUiProvider({ children }: { children: ReactNode }) {

    return (
        <Provider>
            {children}
        </Provider>
    )
}

export default NextUiProvider