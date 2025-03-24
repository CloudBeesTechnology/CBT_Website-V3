"use client";
import Link from 'next/link'
import React from 'react'

const ProdLink = () => {
  return (
    <div className="center max-sm:mt-10 mb-20">
<Link href="/products" className="btn">
        Read More   
    </Link>
</div>
  )
}

export default ProdLink
