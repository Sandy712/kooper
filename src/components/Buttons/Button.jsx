import React from 'react'
import style from "./button.module.css"
import Link from 'next/link'

export default function Button({url,text}) {
  return (
    <Link href={url}>
        <button className={style.button}>{text}</button>
    </Link>
  )
}
