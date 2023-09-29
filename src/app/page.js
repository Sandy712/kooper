import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div style={{ height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <a style={{ backgroundColor: "pink", fontSize: "80px" }}><strong>Welcome to My World</strong></a>
    </div>
  )
}
