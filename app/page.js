import Nav from "@/components/Nav"
import Title from "@/components/title/Title"
import Image from "next/image"
import './globals.css'

export default function Home() {
  return (
    <>
      <Nav />
      <Title arriba="We create beautiful" abajo="and fast services"/> 
      <div className="image">
        <Image src="/heroImage.jpg" width={348} height={145} alt="img"/>
      </div>
      <Title arriba="Story, emotion" abajo="and purpose"/> 
    </>
  )
}
