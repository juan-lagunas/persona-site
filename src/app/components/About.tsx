import Image from "next/image"


export default function About() {
    return(
        <section className="h-fit max-w-[1450px] mx-auto">
            <div className="relative aspect-video w-full mx-auto">
                <Image fill alt="picture of Juan and Jenny" src="/images/header-1.jpeg"></Image>
            </div>
            <p className="text-sm font-thin italic text-[#cfcfcf] mb-2">A picture of my fiancé and I during the 2024 total solar eclipse in Carbondale, Illinois.</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-2">Hello, World!</h1>
            <div className="md:text-lg lg:text-2xl ">
                My name is <a href="#" className="font-bold">Juan Alberto Lagunas-Lara</a>, but to my family, I&apos;m known as Betillo or Tillo (&quot;Tee-yo&quot;).
                I&apos;m an enthusiastic electrical engineering student who&apos;s deeply into robotics and passionate about empowering my Mexican community. I&apos;ve always been curious about how things work, and I love learning as much as I enjoy sharing what I&apos;ve picked up along the way.

                If you&apos;re here to connect, collaborate, or just see what I&apos;m up to, then you&apos;re in the right place.
            </div>
        </section>
    )
}