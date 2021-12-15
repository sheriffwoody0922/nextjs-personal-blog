// @ts-nocheck
import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Image from 'next/image'

export const ResponsiveImage = props => (
    <Image alt={props.alt} layout="responsive" {...props} loading="lazy" />
)

export default function ImageZoom(props){
    const [isZoomed, setIsZoomed] = useState(false)

    const handleImgLoad = useCallback(() => {
        setIsZoomed(true)
    }, [])

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, [])

    return (
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange} id="ccc"
        overlayBgColorEnd="rgba(0,0,0,0.6)"
        overlayBgColorStart="rgba(0,0,0,0.6)"
        >
            <img
                alt={props.alt}
                onClick={handleImgLoad}
                src={props.src}
                width="100%"
                style={{maxWidth:1400}}
                className="rounded-lg"
                loading="lazy"
            />
        </ControlledZoom>
    )
}
