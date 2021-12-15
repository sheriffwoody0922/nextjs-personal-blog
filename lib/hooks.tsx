import React from "react"
import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
const isClient = !!(
    typeof window !== 'undefined'
    && window.document
    && window.document.createElement
);

// Hook
export function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}

export function useWindowSize(initialWidth, initialHeight) {
    const [windowSize, setWindowSize] = useState({
        width: isClient ? window.innerWidth : initialWidth,
        height: isClient ? window.innerHeight : initialHeight,
    });


    useEffect(() => {
        function resizeHandler() {
            if (windowSize.width !== window.innerWidth || windowSize.height !== window.innerHeight) {
                setWindowSize({ width: window.innerWidth, height: window.innerHeight })
            }
        }
        window.addEventListener("resize", resizeHandler)
        return () => window.removeEventListener("resize", resizeHandler)
    })

    return windowSize;
}


export const useDimensions = ref => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;
}

export const useHasMounted = (): boolean => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    return hasMounted
}


/*
const myref = React.createRef()
const [boxRef, coordinates] = usePointerTracker(myref)
*/
export function usePointerTracker(reference) {
    const [pointerCoordinates, setPointerCoordinates] = useState({ x: 0, y: 0 })
    const [isActive, setIsActive] = useState(false)

    function update(event) {
        //console.log("update: ", event.pageX, event.pageY)
        if (isActive) {
            if (pointerCoordinates.x !== event.pageX || pointerCoordinates.y !== event.pageY) {
                setPointerCoordinates({ x: event.pageX, y: event.pageY - 64 })
            }
        }
    }
    const activate = () => setIsActive(true)
    const deactivate = () => setIsActive(false)

    useEffect(() => {
        if (reference.current) {
            reference.current.addEventListener("mouseenter", activate)
            reference.current.addEventListener("mouseleave", deactivate)
        }
        return () => {
            if (reference.current) {

                reference.current.removeEventListener("mouseenter", activate)
                reference.current.removeEventListener("mouseleave", deactivate)
            }
        }
    }, [reference.current])

    // Track position if active
    useEffect(() => {
        if (isActive) {
            reference.current.addEventListener("mousemove", update)
        }
        else {
            reference.current.removeEventListener("mousemove", update)
        }
    }, [isActive])

    return [reference, pointerCoordinates, isActive]
}


export function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );

    return debouncedValue;
}
// const value = useDebounce(val, 500)




export type Status = 'idle' | 'loading' | 'ready' | 'error'
export type ScriptElt = HTMLScriptElement | null

export function useScript(src: string): Status {
    const [status, setStatus] = useState<Status>(src ? 'loading' : 'idle')

    useEffect(
        () => {
            if (!src) {
                setStatus('idle')
                return
            }

            // Fetch existing script element by src
            // It may have been added by another instance of this hook
            let script: ScriptElt = document.querySelector(`script[src="${src}"]`)

            if (!script) {
                // Create script
                script = document.createElement('script')
                script.src = src
                script.async = true
                script.setAttribute('data-status', 'loading')
                // Add script to document body
                document.body.appendChild(script)

                // Store status in attribute on script
                // This can be read by other instances of this hook
                const setAttributeFromEvent = (event: Event) => {
                    script?.setAttribute(
                        'data-status',
                        event.type === 'load' ? 'ready' : 'error',
                    )
                }

                script.addEventListener('load', setAttributeFromEvent)
                script.addEventListener('error', setAttributeFromEvent)
            } else {
                // Grab existing script status from attribute and set to state.
                setStatus(script.getAttribute('data-status') as Status)
            }

            // Script event handler to update status in state
            // Note: Even if the script already exists we still need to add
            // event handlers to update the state for *this* hook instance.
            const setStateFromEvent = (event: Event) => {
                setStatus(event.type === 'load' ? 'ready' : 'error')
            }

            // Add event listeners
            script.addEventListener('load', setStateFromEvent)
            script.addEventListener('error', setStateFromEvent)

            // Remove event listeners on cleanup
            return () => {
                if (script) {
                    script.removeEventListener('load', setStateFromEvent)
                    script.removeEventListener('error', setStateFromEvent)
                }
            }
        },
        [src], // Only re-run effect if script src changes
    )

    return status
}

type AttrType = {
    key: string;
    value: string;
}
type UseAdvancedScriptProps = {
    enabled: boolean;
    src: string;
    content: string;
    attrs: AttrType[]
}

export function useAdvancedScript(props: UseAdvancedScriptProps): Status {
    const { enabled, src, content, attrs } = props;
    const [status, setStatus] = useState<Status>(props.src ? 'loading' : 'idle')
    let script: ScriptElt;
    const setStateFromEvent = (event: Event) => {
        setStatus(event.type === 'load' ? 'ready' : 'error')
    }
    useEffect(
        () => {
            if (!src) {
                setStatus('idle')
                return
            }
            if (enabled) {
                // Fetch existing script element by src
                // It may have been added by another instance of this hook
                script  = document.querySelector(`script[src="${src}"]`)

                if (!script) {
                    // Create script
                    script = document.createElement('script')

                    // Inner content
                    if (content) {
                        script.innerHTML = content
                    }

                    // Custom attributes
                    if (attrs && attrs.length > 0) {
                        attrs.map(attr => {
                            script?.setAttribute(attr.key, attr.value)
                        })
                    }
                    script.src = src
                    script.async = true
                    script.setAttribute('data-status', 'loading')
                    // Add script to document body
                    document.body.appendChild(script)

                    // Store status in attribute on script
                    // This can be read by other instances of this hook
                    const setAttributeFromEvent = (event: Event) => {
                        script?.setAttribute(
                            'data-status',
                            event.type === 'load' ? 'ready' : 'error',
                        )
                    }

                    script.addEventListener('load', setAttributeFromEvent)
                    script.addEventListener('error', setAttributeFromEvent)
                } else {
                    // Grab existing script status from attribute and set to state.
                    setStatus(script.getAttribute('data-status') as Status)
                }

                // Script event handler to update status in state
                // Note: Even if the script already exists we still need to add
                // event handlers to update the state for *this* hook instance.


                // Add event listeners
                script.addEventListener('load', setStateFromEvent)
                script.addEventListener('error', setStateFromEvent)
            }
            // Remove event listeners on cleanup
            return () => {
                if (script) {
                    script.removeEventListener('load', setStateFromEvent)
                    script.removeEventListener('error', setStateFromEvent)
                }
            }
        },
        [src], // Only re-run effect if script src changes
    )

    return status
}
export default useScript
