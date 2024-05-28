import Image from "next/image"

export default function Intro() {
    return(
        <div className="h-[600px] flex items-center w-full">
            <div className="w-2/3 flex-1 text-3xl text-left">
                <h1 className="text-7xl pb-3 font-bold">Hola, Mundo!</h1> 
                <div className="">
                    My name is Juan Alberto Lagunas Lara, but to my family, I'm known as Betillo or Tillo ("Tee-yo") for short.
                    <br></br><br></br>
                    I'm an enthusiastic electrical and computer engineering student, with an interest in robotics and a strong desire to empower my Mexican community.
                    My passions extend to both acquiring knowledge and sharing it with others.
                </div>
            </div>

            <div className="w-1/3 h-full flex items-center justify-end">
                <div className="relative w-60 h-80">
                    <Image fill src="/images/juan.jpeg" alt="Picture of me during the 2024 solar eclipse." className="rounded-3xl"/>
                </div>
            </div>
        </div>
    )
}