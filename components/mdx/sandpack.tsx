// @ts-nocheck
import { Sandpack, codesandboxDarkTheme } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

export function Sandpacker(props) {
    return (
        <Sandpack
            //template="react"
            template="vanilla"
            theme="dark"
            {...props}
        // You can change these examples!
        // Try uncommenting any of these lines
        // theme="dark"
        // template="react"
        />
    )
}
