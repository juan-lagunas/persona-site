import Image from "next/image"


export default function About() {
    return(
        <div className="h-fit max-w-[1000px] mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-2">Hello, World!</h1>
            <div className="md:text-xl mb-10">
                My name is <a href="#" className="font-bold text-[#D99748] hover:scale-105">Juan Alberto Lagunas-Lara</a>, but to my family, I'm known as Betillo or Tillo ("Tee-yo").
                I'm an enthusiastic electrical and computer engineering student, with an interest in robotics and a strong desire to empower my Mexican community.
                My passions extend to both <a href="#" className="text-blue-600">acquiring knowledge</a> and <a href="#" className="text-blue-600">sharing it with others</a>.
            </div>
            <div className="relative aspect-video w-full mx-auto">
                <Image fill alt="picture of Juan and Jenny" src="/images/header-1.jpeg"></Image>
            </div>
            <p className="text-[8px] md:text-[12px] font-thin italic text-[#cfcfcf]">A picture of my fiancé and I during the 2024 total solar eclipse in Carbondale, Illinois.</p>
        </div>
    )
}