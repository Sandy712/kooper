import Image from 'next/image'
import React from 'react'
import ver from "public/vercel.svg"

export default function about() {
  return (
    <>
      <div style={{ height: "5px", display: "flex", justifyContent: "center", alignItems: "flex-start",fontWeight:900,fontSize:"50px" }}>
        About page
      </div>
      <p style={{ marginTop: "50px", height:"500px",display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image
          src='/port.png'
          alt='my image'
          width={400}
          height={300}
        />
      </p>
      

      {/* use image using components */}
      <p style={{ marginTop: "50px", height:"500px",display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image
          src={ver}
          alt='my image'
        />
      </p>
      <p style={{fontSize:"60px"}}>Check the image is working or not according next.js app </p>
    </>
  )
}
