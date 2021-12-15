// @ts-nocheck
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

type LivePreviewProps = {
    code: JSX.Element | string
}

export function LiveProvide(props: LivePreviewProps) {
    return (
        <LiveProvider code={props.code}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>
    )
}
