import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return(
        <div className="h-[450px] flex items-center">
            <div className="flex items-center bg-white rounded-3xl overflow-hidden">
                <div className="w-2/3 flex-1 text-2xl text-left px-10">
                    <h1 className="text-5xl pb-3 font-bold">Hello, World!</h1> 
                    <div className="">
                        My name is Juan Alberto Lagunas Lara, but to my family, I'm known as Betillo or Tillo ("Tee-yo") for short.
                        I'm an enthusiastic electrical and computer engineering student, with an interest in robotics and a strong desire to empower my Mexican community.
                        My passions extend to both acquiring knowledge and sharing it with others.
                    </div>
                </div>

                <div className="w-1/3 h-full flex items-center justify-end">
                    <div className="relative w-72 h-96">
                        <Image fill src="/images/juan.jpeg" alt="Picture of me during the 2024 solar eclipse."/>
                    </div>
                </div>
            </div>
        </div>
    )
}