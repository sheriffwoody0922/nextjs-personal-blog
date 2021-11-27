import React from 'react'
import Image from 'next/image'

import gradient from '../public/logo/webmeister-gradient-logo.webp'

export function WebmeisterGradientLogo({ className, ...props }) {
    const myclass = `relative  mr-8 ${className ? className : "h-12 w-12"}`
    return (
        <Image
            layout="intrinsic"
            width={32}
            height={32}
            className={myclass}
            src={gradient}
            alt="webmeister"
            loading="eager"
            {...props}
        />
  )
}
